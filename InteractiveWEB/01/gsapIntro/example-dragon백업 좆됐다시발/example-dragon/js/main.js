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
  master.add( FUNCTION_openingTL );  
  master.add( FUNCTION_sectionNextTrigger );
  master.add( FUNCTION_sectionNextTrigger2 );
  master.add( FUNCTION_sectionNextTrigger3 );
  master.add( FUNCTION_sectionNextTriggerFinal );
  
  
  

  
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


  // img src 변경
  // gsap.set(img, { attr: { src: newSRC } });









};

init();


  // 함수부분 ---------

  

  function FUNCTION_mainButtonScrollTrigger() { 

    

    let mainButtonScrollTrigger = gsap.timeline({
            
      scrollTrigger: {
        trigger: '.sectionNext',
        // markers: true,
        scrub: 0.1,
        
      }
              
      
    })
    .to(".content--videoWrap", {  scale : 8, y: "-120%", duration: 0.1, rotate :140, ease: "" })
   
    return mainButtonScrollTrigger;
  }
  


  function FUNCTION_sectionNextTrigger() { 

 

    let sectionNextTrigger_1 = gsap.timeline({
      
      scrollTrigger: {
        trigger: '.sectionNext',
        // markers: true,
        scrub: 3,
        // pin : true
        // start : "center center",
        // end: "bottom top"
                        
      }
              
      
    })
    .to(".block1", { y: -405,  duration: 2, ease: "",}," <")

    .from(".block1 .lineLeft", { top: "130%",  duration: 0.5, ease: "",}," <")
    .from(".block1 .lineLeftSmall", { top: "155%",  duration: 0.8, ease: "" }," <")
    .from(".block1 .lineCenter", { top: "100%",  duration: 1.8, ease: "" }," <+=0.5")
    .from(".block1 .lineRightSmall", { top: "125%",  duration: 1.5, ease: "" }," <")
    .from(".block1 .lineRight", { top: "150%",  duration: 0.5, ease: "" }," <")
    
       
    return sectionNextTrigger_1;
  }

  function FUNCTION_sectionNextTrigger2() { 

 

    let sectionNextTrigger_2 = gsap.timeline({
      
      scrollTrigger: {
        trigger: '.block2',
        // markers: true,
        scrub: 3,
        // pin : true
        start : "top bottom",
        end: "top top"
                        
      }                    
    })
    .to(".block2", { y: -105,  duration: 2, ease: "",}," <")
    .to(".mainNextContent--item6", { y : "-60%",  duration: 0.9, ease: "" },"<")
    .to(".mainNextContent--item7", { top : "-60%",  duration: 1.5, ease: "" },"<")
    .to(".mainNextContent--item8", { y : "-80%", duration: 1.5, ease: "" },"<")
    .to(".mainNextContent--item9", { top : "-50%",  duration: 1.5, ease: "" },"<")
    .to(".mainNextContent--item10", { top : "-30%",  duration: 1.5, ease: "" },"<")
 


       
    return sectionNextTrigger_2;
  }

  function FUNCTION_sectionNextTrigger3() { 

 

    let sectionNextTrigger_3 = gsap.timeline({
      
      scrollTrigger: {
        trigger: '.block3',
        // markers: true,
        scrub: 3,
        // pin : true
        start : "top bottom",
        end: "top top"
                        
      }                    
    })
    .to(".block3", { y: -105,  duration: 2, ease: "",}," <")
    .to(".mainNextContent--item11", { y : "-60%",  duration: 0.9, ease: "" },"<")
    .to(".mainNextContent--item12", { top : "-60%",  duration: 1.5, ease: "" },"<")
    .to(".mainNextContent--item14", { top : "-50%",  duration: 1.5, ease: "" },"<")
    .to(".mainNextContent--item15", { top : "-30%",  duration: 1.5, ease: "" },"<")
          
    return sectionNextTrigger_3;
  }

  function FUNCTION_sectionNextTriggerFinal() { 
 
    let sectionNextTrigger_final = gsap.timeline({
      // onComplete () {
      //   FUNCTION_sectionNextTriggerFinalNext();
      //   console.log("timeline completed"+  + $('.blockFinal').height());
      // },
      scrollTrigger: {

        trigger: '.blockFinal',
        // markers: true,
        scrub: 3,
        // pin : true,
        start : "top+=100px bottom",
        end: "top-=700px top",

                        
      }                    
    })
    .to(".blockFinal", { y : "0%", duration: 2, ease: "" },"<")
    .to(".blockFinal", { width: "100%", height: "100vh", duration: 2.1, ease: "" },"<")
    .to(".block2", { opacity : 0,  duration: 0.5, ease: "",}," <")

    .add(FUNCTION_sectionNextTriggerFinalNext,"<+=2.5")

                 
    return sectionNextTrigger_final;
  }


  function FUNCTION_sectionNextTriggerFinalNext() { 
 
    let box = document.querySelector('.blockFinal');
    let vheight = box.offsetHeight;
    console.log(vheight)

    let sectionNextTrigger_finalNext = gsap.timeline({
      
      scrollTrigger: {
        trigger: '.blockFinal',
        markers: true,
        scrub: 3,
        pin : true,
        start : "",
        end: () => "+=" + vheight
        // end: () => "+=" + document.querySelector(".main").offsetHeight*3
      }                    
    })
    // start: () => "0 " + box.offsetHeight,
    // end: () => box.offsetHeight + " " + box.offsetHeight,
    
    .to(".blockFinal--dim", { y:"-75%" ,duration : 2.5, },"<")
    // sectionNextTrigger_finalNext.refresh();
    

          
    return sectionNextTrigger_finalNext;
  }

    
  // 랜덤으로 여러군대 뿌려주기
  // gsap.to(".notes", {
  //   y: gsap.utils.random(-50, -100, 10, true),
  //   x: gsap.utils.random(-50, 50, 25, true),
  //   opacity: 1,
  //   duration: gsap.utils.random(1.5, 3, 1.5, true),
  //   stagger: {
  //     each: 0.5,
  //     ease: "sine.in",
  //     repeat: -1
  //   }
  // });



  // play on 랜더링 부분 커서 관련 
  let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});