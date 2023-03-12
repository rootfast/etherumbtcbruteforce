function download1(){
    window.open("https://www.mediafire.com/file/cfrpusnmwdkeby0/brutefor.zip/file");
}
function download2(){
    window.open("https://www.mediafire.com/file/cfrpusnmwdkeby0/brutefor.zip/file");
}
function download3(){
    window.open("https://www.mediafire.com/file/cfrpusnmwdkeby0/brutefor.zip/file");
}
function opendownloadpage(){
    window.location.href = "templates/download.html";
}

window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        var adsDivs = document.getElementsByClassName('Ads');
        var vLines = document.getElementsByClassName('verticalLines');
        var pgmDiv = document.getElementsByClassName('programa3');

        window.document.removeChild(adsDivs);
        vLines.style.transform = "rotate(90deg)";
        pgmDiv.style.transform = "flex-direction: column";
    }
} 