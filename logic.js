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

//update every 10 mins
setInterval(function(){
    buildBlocks(workHours);
                    },1000 * 60 * 10)

//when I load the page I want to see 12 blocks, 1 for each hour 
buildBlocks(workHours);

function buildBlocks(squid){
    blockContainer.empty();
    for (i=0; i < squid.length; i++){
        let row = $("<p>")
        row.attr("id", squid[i].time)
    //each block is labeled per hour
    //make span
        let span = $("<span>").text(squid[i].time)
        span.attr("class", "time-block")
        row.append(span);
    //each block has a text field that is editable
    //make input
        let task = $("<input>")
        row.append(task);
    //each block has a save button next to it

    //make button
        let button = $("<button>")
        button.attr("class","saveBtn")
        button.attr("id", squid[i].time)
        let img = $("<img>")
        img.attr("src", "./Assets/lock.png")
        button.append(img)
    //click to save the field into local storage

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

