import { test, expect } from '@playwright/test';

test.describe('Super.com tests', () => {
    test('Go to homepage and verify headers', async ({ page }) => {
        await page.goto('https://www.super.com/home/');
        await expect(page.getByRole('heading', {name: "Home"})).toBeVisible();
        await expect(page.locator('[data-test-id="desktop-header-travel"]')).toBeVisible();
        await expect(page.getByRole('heading', {name: "Wallet"})).toBeVisible();
        await expect(page.locator('#desktop-header-earn')).toBeVisible();
        await expect(page.locator('#desktop-header-save')).toBeVisible();
        await expect(page.locator('#desktop-header-travel')).toBeVisible();
    })

    test('Click Save header link and verify page', async ({ page }) => {
        await page.goto('https://www.super.com/home/');

        const saveHeader = page.locator('#desktop-header-save');

        await saveHeader.click();
        await expect(page).toHaveURL('https://www.super.com/home/save');
        await expect(page.getByRole('heading', {name: "Save money everyday"})).toBeVisible();
        await expect(page.getByRole('heading', {name: "Online offers"})).toBeVisible();
        await expect(page.getByRole('heading', {name: "More ways to save"})).toBeVisible();
    })

    test('Click more tab and close menu', async ({ page }) => {
        await page.goto('https://www.super.com/home/');
        await page.locator("#desktop-header-more").click();
        await page.locator('data-testid=CloseIcon').click();
    })

    test('Click on Travel and enter random number', async ({ page }) => {
        const phoneNumberInputField = page.locator('input[type="tel"]');

        await page.goto('https://www.super.com/home/');
        await page.locator('#desktop-header-travel').click();
        await expect(page.locator('[data-test-id="phonenumber-continue-button"]')).toBeVisible();
        await expect(phoneNumberInputField).toBeVisible();
        //phoneNumberInputField.fill('9999999999');
    })

})