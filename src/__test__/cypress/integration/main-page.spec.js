'use strict'

describe('Home', () => {

    before(() => {
        cy.visit('/')
        cy.get('input')
        cy.contains('button', 'Search')
    })
    
    it('Must load the main page and find at least the initial 50 pokemons', () => {
        cy.wait(2000)
        cy.get('ul').should('have.descendants', 'li')
        cy.get('ul').find('li').should('have.length', 50)
    })

    it('Must write Charizard on the input and search for it', () => {
        cy.get('input').type('charizard')
        cy.get('button').click()
        cy.get('li').children().find('span', 'Charizard')
    })

    it('Once Charizard has been found, should click on it to open modal', () => {
        cy.get('button').click()
        cy.get('li').click()
        cy.contains('h3', 'Pokemon information')
    })

    it('Once we click on Charizard container, we should close the modal', () => {
        cy.get('button').each(button => {
            if (button['0'].textContent !== 'Search') {
                cy.get(button).click()
                cy.contains('h3', 'Pokemon information').should('not.exist')
            }
        })
    })

    it('Must clear the input and then the initial pokemon list should be displayed', () => {
        cy.get('input').clear()
        cy.get('ul').find('li').should('have.length', 50)
    })

    it('Must look for an unexisting pokemon on the input and search for it, finally should clear the input', () => {
        cy.get('input').type('asdsa')
        cy.get('button').click()
        cy.contains('h4', 'No pokemons with the name or id "asdsa" were found')
        cy.get('input').clear()
    })

    it('Should type an empty string on input and then search pokemon, checking that the pokemons list has at least the initial 50 pokemons', () => {
        cy.get('input').type(' ')
        cy.get('button').click()
        cy.get('ul').find('li').should('have.length', 50)
    })

    it('Must scroll to bottom on pokemons list to render another 50 pokemons', () => {
        cy.get('ul').scrollTo('bottom')
        cy.wait(2000)
        cy.get('ul').find('li').should('have.length', 100)
    })

})