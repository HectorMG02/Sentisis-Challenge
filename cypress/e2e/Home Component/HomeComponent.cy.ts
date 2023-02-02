/// <reference types="cypress" />

describe('Table tests', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Loads the table', () => {
		cy.get('table').should('be.visible');
	});

	 it('when press increase button the item quantity increase', () => {
		const value = cy.get('[data-testid="unit-selector-7p"] > .MuiInputBase-root > .MuiInputBase-input');
		value.should('have.value', '0');

		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="unit-selector-7p"] > .MuiInputBase-root > .MuiInputBase-input').should('have.value', '1');
	});

	it('when press decrease button the item quantity decrease', () => {
		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="unit-selector-7p"] > .MuiInputBase-root > .MuiInputBase-input').should('have.value', '1');

		cy.get('[data-testid="decrease-button-7p"]').click();
		cy.get('[data-testid="unit-selector-7p"] > .MuiInputBase-root > .MuiInputBase-input').should('have.value', '0');
	});

	it('if quantity is 0 the decrease button is disabled', () => {
		cy.get('[data-testid="decrease-button-7p"]').should('be.disabled');
	});

	it('if quantity is > 0 the decrease button is enabled', () => {
		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="decrease-button-7p"]').should('not.be.disabled');
	});

	it('if some item has quantity > 0 cart button is enabled', () => {
		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="cart-button"]').should('not.be.disabled');
	});

	it('if cart button is enabled but remove all the quantity the cart button will be disabled', () => {
		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="cart-button"]').should('not.be.disabled');

		cy.get('[data-testid="decrease-button-7p"]').click();
		cy.get('[data-testid="cart-button"]').should('not.exist');
	});

	it('if press view button the modal will be rendered', () => {
		cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click();
		cy.get('[data-testid="modal"]').should('be.visible');
	});

	it('if press outside the modal this will be closed', () => {
		cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click();
		cy.get('[data-testid="modal"]').should('be.visible');
		cy.get('[data-testid="modal"]').click(0, 0);
		cy.get('[data-testid="modal"]').should('not.exist');
	});

	it('if press add unit button into the modal then the unit value will be increased', () => {
		cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click();
		cy.get('[data-testid="modal"]').should('be.visible');
		cy.get('[data-testid="add-unit-button"]').click();
		cy.get('[data-testid="unit-selector-7p"] > .MuiInputBase-root > .MuiInputBase-input').should('have.value', '1');
	});

	it('if press cart button the modal will be rendered', () => {
		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="cart-button"]').click();
		cy.get('[data-testid="modal"]').should('be.visible');
	});

	it('if press outside the modal this will be closed', () => {
		cy.get('[data-testid="increase-button-7p"]').click();
		cy.get('[data-testid="cart-button"]').click();
		cy.get('[data-testid="modal"]').should('be.visible');
		cy.get('[data-testid="modal"]').click(0, 0);
		cy.get('[data-testid="modal"]').should('not.exist');
	});

});
