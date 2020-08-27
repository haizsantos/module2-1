function validate(){
    let title = document.getElementById("EventTitle").value;
    let start = document.getElementById("eventDate1").value;
    let end = document.getElementById("eventDate2").value;
    let post = document.getElementById("postDate").value;
    let venue = document.getElementById("venueAddress").value;
    
    if(start > end){
        alert("Invalid Event Type.")
    }
    if(post > start){
        alert("Invalid input in posting date. Kindly choose before event date or in between dates of event.");
    }
    if (title && venue != "" && start < end && post <= start){
        alert("You have successfully created the Event!");
    }else{
        alert("The Event is not created.");
    }
}
