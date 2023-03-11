document.addEventListener("DOMContentLoaded", function(){
  
  setTimeout(()=> {
    window.scrollTo(0,0);
  },100)
  disableScroll();
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);

// 스크롤 스무터 구동.
let smoother = ScrollSmoother.create({
    smooth: 3,   
    effects: true
  });



  
function init(){
  
  // 총괄 애니메이션
  const master = gsap.timeline();
  master.add( FUNCTION_openingTL);  
  master.add(FUNCTION_imagesBlockST)

  
    
  function FUNCTION_openingTL(){
    let openingTL = gsap.timeline()
    .to("section.main", { opacity: 1, duration: 0.5, ease: "power4.in" })  
    .from(".content--videoWrap", { scale: 1.7, y:"122%", x:"56%", opacity :0, duration: 0.5, ease: "" })  
    .to(".content--videoWrap", {  x :"-78%", duration: 0.5, ease: "" })
    .to(".text-playon", { opacity : 1, duration: 0.8, ease: "" })
    .to(".text-on", { opacity : 1, y:0, duration: 0.5, ease: "" },"<+=0.3")
    .to(".text-experience", { opacity : 1, x:0, duration: 0.5, ease: "" },"<+=0.3")
    .to(".text-with", { opacity : 1, x:0, duration: 0.5, ease: "" },"<")
    .to(".text-hypen", { opacity : 1, x:0, duration: 0.5, ease: "" },"<")
    // .to(".text-gravity", { opacity : 1, x:0, duration: 0.5, ease: "" },"<")
    
    .to(".text-gravity",  { duration : 0.8, "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },"<") 
    .to(".text-gravity",  { duration : 0.8, "clip-path": "polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)" },"<") 
    .to(".text-gravity",  { duration : 0.8, "clip-path": "polygon(0% 0%, 85% 0%, 85% 100%, 0% 100%)" },"<") 
    .to(".text-gravity",  { duration : 0.8, "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },"<")
    
    .to(".content--videoWrap", { scale : 0.9, opacity :0.8, duration: 0.5, ease: "" },"<+=0.5")
    
    .to(".content--videoWrap", { x :"54%", y: "-63%" , scale : 3.56, opacity :0.8, duration: 0.5, ease: "" }, "<+=0.5")
    .to( ".text-playon", { duration :0.7, attr: { src: "images/tit-play.png" } },"<")
    .to(".img-svgPlay", { opacity :0 ,duration: 0.5, ease: "" },"<")
    .to("#mainVideo", { opacity :1 ,duration: 0.7, ease: "" },"<")
    .to(".text-hypen", { scaleX : 0.4 ,duration: 2.5, ease: CustomEase.create("custom", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.818,0.998 1,1 1,1 ") })
    .to(".text-with", { x : 92 ,duration: 2.5, ease: CustomEase.create("custom", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,0.998 0.818,0.998 1,1 1,1 ") },"<")
    .add( FUNCTION_mainButtonScrollTrigger,"<")
    .add(enableScroll,"<+=0.7")
      
    
    return openingTL;

  }                         

};

init();


  // 함수부분 ---------

  

  function FUNCTION_mainButtonScrollTrigger() { 
    
    let mainButtonScrollTrigger = gsap.timeline({
            
      scrollTrigger: {
        trigger: '.sectionNext',
        // markers: true,
        scrub: 0.5,
      
      }              
      
    })
    .to(".main", { y: "20%", duration: 0.5, ease: "" },"<")  
    .to(".content--videoWrap", { scale : 6, y: "-120%", duration: 0.3, rotate :90, ease: "" },"<")
    .to(".mainNextContent--item2", { top: "12%", duration: 0.5, ease: "" },"<")
    .to(".mainNextContent--item4", { top: "38%", duration: 0.5, ease: "" },"<")
       
    return mainButtonScrollTrigger;
  }
  

  
  function FUNCTION_imagesBlockST() { 
    
    let blockTrigger = gsap.timeline({
      
            
      scrollTrigger: {
        trigger: '.sectionNext',
        markers: true,
        scrub: 0.5,
        pin : true,

        end: () => "+=" + document.querySelector(".sectionNext").offsetHeight*3.5
      
      }              
      
    })
    .to(".block1", { top : "-90%", ease : "none",},"<")
    .to(".block2", { top : "-100%", ease : "none",},"<")
    .to(".mainNextContent--item7", { top : "6%", ease : "none",},"<")
    .to(".mainNextContent--item9", { top : "6%", ease : "none",},"<")
    .to(".mainNextContent--item10", { top : "15%", ease : "none",},"<")
    .to(".block3", { top : "-110%", ease : "none",},"<")
    .from(".mainNextContent--item12", { top : "79%", ease : "none",},"<")
    .from(".mainNextContent--item14", { top : "60%", ease : "none",},"<")
    .to(".block4", { top : "-89%", ease : "none",},"<")
    
    
    // .to(".block3", { top : "-129%", ease : "none",},"<+=0.5")
    // .to(".block4", { top : "-110%", ease : "none",},"<")

    // .set(".blockFinal", {  xPercent:-50, yPercent:-50, },"<")


    // .set(".block4", { width : "100%", height :"100vh", duration: 0.5, ease: "" },"<")

    .set(".blockFinal", { width : "400px",duration: 0.5, ease: "" },"<")
    .to(".blockFinal", { xPercent:-50, yPercent:-66, width : "100%", height : "100vh",  duration: 0.5, ease: "" },"<+=0.5")
    .to(".block3 img", { top : "0",  duration: 0.8, ease: "", stagger : {  amount : 0.5 } },"<")

    .to(".mainNextContent--item17", { top : "10%", ease : "none",},"<")
    .to(".mainNextContent--item19", { top : "6%", ease : "none",},"<")
    
    .set(".blockFinal--dim", { display :"block", ease: "" },"<+=0.2")
    .to(".blockFinal--dim", {  top :"-47%", ease: "" },"<")

    .to(".blockFinal--title", { opacity :1, y:-95, ease: "" },"<+=0.5")
    .to(".blockFinal--explanation", { opacity :1, y:-92, ease: "" },"<+=0.5")

    .to(".blockFinal--onlineBox", { opacity :1, xPercent : -50, y:10, ease: "" },"<+=0.7")
    .to(".blockFinal--mobileBox", { opacity :1, xPercent : -50, y:10, ease: "" },"<")
    .to(".blockFinal--ipTVBox", { opacity :1, xPercent : -50, y:10, ease: "" },"<")

    .to(".blockFinal--onlineBox", { left : "5%", duration : 0.5, ease: "none", scale : 0.7 },"<+=0.7")
    .to(".blockFinal--mobileBox", { left : "50%", duration : 0.5, ease: "none", scale : 1 },"<")
    .to(".blockFinal--ipTVBox", { left : "95%", duration : 0.5, ease: "none", scale : 0.7 },"<")
            

    .to(".blockFinal--onlineBox", { left : "-50%", duration : 0.5, ease: "none", scale : 0.7 },"<+=0.7")
    .to(".blockFinal--mobileBox", { left : "-10%", duration : 0.5, ease: "none", scale : 0.7 },"<")
    .to(".blockFinal--ipTVBox", { left : "50%", duration : 0.5, ease: "none", scale : 1 },"<")
            
    

   
    return blockTrigger;
  }





  document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});