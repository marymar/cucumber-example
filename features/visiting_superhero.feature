Feature: Visiting superhero
  As a superheroes expert, I want to study every details of an superhero,
  to keep my expert knowledge to the top level.

  Scenario: Visiting superhero from superheroes guide
    Given I am on the superheroes guide
    When I click on "Chuck Norris" link
    Then I should see the heroes name "Chuck Norris"
    And I should see the statement "Chuck Norris once fought superman. The loser had to wear his underwear over his pants."