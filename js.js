youtubeid=document.getElementById("youtube-id")
youtubeid.addEventListener("keypress", function (event) {
    if(event.keyCode = 13){
        var youtubeurl = "https://www.youtube-nocookie.com/embed/" + document.getElementById("youtube-id").value + "?rel=0&color=white&amp;showinfo=0";
        document.getElementById("iframe").src = youtubeurl;
    }
});
youtubeid.addEventListener("paste", function (event) {
    setTimeout(function(){
        console.log("A");
        console.log(youtubeid.value);
        console.log(youtubeid.value.length);
        if(!(youtube_parser(youtubeid.value) = false)){
            youtubeid.value = youtube_parser(youtubeid.value)
        }
    },10)
    
});
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
