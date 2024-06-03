Feature: University Application

  Scenario: Access the university site
    Given I am on the Atitus Education homepage
    When I check the page title
    Then the title should contain "Atitus Educação"

  Scenario: Fill out university application form
    Given I am on the Atitus Education homepage
    When I click on the enrollment link
    And I fill in the "Nome completo" field with "nome do joão"
    And I fill in the "WhatsApp" field with "(54) 99999-9999"
    And I fill in the "E-mail" field with "abcdefgh@gmail.com"
    And I select "Engenharia Civil" from the course dropdown
    And I select "Passo Fundo" from the city dropdown
    And I select "Quero Informações" from the subject dropdown
    And I click on the submit button
    Then I should see the application form submitted successfully
