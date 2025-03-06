@tc-007
Feature: Affichage des produits dans le panier

  Background: 
    Given je suis sur la page produits 
    When je mets dans le panier les produits "Sauce Labs Backpack, Sauce Labs Bike Light"
    And je clique sur le bouton panier

  Scenario: verifier que les produits ajoutés contienent une description
    Then je retrouve le produit avec sa description dans le panier
  
  Scenario: verifier que les produits ajoutés contienent un bouton Remove
    Then le produit contient un bouton Remove

  Scenario: verifier que les produits ajoutés contienent des prix
      Then le produit contient un prix



    
