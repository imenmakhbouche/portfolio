AOS.init();
const close_butt=document.querySelector(".close_nav_butt")
const open_butt=document.querySelector(".open_nav_butt")
const nav_list=document.querySelector(".nav_list")


close_butt.addEventListener("click",()=>{
    nav_list.classList.remove("close_nav");
}
)

open_butt.addEventListener("click",()=>{
    nav_list.classList.add("close_nav");
}
)

let nav_bar=document.querySelector("nav");
window.onscroll= function(){
    if(document.documentElement.scrollTop>50){
        nav_bar.style.cssText="width:100%; border-radius:0em; margin-top:0; transition: all 0.5s ease-in-out; box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.157)";
    }
    if(document.documentElement.scrollTop<50){
        nav_bar.style.cssText="width:90%; border-radius:5em; transition: all 0.5s ease-in-out;  ";
    }
}

//   function downloadPDF() {
//     var link = document.createElement('a');
//     link.href = '/images/Resume.pdf'; 
//     link.target = '_blank'; 
//     link.download = 'Resume.pdf'; 
//     link.click();
//   }

document.getElementById("downloadButton").addEventListener("click", function() {
    var pdfPath = "./images/Resume.pdf";
    var link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  