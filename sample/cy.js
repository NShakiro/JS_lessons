describe('Recording 10/7/2024 at 4:50:17 PM', () => {
  it('tests Recording 10/7/2024 at 4:50:17 PM', () => {
    cy.viewport(1259, 844)
    cy.visit(
      'https://www.google.com/search?q=new+Set%28newArr%29+in+js&sca_esv=f8a6a0f1927ce164&rlz=1C1RXQR_enUS1001US1001&ei=4wsEZ-CsA8_dwN4P4ufriQo&ved=0ahUKEwigqoXz1_yIAxXPLtAFHeLzOqEQ4dUDCA8&uact=5&oq=new+Set%28newArr%29+in+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiFW5ldyBTZXQobmV3QXJyKSBpbiBqczIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIFECEYqwJI8S5QzQ5YqSxwAXgBkAEAmAFxoAGQBaoBAzYuMbgBA8gBAPgBAfgBApgCCKACqAWoAhLCAhMQABiABBhDGLQCGIoFGOoC2AEBwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQHCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AECwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBAsICBRAhGKABmAMJugYECAEYB7oGBggCEAEYCpIHAzcuMaAHliE&sclient=gws-wiz-serp'
    )
    cy.get('div.BKRPef svg').click()
    cy.get('#APjFqb').click()
    cy.get('#APjFqb').type('new cypress test')
    cy.type('{enter}')
    cy.get('#rso > div:nth-of-type(1) h3').click()
    cy.location('href').should(
      'eq',
      'https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test'
    )
  })
})
cy.visit('https://en.wikipedia.org/wiki/UTF-16')
cy.get('.cdx-text-input__input').type('gold')
cy.get('.cdx-button--action-default').click()
cy.url().should('contains', 'https://en.wikipedia.org/wiki/Gold')
cy.get('#toc-Chemistry > .vector-toc-link span:nth-child(2)').click()
cy.get('#toc-References span:nth-child(2)').click()
