class cartPage {
    elements = {
      checkoutButton: () => cy.get('#checkout'),
      cartButton: () => cy.get('#shopping_cart_container'),
      badgeButton: () => cy.get('[data-test="shopping-cart-badge"]'),
      continueButton: () => cy.get('#continue-shopping'),
      removeButton: () => cy.get('.item_pricebar .btn_secondary'),
      addedProducts: () => cy.get(".inventory_item_name"),
      productsDescriptions: () => cy.get(".inventory_item_desc"),
      productsPrice: () => cy.get(".inventory_item_price")

    }
  clickContinueButton(){
   this.elements.continueButton().click();
  }

  clickqueCartbutton(){
       this.elements.checkoutButton().click();
  }


  clickCheckoutButton() {
    this.elements.checkoutButton().click();
  }
  clickRemoveButton(){
    this.elements.removeButton().click();
  }
  getBadgeElement() {
    return this.elements.badgeButton();
}
    
  getAddedProducts(){
    let produitsAjoutes =[]
        this.elements.addedProducts().each((produit, id)=>{
          cy.wrap(produit).invoke("text").then((produitTexte) => {
            produitsAjoutes.push(produitTexte);
          })
        })
    return produitsAjoutes;
  }
}
export default new cartPage(); 


