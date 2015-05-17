var moment = require("moment");

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

Then(/^HPD cache should not be from more than (\d+) (\w+) ago/, function (time, units) {
  time = parseInt(time);
  units = endsWith(units, 's') ? units : units + 's';
  
  var cacheInfo = $("body").apply(function () {
    var hpdRegex = /^address: (\w+); generated: (.+?)$/;
    var hpdComment = $(this).add(document).contents().filter(function() {
      return this.nodeType == 8 && hpdRegex.test(this.nodeValue.trim());
    });
    if (hpdComment.length === 0) return null;
    
    var res = hpdRegex.exec(hpdComment.get(0).nodeValue.trim());
    return { address : res[1], date : res[2] };
  });
  
  var cacheMoment = moment(cacheInfo.date.substr(4).replace("MEST", ""), "MMM DD HH:mm:ss yyyy");
  var duration = moment.duration(time, units);
  
  console.log(cacheMoment.fromNow());
  console.log(duration.humanize());
  
  if (cacheMoment.isBefore(moment().subtract(duration))) {
    expect().fail("Expected cache date not to be from more than " + duration.humanize() + " ago but it is from " + cacheMoment.fromNow());
  }
});