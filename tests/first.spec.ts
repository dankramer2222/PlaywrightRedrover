import { test, expect } from '@playwright/test';

test.describe('first test', () => {
    test('first test', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        let title = await page.title();
        console.log(title);
        expect(title).toEqual('DEMOQA');
    });
});
