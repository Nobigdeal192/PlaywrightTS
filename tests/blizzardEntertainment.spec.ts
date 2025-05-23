import { test, expect } from '@playwright/test'

test.describe('Blizzard Entertainment web tests', () => {
    test('Homepage verify homepage', async ({ page }) => {

        //Go to Homepage and verify title
        await page.goto("https://www.blizzard.com/en-us/");
        await expect(page).toHaveTitle("Blizzard Entertainment");

        //Verify top nav links for games
        expect(page.getByRole('button', {name: "Warcraft"})).toBeVisible();
        expect(page.locator('blz-nav-link[text="Warcraft"]')).toBeVisible();
        expect(page.getByRole('button', {name: "Diablo"})).toBeVisible();
        expect(page.getByRole('button', {name: "Overwatch"})).toBeVisible();
        expect(page.getByRole('button', {name: "Starcraft"})).toBeVisible();
        await page.getByRole('button', {name: "More"}).hover();
    });
    test('Click on Diablo IV dropdown link', async ({ page }) => {
         //Go to Homepage and verify title
         await page.goto("https://www.blizzard.com/en-us/");

         // Click on D4 dropdown link
         await page.getByRole('button', {name: "Diablo"}).hover();
         await page.locator('a[id="blz-nav-diablo-iv"]').click();
         
         // Page have D4 title
         await expect(page).toHaveTitle("Diablo IV");
         await expect(page.getByRole('button', {name:"Buy Now"}).first()).toBeVisible();
    })
});