youtubeid=document.getElementById("youtube-id")
youtubeid.addEventListener("keypress", function (event) {
    if(event.keyCode = 13){
        var youtubeurl = "https://www.youtube-nocookie.com/embed/" + document.getElementById("youtube-id").value + "?rel=0&amp;showinfo=0";
        document.getElementById("iframe").src = youtubeurl;
    }
});
youtubeid.addEventListener("paste", function (event) {
    setTimeout(function(){
        console.log("A");
        console.log(youtubeid.value)
        if(youtubeid.value.startsWith("https://www.youtube.com/watch?v=")){
            console.log("B");
            youtubeid.value= youtubeid.value.replace("https://www.youtube.com/watch?v=","")
        }
    },10)
    
});