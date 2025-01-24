import { expect } from "playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class LoginPage{
    constructor(page){
       
        this.actions = new CommonActions(page)
        this.usernameSelector='#username'
        this.passwordSelector='#password'
        this.loginButton='button[type="submit"]'

    }
    async navigate(){
        await this.actions.navigate('https://the-internet.herokuapp.com/login')
    }
    async login(username,password){
        await this.actions.fill(this.usernameSelector,username)
        await this.actions.fill(this.passwordSelector,password)
        await this.actions.click(this.loginButton)
    }
    async getErrorMessage(){
        return await this.actions.getText('#flash')
    }
    async assertErreorMessage(expectedMessage){
        const actualMessage = await this.getErrorMessage()
        expect(actualMessage).toContain(expectedMessage)
    }
}