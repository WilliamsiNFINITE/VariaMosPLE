Feature: Visit external links

  Verify that the external links are valid

#  Scenario Outline: User visit external links
  @included
  Scenario Outline: User visits external links
    Given the user is on the main page
    When the user clicks on the button <button>
    Then the user should be sent to <website>

    Examples:
      | button | website       |
      | logo   | variamos_home |
      | home   | variamos_home |
      | wiki   | variamos_wiki |
