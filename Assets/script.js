
$("#currentDay").text (moment().format ("dddd, MMMM Do"));

var currentHour = moment().hour()
var militaryHour =[9,10,11,12,13,14,15,16,17]
console.log(currentHour)
for (let i = 0; i < militaryHour.length; i++) {
    if (militaryHour[i]===currentHour) {
        $("#"+i).addClass("present")
    }

   else if (militaryHour[i]>currentHour) {
        $("#"+i).addClass("future")
    }

   else if (militaryHour[i]< currentHour) {
        $("#"+i).addClass("past")
    }
}

// Current hour in moment 
// Look in html (thomas)
