
When(/^I simulate the following mortage :$/, function(datatable) {
  var inputs;
  datatable.raw().forEach(function (row) {
    inputs = $("input,select");
    var colName = row[0];
    var val = row[1];
    var fieldInput = inputs.withLabel(colName);
    if (fieldInput.waitForExistence().is(":radio")) {
      fieldInput.withLabel(val).check();
    } else if (fieldInput.waitForExistence().is("select")) {
       fieldInput.select(val);
    } else {
       fieldInput.fill(val);
    }
  });
  
  $("#contrato_fijo").check(); 
  
  //birthday
  $("#dia_nac").fill("12");
  $("#mes_nac").fill("08");
  $("#anyo_nac").fill("1960");
  
});


When(/^I accept the terms$/, function() {
  $("#policy").check();
});


Then(/^I should see:$/, function(datatable) {
  
   datatable.raw().forEach(function (row) {
     var colName = row[0];
     var val = row[1];
     var value = $("strong").below($("b").withText(colName)).eq(0);
     
     expect(val).to.have.text(val);
  });
});

Then(/^I should see the message "(.*?)"$/, function(msg) {
  $("div").alert().getText();
  //var msgValue = "Para continuar debe aceptar la política de protección de datos personales" //$("div").alert().accept();
  //expect(msg).to.be.equal(msgValue); 
  
});

