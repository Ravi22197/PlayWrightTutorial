import{test,expect} from '@playwright/test'
class LoginPage {

    constructor(page) 
    {
        this.page = page
        this.username = "#email1"
        this.password = "//input[@placeholder='Enter Password']"
        this.loginbutton =    "//button[text()='Sign in']"
        this.header = "//h2[normalize-space()='Sign In']"
    }

    async loginToApplication ()  // we can take data from method eg: async loginToApplication(usr,pass)
    {
        await this.page.fill( this.username ,'admin@email.com') // fill(this.username,usr)
        await this.page.fill(this.password , 'admin@123')       // fill(this.password,pass)
        await this.page.click(this.loginbutton)
       // await this.page.pause()
    }
    async verifySignIn() {
        await expect(this.page.locator(this.header)).toBeVisible()
    }

}

module.exports = LoginPage;