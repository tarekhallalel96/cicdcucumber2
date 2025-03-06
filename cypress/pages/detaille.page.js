class DetaillePage {
elements = {
    detailleproductTitle: () => cy.get(".inventory_details_name.large_size"),
    detailleproductimg: () => cy.get(".inventory_details_img"),
    detailleproductdesc: () => cy.get(".inventory_details_desc.large_size"),
    detailleproductprice: () => cy.get(".inventory_details_price"),
    addToCartButton: () => cy.get("#add-to-cart"),
    retirerDuPanierBouton: () => cy.get("#remove"),
    revenirInventaire: () => cy.get("#back-to-products"),
    
      };

ajouterToCartButton() {
  this.elements.addToCartButton().click();
}



retirerProduitDuPanier () {
  this.elements.retirerDuPanierBouton().click();

}
  allerAuInventaire() {
    this.elements.revenirInventaire().click();
  }

}

export default new DetaillePage();
