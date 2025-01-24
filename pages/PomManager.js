import LoginPage from "./LoginPage.js";
import SecurePage from "./SecurePage.js";
import CheckBoxesPage from "./CheckBoxesPage.js";

export default class PomManger{

    constructor(page){
        this.page=page;
        this.loginPage= new LoginPage(page);
        this.securePage=new SecurePage(page);
        this.checkboxesPage = new CheckBoxesPage(page);
    }
}