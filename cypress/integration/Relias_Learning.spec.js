describe('Relias Learning', () =>{
    it('Goes to Relias Learning', () =>{
        cy.visit('https://login.reliaslearning.com/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drlms-legacy%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dusersapi%2520assessmentsapi%2520learningapi%2520openid%2520impersonator%2520saml%2520offline_access%2520identityapi%26state%3DOpenIdConnect.AuthenticationProperties%253DpusjvqMmhQenhtAaAVEgexJF0rPkHFgXl6EVZErY6UWubxEhq2imuhPISld9KqdxStNjJLf-J-Z79HcY7jGFlzE3YpWAbs2_ls5AVNC4Y2zWNk-JpshLlij516JECqDhoq0Z_pbNng__pA96odMKMA%26nonce%3D637346752043827318.MWJjZDBjMzMtZmMxZi00MmQ5LTk5YjAtNDhiYWI1YWJhYjMzMjk2MzJlY2MtYjEwOS00NWYxLWJhMWUtYjE3MDhjYWQ0ZjJi%26redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com%26post_logout_redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com');
        cy.contains('Password').should('be.visible');
    })

    it('Logs in without credentials', () => {
        cy.get('[data-cy=login-btn]').should('be.visible');
        cy.get('[data-cy=login-btn]').click();
        cy.get('[data-cy=username-req]').should('be.visible');
        cy.get('[data-cy=password-req]').should('be.visible');
    })

    it('Logs in with only username', () =>{
        cy.visit('https://login.reliaslearning.com/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drlms-legacy%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dusersapi%2520assessmentsapi%2520learningapi%2520openid%2520impersonator%2520saml%2520offline_access%2520identityapi%26state%3DOpenIdConnect.AuthenticationProperties%253DpusjvqMmhQenhtAaAVEgexJF0rPkHFgXl6EVZErY6UWubxEhq2imuhPISld9KqdxStNjJLf-J-Z79HcY7jGFlzE3YpWAbs2_ls5AVNC4Y2zWNk-JpshLlij516JECqDhoq0Z_pbNng__pA96odMKMA%26nonce%3D637346752043827318.MWJjZDBjMzMtZmMxZi00MmQ5LTk5YjAtNDhiYWI1YWJhYjMzMjk2MzJlY2MtYjEwOS00NWYxLWJhMWUtYjE3MDhjYWQ0ZjJi%26redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com%26post_logout_redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com');
        cy.get('[data-cy=username]').type('s@s.com');
        cy.get('[data-cy=login-btn]').click();
        cy.get('[data-cy=password-req]').should('be.visible');
    })

    it('Logs in with only password', () =>{
        cy.visit('https://login.reliaslearning.com/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drlms-legacy%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dusersapi%2520assessmentsapi%2520learningapi%2520openid%2520impersonator%2520saml%2520offline_access%2520identityapi%26state%3DOpenIdConnect.AuthenticationProperties%253DpusjvqMmhQenhtAaAVEgexJF0rPkHFgXl6EVZErY6UWubxEhq2imuhPISld9KqdxStNjJLf-J-Z79HcY7jGFlzE3YpWAbs2_ls5AVNC4Y2zWNk-JpshLlij516JECqDhoq0Z_pbNng__pA96odMKMA%26nonce%3D637346752043827318.MWJjZDBjMzMtZmMxZi00MmQ5LTk5YjAtNDhiYWI1YWJhYjMzMjk2MzJlY2MtYjEwOS00NWYxLWJhMWUtYjE3MDhjYWQ0ZjJi%26redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com%26post_logout_redirect_uri%3Dhttps%253A%252F%252Ftraining.reliaslearning.com');
        cy.get('[data-cy=password]').type('pass');
        cy.get('[data-cy=login-btn]').click();
        cy.get('[data-cy=username-req]').should('be.visible');
    })
    })