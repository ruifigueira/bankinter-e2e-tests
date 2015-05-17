When(/^I fill client form with:$/, function(datatable) {
  var values = datatable.rowsHash();
  var inputs = $("input,select");
  for (var prop in values) {
    
    var val = values[prop];
    var colName = prop + ":";
    var fieldInput = inputs.withLabel(colName);
    fieldInput.fill(val);
  }
  
  $(".submit input").click()
});

Then(/^I should see the message error "(.*?)"$/, function(msg) {
  var elem = $(".container span").withText(msg);
  expect(elem).to.have.size(1);
});