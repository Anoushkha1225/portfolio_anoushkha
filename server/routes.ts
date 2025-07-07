import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy endpoint
  app.get("/api/github/repos", async (req, res) => {
    try {
      const githubToken = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN;
      
      const headers: Record<string, string> = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Anoushkha-Portfolio'
      };

      if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`;
      }

      const response = await fetch('https://api.github.com/users/Anoushkha1225/repos', {
        headers
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repos = await response.json();
      
      // Filter out forks and archived repos, sort by stars and update date
      const filteredRepos = repos
        .filter((repo: any) => !repo.fork && !repo.archived)
        .sort((a: any, b: any) => {
          // Sort by stars first, then by update date
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

      res.json(filteredRepos);
    } catch (error) {
      console.error('GitHub API Error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch GitHub repositories',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
