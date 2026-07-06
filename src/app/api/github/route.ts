import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

const GITHUB_USERNAME = 'diyoadisuta';

// Repos to exclude from the showcase (profile config, empty repos, etc.)
const EXCLUDED_REPOS = ['diyoadisuta', 'portofolio'];

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  homepage: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  fork: boolean;
  archived: boolean;
}

export interface TransformedRepo {
  id: number;
  name: string;
  fullName: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  homepage: string | null;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  size: number;
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-app',
    };

    // Use GitHub token if available for higher rate limits
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30&type=owner`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out excluded, forked, and archived repos
    const filteredRepos: TransformedRepo[] = repos
      .filter(
        (repo) =>
          !EXCLUDED_REPOS.includes(repo.name) &&
          !repo.fork &&
          !repo.archived
      )
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        homepage: repo.homepage,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
        size: repo.size,
      }));

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
