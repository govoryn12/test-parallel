import { expect, test } from "@playwright/test";

test("Must passed 1", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(10_000);
  await expect(page).toHaveTitle(/Playwright/);
});

test.fail("failed test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Start wait for inexistent response
  const response = page.waitForResponse(/hello\/world/);
  // Try to click the inexistent link.
  await page.getByRole("link", { name: "Inexistent link" }).click();
  await response;

  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("Must passed 2", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(10_000);
  await expect(page).toHaveTitle(/Playwright/);
});

test("Must passed 3", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(10_000);
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
