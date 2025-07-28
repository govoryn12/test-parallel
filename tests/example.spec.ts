import { expect, test } from "@playwright/test";

test.describe('Group',() => {
  test("Must passed 1", async ({ page }) => {
    // Expect this test to be passed
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10_000);
    await expect(page).toHaveTitle(/Playwright/);
  });

  test.fail("Failed test", async ({ page }) => {
    // Expect this test to fail
    await page.goto("https://playwright.dev/");

    // Start waiting for an inexistent response
    const response = page.waitForResponse(/hello\/world/);
    // Trying to click the nonexistent link
    await page.getByRole("link", { name: "Inexistent link" }).click();
    await response;

    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });

  test("Must passed 2", async ({ page }) => {
    // Expect this test to be passed
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10_000);
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("Must passed 3", async ({ page }) => {
    // Expect this test to be passed
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10_000);
    await page.getByRole("link", { name: "Get started" }).click();
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });
});
