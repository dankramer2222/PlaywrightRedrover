import { test, expect } from '@playwright/test';
import HomePage from '../test_page_object/home_page.spec'
import { WHATS_NEW_PAGE_END_POINT,BASE_URL } from '../helpers/testData';
import { WHATS_NEW_PAGE_HEADER } from '../helpers/testData';
import WhatsNewPage from '../test_page_object/whats_new_page';

    test.describe('homePage.spec.ts', () =>{
        test('verify user can navigate to home page clicking on logo from "What\'s New" page',async({page})=>{
            const homePage = new HomePage(page)

            await homePage.open();
            const whats_new_page = await homePage.clicWhatsNewLink()
            await expect(page).toHaveURL(BASE_URL + WHATS_NEW_PAGE_END_POINT);
            await expect(whats_new_page.locators.getPageHeader()).toHaveText(WHATS_NEW_PAGE_HEADER)

            await whats_new_page.clickLogoLink()
            await expect(page).toHaveURL(BASE_URL);
        })
    })