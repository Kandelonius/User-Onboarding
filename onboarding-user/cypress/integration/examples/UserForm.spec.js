import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 5)
const email = `${username}@acme.com`

describe('User Tests', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })
    it('entering an incomplete username does not work', () => {
        cy.get('.errors')
            .should('exist')
        cy.get('input[name="username"]')
            .type('a')
            .should('have.value', 'a')
        cy.get('.errors')
            .contains('username must have at least 2 characters!')
            .should('exist')
        cy.get('input[name="username"]')
            .type('b')
            .should('have.value', 'ab')
    })
    it('can enter a valid name into the username field', () => {
        cy.get('input[name="username"]')
            .type(username)
            .should('have.value', `ab${username}`)
    })
    it('premature submit attempt does not work # 1', () => {
        cy.contains('Submit')
            .should('be.disabled')
    })
    it('entering an incomplete email does not work but a valid email should', () => {
        cy.get('input[name="email"]')
            .type(username)
            .should('have.value', `${username}`)
        cy.get('.errors')
            .contains('a VALID email is required')
            .should('exist')
        cy.get('input[name="email"]')
            .type('@')
            .should('have.value', `${username}@`)
        cy.get('.errors')
            .contains('a VALID email is required')
            .should('exist')
        cy.get('input[name="email"]')
            .type('b')
            .should('have.value', `${username}@b`)
        cy.get('.errors')
            .contains('a VALID email is required')
            .should('exist')
        cy.get('input[name="email"]')
            .type('.')
            .should('have.value', `${username}@b.`)
        cy.get('.errors')
            .contains('a VALID email is required')
            .should('exist')
        cy.get('input[name="email"]')
            .type('c')
            .should('have.value', `${username}@b.c`)
    })
    it('premature submit attempt does not work # 2', () => {
        cy.contains('Submit')
            .should('be.disabled')
    })
    it('a password that is too short will not work.', () => {
        cy.get('input[name="password"]')
        .type('ab')
        .should('have.value', 'ab')
    cy.get('.errors')
        .contains('password must have at least 6 characters!')
        .should('exist')
        cy.get('input[name="password"]')
        .type('cd')
        .should('have.value', 'abcd')
    cy.get('.errors')
        .contains('password must have at least 6 characters!')
        .should('exist')
        cy.get('input[name="password"]')
        .type('e')
        .should('have.value', 'abcde')
    cy.get('.errors')
        .contains('password must have at least 6 characters!')
        .should('exist')
    })
    it('can enter text into password field', () => {
        cy.get('input[name=password]')
            .type('anything')
            .should('have.value', 'abcdeanything')
    })
    it('can check a button that starts out unchecked', () => {
        cy.get('input[name="TOS"]')
            .should('not.be.checked')

        cy.get('input[name="TOS"]')
            .click()
            .should('be.checked')
    })
    it('can now submit the completed form', () => {
        cy.contains('Submit')
            .click()
    })

})


// describe('Name Test', function () {

//     it('Explain what it does', function() {

//         // actions and assertions go here
//     })
// })

// it('can throw any error', () => {
//     cy.get('.docs-header')
//       .find('div')
//       .should(($div) => {
//         if ($div.length !== 1) {
//           // you can throw your own errors
//           throw new Error('Did not find 1 element')
//         }
//         const className = $div[0].className
//         if (!className.match(/heading-/)) {
//           throw new Error(`Could not find class "heading-" in ${className}`)
//         }
//       })
//   })