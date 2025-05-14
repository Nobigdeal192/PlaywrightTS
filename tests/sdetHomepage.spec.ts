import { test, expect } from "@playwright/test";

test.describe("Sdet Homepage test", () => {
  test("Navigate to homepage and verify title", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Click Get Started button and verify About page", async ({ page }) => {
    // Open URL
    await page.goto("https://practice.sdetunicorns.com/");

    //Click on get started button
    await page.locator("#get-started").click();

    const headingText = page.locator('text="Think different. Make different."');

    //verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);

    //Verify heading
    await expect(headingText).toBeVisible();
  });

  test("Verify home link is enabled using text and CSS", async ({
    page,
  }) => {
    await page.goto("https://practice.sdetunicorns.com/");

    //Find home text
    const homeText = page.locator("#zak-primary-menu >> text=Home")

    //Verify Home link is enabled
    await expect(homeText).toBeEnabled();
  });
});
