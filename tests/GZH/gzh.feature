Feature: GZH Esportes Website Tests

  Scenario: Verify page title
    Given the user navigates to "https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/"
    Then the page title should contain "Esportes: Futebol, Vôlei, Futsal, Basquete e Mais | GZH"

  Scenario: Click on headline and search, then login with Google
    Given the user navigates to "https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/"
    When the user clicks on the highlighted news card
    And the user waits for 3 seconds
    And the user clicks on the "Home" link
    And the user clicks on the search button
    And the user enters "Dia Nacional do Fusca: história e curiosidades de um modelo que marcou gerações" in the search field and presses Enter
    Then the URL should be "https://gauchazh.clicrbs.com.br/search/?q=Dia%20Nacional%20do%20Fusca%3A%20hist%C3%B3ria%20e%20curiosidades%20de%20um%20modelo%20que%20marcou%20gera%C3%A7%C3%B5es"
    When the user clicks on the first search result headline
    And the user clicks on the money icon
    Then the URL should be "https://gauchazh.clicrbs.com.br/gzh-ofertas/"
    And the page should display a heading with the name "Recentes"
