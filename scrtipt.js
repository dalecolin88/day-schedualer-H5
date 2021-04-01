var nowTime = $("#currentDay")
console.log({currentTime})
var dynaTime = setInterval (function() {
    var currentDay = moment();
    nowTime.text("the time is currently" + moveTime + " on " + currentTime.format("HH:mm:ss") + " on " + currentTime.format("yyyy/mm/dd"))},
1000);

Var = $('openModal');


