Feature: Swag Labs Website Tests

  Scenario: Verify page title
    Given the user navigates to "https://www.saucedemo.com/"
    Then the page title should contain "Swag Labs"

  Scenario: Login and add an item to the cart
    Given the user navigates to "https://www.saucedemo.com/"
    When the user logs in with username "standard_user" and password "secret_sauce"
    And the user adds the first item to the cart
    Then the cart should have 1 item

  Scenario: Login, add an item to the cart, and logout
    Given the user navigates to "https://www.saucedemo.com/"
    When the user logs in with username "standard_user" and password "secret_sauce"
    And the user adds the first item to the cart
    Then the cart should have 1 item
    When the user logs out
    Then the user should be redirected to "https://www.saucedemo.com/"
