
Given(/^I'm at Bankinter Mortgages and Loans page$/, function() {
  browser.get(config.baseUrl);
});


When(/^I click on button "(.*?)"$/, function(btnName) {
  var btn = $("input").withValue(btnName);
  btn.click();
});