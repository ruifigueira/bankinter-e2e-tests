Feature: Login

  Scenario Outline: Wrong Login
    Given I'm at Bankinter Mortgages and Loans page
    When I click on the menu "Inicio"
    And I fill client form with:
      | Usuario    | <user> |
      | Contraseña | <pass> |
    Then I should see the message error "<message>"

    Examples: 
      | user      | pass      | message                                                    |
      | guardiola | ' 1 = 1;  | Sus claves han sido desactivadas por motivos de seguridad. |
      | lololo    | lololollo | Sus claves han sido desactivadas por motivos de seguridad. |

  Scenario Outline: Min username
    Given I'm at Bankinter Mortgages and Loans page
    When I click on the menu "Inicio"
    And I fill client form with:
      | Usuario    | <user> |
      | Contraseña | <pass> |
    Then I should see the message "<message>"

    Examples: 
      | user      | pass     | message                                                                                |
      | guardiola | 121      | La contraseña ha de tener un mínimo de 6 caracteres. Por favor, introdúzcala de nuevo. |
      | is        | 12121212 | El usuario ha de tener un mínimo de 6 caracteres. Por favor, introdúzcalo de nuevo.    |
