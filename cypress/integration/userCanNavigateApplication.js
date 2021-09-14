describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("display a header", () => {
    cy.get("[data-testid]").should("contain.text", "Employee management");
  });


  describe('Employee list section', () => {

    it("is expected to list 4 times", () => {
      cy.get("[data-testid=employee-list]").children().should("have.length", 4)
      
    });
    
  });

  
});
