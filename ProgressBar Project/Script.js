var progressBar=document.querySelector(".ProgressBar");
window.addEventListener("scroll",()=>{
    var scroll=window.pageYOffset;
    //console.log(scroll)---نمایش فاصله از بالا
    var height=document.documentElement.scrollHeight-window.innerHeight;
    //console.log(height)---نمایش مقدار اسکرول انجام شده
    var lScroll=scroll/height*100;
    progressBar.style.width=`${lScroll}%`
})