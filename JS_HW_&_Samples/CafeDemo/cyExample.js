describe('First Describe', () => {
    // describe('Describe Inside Describe', () => {
    //     it('first test inside', () => {
    //     })
    // specify('2nd test', () => {

    // })
    // // })

    it('1st test', () => {

    })


    it('2d test', () => {
        myobject.login(email, password)
        cypress.get(element).should('be.visible')
    })
})
