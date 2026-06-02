// @ts-check
import { test, expect } from '@playwright/test';
import { setHeapSnapshotNearHeapLimit } from 'node:v8';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});




test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


//steps
//git clone URL
//untracked
// git add - workspace
//git commit - to local repository(git commit -m "description for commit")
// git push - to remote repository(github)
//git pull - from remote repository files to get here
//git checkout branchname - to switch to other branches

