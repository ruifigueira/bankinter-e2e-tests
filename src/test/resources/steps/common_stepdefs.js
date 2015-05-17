Given(/^I'm at Bankinter Mortgages and Loans page$/, function() {
  browser.get(config.baseUrl);
});

When(/^I click on button "(.*?)"$/, function(btnName) {
  var btn = $("input").withValue(btnName);
  btn.click();
});

When(/^I click on the menu "(.*?)"$/, function(menu) {
  var menuItem =  $(".level1 li a").withText(menu);
  menuItem.click();
});