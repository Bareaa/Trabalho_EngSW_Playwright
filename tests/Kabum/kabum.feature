Feature: KaBuM! Website Tests

  Scenario: Verify page title
    Given the user navigates to "https://www.kabum.com.br/"
    Then the page title should contain "KaBuM!"

  Scenario: Check if the cart is empty
    Given the user navigates to "https://www.kabum.com.br/"
    When the user clicks on the "Carrinho" link
    Then the cart should display a message "O seu carrinho está vazio."
