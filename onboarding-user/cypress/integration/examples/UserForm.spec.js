import { v4 as uuid } from 'uuid'

const username = uuid().slice(0, 5)
const email = `${username}@acme.com`

describe('User Tests', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })
    it('can enter text into the username field', () => {
        cy.get('input[name="username"]')
            .type(username)
            .should('have.value', username)

        cy.get('input[name="email"]')
        .type(email)
        .should('have.value', email)

        cy.get('input[name=password]')
        .type('anything')
        .should('have.value', 'anything')
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