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
setButtons(workHours);

//button functionality
$("#button9").on("click", function(){
        console.log("hello!")
        console.log(input9)
        localStorage.setItem("input9", input9.value)
    })

input9.value = localStorage.getItem("input9")

//button functionality loop
function setButtons (squid){
    for (let i=0;i<squid.length;i++){
        //function x(){console.log(squid[i])}
        $("#"+"button"+squid[i].key).on("click", 
        function(){
            console.log("hello! Again!")
            console.log(squid[i].key)
        let x = "input" + squid[i].key
        console.log(x) 
        localStorage.setItem("input" + squid[i].key, x.value) //WHY DOESN"T WORK!?!?!
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
    //each block is labeled per hour
    //make time of day display
        let span = $("<div>").text(squid[i].time)
        span.attr("class", "time-block col-2")
        row.append(span);
    //each block has a text field that is editable
    //make input field
        let task = $("<input>")
        task.attr("id", "input"+ squid[i].key)
        task.attr("class", "input col-8")
                //localStorage.setItem("input"+ squid[i].key, "")
        //task.value = localStorage.getItem("input"+ squid[i].key)
        row.append(task);
    //each block has a save button next to it
    //make button
        let button = $("<button>")
        button.attr("class","saveBtn col-2")
        button.attr("id", "button"+squid[i].key)
        let img = $("<img>")
        img.attr("src", "./Assets/lock.png")
        button.append(img)
                // button.on("click", function(){
                //     console.log("hello!")
                //     localStorage.setItem("input9", "1")
                // })
    //click to save the field into local storage
                // function setValue(){
                //     console.log("hello!")
                //     localStorage.setItem("input"+ squid[i].key, $(squid[i].key).value)
                // }
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

