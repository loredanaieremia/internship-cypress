describe('API requests', () => {

    it('GET API test',() => {
      cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((res) => {
        expect(res).to.have.property('status',200)
        expect(res.body).to.not.be.null
      })
    })  
    it('POST API test-order placed for purchasing the pet',() => {
      const item = {
        "id": 7,
        "petId": 7,
        "quantity": 1,
        "shipDate": "2021-08-21T21:28:17.874Z",
        "status": "placed",
        "complete": true
      }
   
      cy.request('POST','https://petstore.swagger.io/v2/store/order',item).then((response) => {
        expect(response.status).to.eq(200)
            
      
    })
    })  
  })   