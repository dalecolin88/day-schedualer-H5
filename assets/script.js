var nowTime = $("#currentDay");

// console.log({ currentDay });
var dynaTime = setInterval(function () {
    var currentDay = moment();
    nowTime.text("Todays Time " + currentDay.format("hh:mm:ss") + " on " + currentDay.format("MM-DD-YYYY"))
}, 1000)
console.log(currentDay)




// var hi = $("openModal");

var saveBtn = $(".save-icon")

$(".save-icon").on("click", function () {

})

