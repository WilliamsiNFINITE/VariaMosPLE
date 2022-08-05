Feature: Manage Projects

  Verify that the user can manage projects

  @included
  Scenario Outline: User creates a project
    Given a project called <project_name>
    When the user "creates" the project
    Then the <project_name> should appear in the menu

    Examples:
      | project_name |
      | name1        |
      | name2        |

  @included
  Scenario Outline: User changes the name of the project
    Given a project called <project_name>
    When the user "changes the name of" the project
    Then the <project_name> should appear in the menu

    Examples:
      | project_name |
      | name1        |
      | name2        |

  @included
  Scenario Outline: User deletes a project
    Given a project called <project_name>
    When the user "deletes" the project
    Then the user should be sent to "the project management tab"

    Examples:
      | project_name |
      | name1        |
      | name2        |

#  Scenario: User downloads the project
#    Given
#    When
#    Then
#
#  Scenario: User uploads a project
#    Given
#    When
#    Then
#
