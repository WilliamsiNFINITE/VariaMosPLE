Feature: Create graphs

  Verify that the user can create graphs


  @included
  Scenario: user opens the side menu
    Given the menu is "closed"
    When the user clicks on the menu button
    Then the side menu "opens"

  @included
  Scenario: user closes the side menu
    Given the menu is "opened"
    When the user clicks on the menu button
    Then the side menu "closes"

  @included
  Scenario Outline: user creates a new element on side menu
    Given a specific <name>
    When the user creates an <element> called <name>
    Then the <name> should appear on the menu

    Examples:
      | name  | element      |
      | name1 | model        |
      | name2 | product_line |
      | name3 | application  |
      | name4 | adaptation   |

  @included
  Scenario Outline: user renames an element on side menu
    Given an existing <element> called <old_name>
    When the user changes the name of the <element> to <new_name>
    Then the <new_name> should appear on the menu

    Examples:
      | old_name  | new_name  | element      |
      | old_name2 | new_name2 | product_line |
      | old_name3 | new_name3 | application  |
      | old_name4 | new_name4 | adaptation   |

  @included
  Scenario Outline: user delete an element on side menu
    Given an existing <element> called <name>
    When the user deletes <element>
    Then the <name> should not appear on the menu

    Examples:
      | name      | element      |
      | old_name1 | model        |
      | old_name2 | product_line |
      | old_name3 | application  |
      | old_name4 | adaptation   |

    Scenario: user can drag and drop elements
      Given
