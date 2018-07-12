Feature: Blogger Permission
  Scenario: Email does not contain 'edu'
    Given a blogger email is 'faruqem@yahoo.com'
    When his permission is checked
    Then his permission is 'not-granted' 

  Scenario: Email contains 'edu'
    Given a blogger email is 'mfaruqe@gmail.harvard.edu'
    When his permission is checked
    Then his permission is 'granted' 
  
  