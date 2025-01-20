// filepath: /Users/niek/projects/github/npalm/react-github-repos/tests/app.spec.ts

import { test, expect } from '@playwright/test';

test.describe('GitHub Repositories App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display the title', async ({ page }) => {
    await expect(page).toHaveTitle(/GitHub Repositories/);
  });

  test('should display the default user repositories', async ({ page }) => {
    await page.waitForSelector('.repo-list');
    const repoTiles = await page.$$('.repo-tile');
    expect(repoTiles.length).toBeGreaterThan(0);
  });

  test('should allow changing the GitHub user/org', async ({ page }) => {
    await page.fill('#username', 'microsoft');
    await page.press('#username', 'Enter');
    await page.waitForSelector('.repo-list');
    const repoTiles = await page.$$('.repo-tile');
    expect(repoTiles.length).toBeGreaterThan(0);
  });

  test('should sort repositories by stars', async ({ page }) => {
    await page.click('input[value="stars"]');
    await page.waitForSelector('.repo-list');
    const repoTiles = await page.$$('.repo-tile');
    expect(repoTiles.length).toBeGreaterThan(0);
  });

  test('should sort repositories by forks', async ({ page }) => {
    await page.click('input[value="forks"]');
    await page.waitForSelector('.repo-list');
    const repoTiles = await page.$$('.repo-tile');
    expect(repoTiles.length).toBeGreaterThan(0);
  });
});