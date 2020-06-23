// current day is displayed at the top of the calander object stored in var d


function todayDate() {
    var td = new Date();
    $("#currentDay").html(td.toDateString());
    console.log(td.toDateString());
};
todayDate();



// variables

var hrNote = [];
var storeItems = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];

// dynamically change the #currentday textcontent to

// Display time-blocks for standard business hours

// Color coded Time-block shows past/present/future

// if currentTime> insideOfTime-block,greyit
// else leave it open to input
// When a time-block is clicked , you can enter an event
// onclick event to write text inside the form box
// form element ?
//save the event to local storage
// localstoreage.setItem("key:value")
// when the page refreshes the events are saved
// 

//var myStorage = window.localStorage


// when text is entered in the text area and clicked saved ; the data is saved and stored 
// need a function retrieve the data from the local storage to the page
function retrieve() {
    //TO PUT HTINGS INTO LOCAL STORAGE
    //JSON.stringify() --> takes an object, number, function, array, string, boolean turns
    // it into a string

    //TO GET THINGS OUT OF LOCAL STORAGE
    //JSON.parse()---> takes a string, and returns the original data type
    var saveData = JSON.parse(window.localStorage.getItem("schedule", [])) || [];
    for (let i = 0; i < storeItems.length; i++) {
        $(storeItems[i]).text(saveData[i]);
    }

};
retrieve();

// need a function to save the texts to the storage
function save() {
    window.localStorage.setItem("schedule", JSON.stringify(hrNote));
}

$("#btn9").on("click", function () {
    hrNote[0] = $("#9amButton").val();
    console.log('HRNOTE-->', hrNote)
    save();
});
$("#btn10").on("click", function () {
    hrNote[1] = $("#10amButton").val();
    console.log(hrNote)
    save();
});
$("#btn11").on("click", function () {
    hrNote[2] = $("#11amButton").val();
    console.log(hrNote)
    save();
});
$("#btn12").on("click", function () {
    hrNote[3] = $("#12pmButton").val();
    console.log(hrNote)
    save();
});
$("#btn1").on("click", function () {
    hrNote[4] = $("#1pmButton").val();
    console.log(hrNote)
    save();
});
$("#btn2").on("click", function () {
    hrNote[5] = $("#2pmButton").val();
    console.log(hrNote)
    save();
});
$("#btn3").on("click", function () {
    hrNote[6] = $("#3pmButton").val();
    console.log(hrNote)
    save();
});
$("#btn4").on("click", function () {
    hrNote[7] = $("#4pmButton").val();
    console.log(hrNote)
    save();
});
$("#btn5").on("click", function () {
    hrNote[8] = $("#5pmButton").val();
    console.log(hrNote)
    save();
});

var hour = moment().hour();
var x = 0;
var timeSlots = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (let x = 0; x < hrNote.length; x++) {
    if (hour === timeSlots[x]) {
        $(storeItems[x]).attr("class", "present")
    }
    if (hour < timeSlots[x]) {
        $(storeItems[x]).attr("class", "past")
    } else {
        $(storeItems[x]).attr("class", "future")
    }
}
// console.log(hour)
// console.log(timeSlots[x])
// console.log((moment().hour()