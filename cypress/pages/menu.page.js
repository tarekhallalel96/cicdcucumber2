class MenuPage{
    elements={
        menuBoutton : () => cy.get("#react-burger-menu-btn"),
        allItem : () => cy.get("#inventory_sidebar_link"),  
        logOut : () => cy.get("#logout_sidebar_link"),
        resetAppState : () => cy.get("#reset_sidebar_link"),
        aboutBouton: () => cy.get("#about_sidebar_link")
    };

    clickSurMenuButton() {
        this.elements.menuBoutton().click();
    }

    clickAllItem(){
        this.elements.allItem().click();
    }

    clickLogOut(){
        this.elements.logOut().click();
    }

    clickResstAppState(){
        this.elements.resetAppState().click();
    }

    clickAboutBouton(){
        this.elements.aboutBouton().click();
    }

}
export default new MenuPage();