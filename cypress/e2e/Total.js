export class Total {
    SauceLabsBackpack() {
        return cy.contains('$29.99')
            .invoke('text').then(parseFloat)
    }
    SauceLabsBikeLight() {
        return cy.contains('$9.99')
            .invoke('text').then(parseFloat)
    }
    SauceLabsBoltTShirt() {
        return cy.contains('$15.99')
            .invoke('text').then(parseFloat)
    }
}
