import { expect } from "@playwright/test";
import HomePage from "./home_page.spec";
class WhatsNewPage{
    page:any
    constructor(page){
        this.page = page
    }
    //locators
    locators ={
        getPageHeader: () => this.page.getByRole('heading').first(),
        getLogoLink: () => this.page.getByLabel('store logo')
    }
    //methods
    async clickLogoLink(){
        await this.locators.getLogoLink().click();

        return new (this.page)
    }

}
export default WhatsNewPage;