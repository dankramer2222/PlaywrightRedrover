import WhatsNewPage from '../test_page_object/whats_new_page'
class HomePage{
    page:any
    constructor(page){
        this.page = page
    }
    //locators
    locators ={
        getWhatsNewLink: () => this.page.getByRole('listitem').filter({hasText: "What's New"})
    }
    //methods

    async open(){
        await this.page.goto('/')
    }
    async clicWhatsNewLink(){
        await this.locators.getWhatsNewLink().click();

        return new WhatsNewPage(this.page)
    }
}
export default HomePage;