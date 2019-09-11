function getID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function getMaxURL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/maxresdefault.jpg";
    window.open(url);
}

function getDefaultURL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/default.jpg";
    window.open(url);
}

function get1URL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/1.jpg";
    window.open(url);
}

function get2URL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/2.jpg";
    window.open(url);
}

function get3URL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/3.jpg";
    window.open(url);
}

function getHQURL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/hqdefault.jpg";
    window.open(url);
}

function getMQURL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/mqdefault.jpg";
    window.open(url);
}

function get43URL() {
    var url = "https://img.youtube.com/vi/" + getID(document.getElementById('urlInput').value) + "/sddefault.jpg";
    window.open(url);
}