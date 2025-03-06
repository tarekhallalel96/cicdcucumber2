Feature: Affichage du detaille produits

  Background:
    Given je suis sur la page produits
    When je clique sur un produit "Sauce Labs Backpack"

  Scenario: Vérification du detailles des produits
    Then je retrouve le produit avec sa description son prix son image dans le detaille prodiot

  Scenario: Vérification du button add card 
    Then je retrouve le produit avec sa description son prix son image dans le detaille prodiot
    And je recupere la valeur actuel de cart badge
    And  je clique sur add to cart
    And  le nombre du cart badge increment 
    And le button add cart  devient remove  
    And je recupere la valeur actuel de cart badge
    And je clique sur le button remove
    And  le nombre du cart badge decrement 
    And le button remove  devient add ton cart 


  Scenario: Vérification du button retour au inventaire  
    Then je retrouve le produit avec sa description son prix son image dans le detaille prodiot
    And je clique sur back to product
    And la page daccueil saffiche  

