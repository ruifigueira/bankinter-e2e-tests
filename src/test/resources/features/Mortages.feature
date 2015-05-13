# language: en
# ------------------------------------------------------------------------------
Feature: Mortgages & Loans

  Background: 
    Given I'm at Bankinter Mortgages and Loans page

  Scenario: Simulate Mortgage
    When I simulate the following mortage:
      | Nombre               | Pep           |
      | Apellidos            | Guardiola     |
      | Teléfono de contacto | 912122323     |
      | Ubicación vivienda   | VALENCIA      |
      | Precio compra        | 50000         |
      | Importe préstamo     | 35000         |
      | Plazo                | 6 años        |
      | Tipo de empleo       | Cuenta propia |
      | Antigüedad           | 3 años        |
      | Estado civil         | Soltero       |
      | Rdo neto actividad   | 15000         |
      | Fecha nacimiento     | 12-09-1980    |
    And I accept the terms
    And I click on button "Simular cuotas"
    Then I should see:
      | Cuota mensual 1er año | 516,33 eur |
      | Resto de años         | 512,14 eur |

  Scenario: Simulate Mortgage not Accepting Terms
    When I simulate the following mortage:
      | Nombre               | Pep           |
      | Apellidos            | Guardiola     |
      | Teléfono de contacto | 912122323     |
      | Ubicación vivienda   | VALENCIA      |
      | Precio compra        | 50000         |
      | Importe préstamo     | 35000         |
      | Plazo                | 6 años        |
      | Tipo de empleo       | Cuenta propia |
      | Antigüedad           | 3 años        |
      | Estado civil         | Soltero       |
      | Rdo neto actividad   | 15000         |
      | Fecha nacimiento     | 12-09-1980    |
    And I click on button "Simular cuotas"
    Then I should see the message "Para continuar debe aceptar la política de protección de datos personales."

  Scenario: Simulate Mortgage with invalid loan amount
    When I simulate the following mortage:
      | Nombre               | Pep           |
      | Apellidos            | Guardiola     |
      | Teléfono de contacto | 912122323     |
      | Ubicación vivienda   | VALENCIA      |
      | Precio compra        | 50000         |
      | Importe préstamo     | 30000         |
      | Plazo                | 6 años        |
      | Tipo de empleo       | Cuenta propia |
      | Antigüedad           | 3 años        |
      | Estado civil         | Soltero       |
      | Rdo neto actividad   | 15000         |
      | Fecha nacimiento     | 12-09-1980    |
    And I accept the terms
    And I click on button "Simular cuotas"
    Then I should see the message "El importe mínimo a solicitar debe ser superior a 30050 euros. Por favor, indique un importe superior."

  Scenario Outline: Test form error message
    When I simulate the following mortage:
      | Nombre               | Pep           |
      | Apellidos            | Guardiola     |
      | Teléfono de contacto | 912122323     |
      | Ubicación vivienda   | VALENCIA      |
      | Precio compra        | 50000         |
      | Plazo                | 6 años        |
      | Tipo de empleo       | Cuenta propia |
      | Antigüedad           | 3 años        |
      | Estado civil         | Soltero       |
      | Rdo neto actividad   | 15000         |
      | Fecha nacimiento     | 12-09-1980    |
    And I simulate the following mortage:
      | Importe préstamo | <val> |
    And I accept the terms
    And I click on button "Simular cuotas"
    Then I should see the message "<message>"

    Examples: 
      | val          | message                                                                                                |
      | 300          | El importe mínimo a solicitar debe ser superior a 30050 euros. Por favor, indique un importe superior. |
      | valor        | El importe del préstamo debe ser numérico.                                                             |
      | 121000 euros | El importe del préstamo debe ser numérico.                                                             |
