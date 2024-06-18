describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000');  // Cambia la URL según donde se ejecute tu aplicación
      cy.contains('ivysaur').should('be.visible');
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.').should('be.visible');
    });
  });
  