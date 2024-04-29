class HomePage{
    page:any
    constructor(page){
        this.page = page
    }
    //locators
    locators ={

    }
    //methods

    async open(){
        await this.page.goto('/')
    }
}
export default HomePage;