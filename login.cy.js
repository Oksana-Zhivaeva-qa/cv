describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели не верный пароль
         cy.get('#loginButton').click(); //войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Текст виден пользователя
         cy.get('#messageHeader').should('be.visible'); // Есть крестик и он виден пользователю
     
        })

    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления

         cy.get('#forgotEmailButton').click(); //Нажимаю восстановить пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту для восстановления
         cy.get('#restoreEmailButton').click (); // нажала отправить код
         
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Текст виден пользователя
         cy.get('#messageHeader').should('be.visible'); // Есть крестик и он виден пользователю
     
        })

        it('Верный логин и не верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio6'); // ввели не верный пароль
         cy.get('#loginButton').click(); //войти
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Текст виден пользователя
         cy.get('#messageHeader').should('be.visible'); // Есть крестик и он виден пользователю
     
        })

     it('Не верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления

         cy.get('#mail').type('german1@dolnikov.ru'); // ввели не верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели  верный пароль
         cy.get('#loginButton').click(); //войти
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Текст виден пользователя
         cy.get('#messageHeader').should('be.visible'); // Есть крестик и он виден пользователю
     
        })

            it('Проверка, что в логине есть @', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления

         cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); //войти
         
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Текст виден пользователя
         cy.get('#messageHeader').should('be.visible'); // Есть крестик и он виден пользователю
     
        })

        it('Проверка на приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановления

         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин 
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); //войти
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Текст виден пользователя
         cy.get('#messageHeader').should('be.visible'); // Есть крестик и он виден пользователю
     
        })

        describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('oksana.zhivaewa@yandex.ru');                   // вводим логин
         cy.get('input[id="k_password"]').type('');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });

 }) 
 

//План
//Найти поле логин и ввести правильный логин
//Найти поле пароль и ввести правильный пароль
//Найти кнопку Войти и нажать на нее
//Проверить, что авторизация прошла успешно