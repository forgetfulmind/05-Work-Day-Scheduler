//define variable for currentDay id#currentDay 
let currentDay = $("#currentDay")
//define variable for class .containter 
let blockContainer = $(".container")
//make array for hours of the day
let workHours = [
    9, 10, 11, 12, 1, 2, 3, 4, 5
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
        row.attr("id", squid[i])
    //make span
        let span = $("<span>").text(squid[i])
        span.attr("class", "time-block")
        row.append(span);
    //make input
        let task = $("<input>")
        row.append(task);
    //make button
        let button = $("<button>")
        button.attr("class","saveBtn")
        button.attr("id", squid[i])
        let img = $("<img>")
        img.attr("src", "./Assets/lock.png")
        button.append(img)
        row.append(button)

            if (parseInt(squid[i]) < parseInt(dayjs().format('H'))){
                row.attr("class","row past")
            }
            else if (parseInt(squid[i]) === parseInt(dayjs().format('H'))){
                row.attr("class","row present")        
            }
            else {
                row.attr("class","row future")
            
            }
        blockContainer.append(row)
    }}
    
        //each block is labeled per hour
        //each block has a text field that is editable 
        //each block has a save button next to it to save the field into local storage
                //save button has class .saveBtn
    //current hour block has class .present 
    //past hour blocks have class .past 
    //future hour blocks ahve classfuture
