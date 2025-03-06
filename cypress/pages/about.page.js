class AboutPage {
    elements = {
      aboutTitle: () => cy.get("h1"), // Sélecteur du titre de la page About
      aboutContent: () => cy.get(".about-content"), // Sélecteur du contenu principal
    };
  
    verifierContenuAffiche() {
      this.elements.aboutTitle().should("be.visible").and("contain", "About");
      this.elements.aboutContent().should("be.visible");
    }
  }
  
  export default new AboutPage();
  