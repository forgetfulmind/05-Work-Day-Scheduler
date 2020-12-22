//define variable for currentDay id#currentDay 
let currentDay = $("#currentDay")
//define variable for class .containter 
let blockContainer = $(".container")
//make array for hours of the day
let workHours = [
    {time:"9am", key:9},
    {time:"10am", key:10},
    {time:"11am" ,key:11},
    {time:"12pm", key:12},
    {time:"1pm", key:13},
    {time:"2pm",key:14},
    {time:"3pm",key:15},
    {time:"4pm",key:16},
    {time:"5pm",key:17},
]

// //when I load the page I want to show the current date and time 
//update every second
setInterval(function(){
    currentDay.empty();
    currentDay.append(dayjs().format('dddd MMMM DD' + " - " +'h:mm:ss:a'));
},1000)

// //update every 10 mins
// setInterval(function(){
//     buildBlocks(workHours);
//     setButtons(workHours);
//     saveItem();
//                     },1000)

//when I load the page I want to see 12 blocks, 1 for each hour 
buildBlocks(workHours);
setButtons(workHours);


//button functionality loop
function setButtons (squid){
    for (let i=0;i<squid.length;i++){
        $("#"+"button"+squid[i].key).on("click", 
        function(){
        let x = $("#input"+squid[i].key+"")
        localStorage.setItem("input" + squid[i].key, x[0].value)
    }
    )
}}




//Build buttons
function buildBlocks(squid){
    blockContainer.empty();
    for (i=0; i < squid.length; i++){
        let row = $("<div>")
        row.attr("id", squid[i].time)
        row.attr("class", "row")
        row.attr("key", squid[i].key)
    //each block is labeled per hour
    //make time of day display
        let span = $("<div>").text(squid[i].time)
        span.attr("class", "time-block col-2")
        row.append(span);
    //each block has a text field that is editable
    //make input field
        let task = $("<textarea>")
        task.attr("id", "input"+ squid[i].key)
        task.attr("class", "input col-8")
        row.append(task);
    //each block has a save button next to it
    //make button
        let button = $("<button>")
        button.attr("class","saveBtn col-2")
        button.attr("id", "button"+squid[i].key)
        let img = $("<img>")
        img.attr("src", "./Assets/lock.png")
        button.append(img)
    //add button
        row.append(button)

    //past hour blocks have class .past 
            if (parseInt(squid[i].key) < parseInt(dayjs().format('H'))){
                row.attr("class","row past")
            }
                  
    //current hour block has class .present 
            else if (parseInt(squid[i].key) === parseInt(dayjs().format('H'))){
                row.attr("class","row present")        
            }

    //future hour blocks have classfuture
            else {
                row.attr("class","row future")
            
            }
        blockContainer.append(row)
    }}





//field and storage link 
    input9.value = localStorage.getItem("input9")
    input10.value = localStorage.getItem("input10")
    input11.value = localStorage.getItem("input11")
    input12.value = localStorage.getItem("input12")
    input13.value = localStorage.getItem("input13")
    input14.value = localStorage.getItem("input14")
    input15.value = localStorage.getItem("input15")
    input16.value = localStorage.getItem("input16")
    input17.value = localStorage.getItem("input17")

// function setColors(){


// //class dynamic update
//         //past hour blocks have class .past 
//         if (parseInt($(this).key) < parseInt(dayjs().format('H'))){
//             $(this).attr("class","row past")
//         }
              
// //current hour block has class .present 
//         else if (parseInt($(this).key) === parseInt(dayjs().format('H'))){
//             $(this).attr("class","row present")        
//         }

// //future hour blocks have classfuture
//         else {
//             $(this).attr("class","row future")
        
//         }
// }