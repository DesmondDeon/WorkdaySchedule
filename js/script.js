// UI Clock / Header 
let nMoment = (moment().format('MMMM Do YYYY, h:mm:ss a'));
let display = $("#currentDay");
display.text(nMoment);
console.log(nMoment);

let currentTime = moment();
currentTime = currentTime.startOf("hour");

// Variable and Time Frame Elements
let frames = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

frames.forEach(function (time, i) {

    let newTime = [];
    newTime.push(moment().hour(time).minutes("00").format('hh:mm a'));

    let newDiv = $("<div>");
    newDiv.addClass("input-group input-group-lg pb-1");

    let addSpan = $("<span>");
    addSpan.addClass("input-group-text time-block block");

    let inputText = $('<input>').attr('type', 'text');
    inputText.attr('id', i);
    
    inputText.addClass("form-control form");
    inputText.data("Hour");

    let inputSubmit = $('<input>').attr('type', 'submit');
    inputSubmit.attr('data-id', i)
    inputSubmit.addClass("btn btn-primary btn-sm");

    let icon = $("<i>");
    icon.addClass("fa fa-save");

// Results Container  
    $(".container").append(newDiv);
    newDiv.append(addSpan);
    newDiv.append(inputText);
    newDiv.append(inputSubmit);
    inputSubmit.append(icon);

    addSpan.text(newTime);
    // If/Else Statement
    if (currentTime.isAfter(newTime)) {
        $(".form").addClass("bg-info");
    }else if (currentTime.isBefore(newTime)) {
        $(".form").addClass("bg-light");
    }
    else if (currentTime.isSame(newTime)) {
        $(".form").addClass("bg-warning");
    };

});

for (let i = 0; i < frames.length; i++) {
     $('#' + i).val(localStorage.getItem(i))
}

 



// Start local Storage Output

$(".btn-sm").click(function (event) {
    event.preventDefault();
    let formValue = $(this).siblings(".form-control").val();
    // console.log("This worked");
    let listItem = $(this).attr('data-id')
// console.log('formValue', formValue)
    localStorage.setItem(listItem, formValue);


// function getLocalItems(){
//     if ('listItem'){
//       try{
//         return JSON.parse(localStorage.getItem("listItem"))
//        } catch(e){
//          return localStorage.getItem("listItem")
//       }
//     }
//   }
  
//   function setLocalItems(listItem, formValue){
//     if (typeof value === 'object') {
//       value = JSON.stringify(formValue)
//     }
//     localStorage.setItem("listItem", formValue)
//   }

//   function store (){
//       var Calendar_item = document.getElementsByClassName("form-control").value;
//       localStorage.setItem("form-control", text);
//   }
//   function getValue(){
//       var storeText = localStorage.getItem("form-control");

//       if(storedText != null){
//           document.getElementsByClassName("form-control").value = storedText;
//       } else {
//           document.getElementsByClassName("form-control").value = 0;
//       }
//   }
//   console.log(store)
//   console.log(localStorage)
});
