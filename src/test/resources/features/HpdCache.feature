# language: en
# ------------------------------------------------------------------------------
Feature: Test HPD cache

  Scenario Outline: Test HPD cache in Bankinter Pages
    Given I'm at <page> page
    Then HPD cache should not be from more than <period> ago

    Examples: 
      | page                          | period    |
      | Home                          | 20 days   |
      | Bankinter Mortgages and Loans | 5 minutes |
