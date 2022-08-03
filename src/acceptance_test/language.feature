Feature: Manage Languages

  Verify that the user can manage languages

  @included
  Scenario Outline: user creates a language
    Given the user is on the language tab
    And the user insert the name <name>
    And the user insert a correct abstract <syntax>
    And the user insert a correct concrete <syntax>
    When the user clicks the "Create" button
    Then the new language called <name> should be added
    Examples:
      | name       | syntax |
      | lenguage_1 | {}     |
      | lenguage_2 | {}     |


  @included
  Scenario Outline: user cannot create an existing language
    Given the user is on the language tab
    And the user insert the name <name>
    And the user insert a correct abstract <syntax>
    And the user insert a correct concrete <syntax>
    When the user clicks the "Create" button
    Then the new language called <name> should not be added

    Examples:
      | name       | syntax |
      | lenguage_1 | {}     |
      | lenguage_2 | {}     |

  Scenario: user modifies a language
    Given a specific language from the list
    When the user click on the button to edit it
    And the user insert valid informations
    And the user clicks on the update button
    Then the language should be updated

  Scenario: user deletes a language
    Given a specific language from the list
    When the user clicks on the button to delete it
    And the user confirms
    Then the language should be deleted


