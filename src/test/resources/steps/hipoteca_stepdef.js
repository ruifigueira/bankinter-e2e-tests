var fillBirthDay = function(date){
  var parsedDate = date.split("-");
  //birthday
  $("#dia_nac").fill(parsedDate[0]);
  $("#mes_nac").fill(parsedDate[1]);
  $("#anyo_nac").fill(parsedDate[2]);
};

When(/^I simulate the following mortage:$/, function(datatable) {
  var values = datatable.rowsHash();
  var inputs = $("input,select");
  for (var prop in values) {
    
    var val = values[prop];
    var colName = prop;
    
    if( colName == "Fecha nacimiento"){
      fillBirthDay(val);
      return;
    }
    
    var fieldInput = inputs.withLabel(colName);
    if (fieldInput.waitForExistence().is(":radio")) {
      fieldInput.withLabel(val).check();
    } else if (fieldInput.waitForExistence().is("select")) {
       fieldInput.select(val);
    } else {
       fieldInput.fill(val);
    }
    
    $("#contrato_fijo").check(); 
  }
});

When(/^I accept the terms$/, function() {
  $("#policy").check();
});

Then(/^I should see:$/, function(datatable) {
   datatable.raw().forEach(function (row) {
     var colName = row[0];
     var val = row[1];
     var value = $("strong").below($("b").withText(colName)).eq(0);
      
     expect(value).to.have.text(val);
  });
});

Then(/^I should see the message "(.*?)"$/, function(msg) {
  var alertMsg = String($("div").alert().getText());
  expect(alertMsg).to.be(msg);
  $("div").alert().accept();
});
