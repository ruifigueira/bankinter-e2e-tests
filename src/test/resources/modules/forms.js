var _  = require("lodash");

var forms = {
  
  getFldGroup : function (fldName) {
    return base.find(".form-group").has(base.find(".control-label").withText(fldName));
  },

  getFld : function (fldName) {
    var formGroup = forms.getFldGroup(fldName);
    return formGroup.find(".btn-group .btn, input, textarea");
  },
  
  fillFld : function (fldName, val) {
    var fld = forms.getFld(fldName);
    
    fld.waitForExistence();
    
    if (fld.is(".btn-group .btn")) {
      fld.withText(val).click();
    } else if (fld.is(":checkbox, :radio")) {
      if (val === 'true') {
        fld.check();
      } else {
        fld.uncheck();
      }
    } else {
      fld.fill(val);
    }    
  },
  
  fill : function (fields) {
    for (var fldName in fields) {
      var val = fields[fldName];
      forms.fillFld(fldName, val); 
    }
  },

  submit : function (options) {
  
  } 
};

if (typeof module !== 'undefined') module.exports = forms;