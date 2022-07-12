
describe('Тестирование staya', function () {

  it('Проверка успешного добавления товара в корзину', function () {
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('yungjunk667@gmail.com');
    cy.get('.auth-form > form > [type="password"]').type('junkXhead96');
    cy.get('.auth-form__submit').click();
    cy.contains('Мои заказы');
  })
})
