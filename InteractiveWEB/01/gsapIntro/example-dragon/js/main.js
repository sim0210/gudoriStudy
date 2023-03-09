document.addEventListener("DOMContentLoaded", function(){
  setTimeout(()=> {
    window.scrollTo(0,0);
  },50)
  // disableScroll();
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);

// 스크롤 스무터 구동.
let smoother = ScrollSmoother.create({
    smooth: 2,   
    effects: true
  });



  
function init(){
  
  // 총괄 애니메이션
  const master = gsap.timeline();
  master.add( FUNCTION_openingTL );
  master.add( FUNCTION_mainButtonScrollTrigger );
  master.add( FUNCTION_sectionNextTrigger );
  

  
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
                                                                              
    return openingTL;

  }                         


  // img src 변경
  // gsap.set(img, { attr: { src: newSRC } });

  function FUNCTION_openingTL_nextStep() {
    let nextStepTl = gsap.timeline({repeat: 1}) 
    
    .to(".box.main--o", { scale : 0 })
    .to(".box.main--o", {  x: -105.55, scale : 0, duration : 1.5, ease: "power1.inOut" })
    .set(".box.main--o", {  x: 906, scale : 0} )
    .to(".box.main--o", { scale : 1 })
    .to(".box.main--o", {  x: -105.55,  duration : 5.5, ease: "power1.inOut" })
    .to(".box.main--o", { scale : 0, duration : 1 },"<+=4.7")
    .to(".box.main--o", {  x: 6, scale : 1} )

    return nextStepTl;
  }

  

  function FUNCTION_playonTL(){
    let playonTL = gsap.timeline()
    .to('.earthWrap--playOn .object1', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .textP', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .textL', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .textA', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .textY', { display : 'inline-block', duration : 0.2 },"<+=0.2")


    .to('.earthWrap--playOn .poring', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .textN', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .object2', { display : 'inline-block', duration : 0.2 },"<+=0.2")
    .to('.earthWrap--playOn .cursor', { duration :0.01, opacity : 0, display :'none', scale : 0, color: "rgba(0,0,0,0)", })
    .add(FUNCTION_earthMoving)

    

    return playonTL;
  }



  function FUNCTION_splitTextTL(){
    // kill();
    var $text = $(".theWorldContent--textInfo p"),
    mySplitText = new SplitText($text, {type:"words"});
    gsap.set($text, {perspective:400});
    
    const splitTextTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.theWorldContent--textInfo',        
        scrub: 3,  
        markers : true,
        start : "top-=100 80%",
        end : "bottom 80%",
        duration : 0.8


      }
    });
    mySplitText.split({type:"chars, words"}) 
    
    splitTextTimeline.from(mySplitText.chars, {duration: 1.5, scale:10, autoAlpha:0, rotationX:-180,  transformOrigin:"100% 50%", ease:"back", stagger: 0.02});
    
    function kill(){
      splitTextTimeline.clear().time(0);
      mySplitText.revert();
    };

    return splitTextTimeline;
    
  }






};

init();


  // 함수부분 ---------

  //poring moving
  function FUNCTION_poringMoving(){
    const poringMovingTl = gsap
    .timeline({
      repeat: -1,
      yoyo: true            
    })
    .set(".poring", {
      rotation: 5,
      transformOrigin: "center"
    })
    .to(".poring", {
      rotation: -5,
      transformOrigin: "center",
      ease: "power1.inOut",
      duration : 1
    });

    return poringMovingTl;
  }


  // contentNext object moving
  function FUNCTION_contentNextOBJMoving(){
    const contentNextOBJMoving = gsap.timeline({ })
    .to(".objectBox", { y: 20, rotation :-10, ease: "bounce.out", duration : 1.5, stagger: { from: "center", each :0.1, repeat : -1, yoyo:true } }) 

    return contentNextOBJMoving;
  }



  

  function FUNCTION_mainButtonScrollTrigger() { 

    // gsap.to("body", { overflow : "visible" })

    let mainButtonScrollTrigger = gsap.timeline({
            
      scrollTrigger: {
        trigger: '.sectionTheWorld',
        // markers: true,
        scrub: 0.5,
        
      }
              
      
    })
    .to(".content--videoWrap", {  scale : 8, y: "-120%", duration: 0.2, rotate :100, ease: "" })
   
    return mainButtonScrollTrigger;
  }
  


  function FUNCTION_sectionNextTrigger() { 

    // gsap.to("body", { overflow : "visible" })

    let sectionNextTrigger = gsap.timeline({
      
      scrollTrigger: {
        trigger: '.sectionNext',
        markers: true,
        scrub: 1,
        start : "center bottom",
        end : "top top"
        
        
        
      }
              
      
    })
    .from(".block1 .lineLeft", { top: "130%",  duration: 2, ease: "",})
    .from(".block1 .lineLeftSmall", { top: "129%",  duration: 2, ease: "" }," <")
    .from(".block1 .lineCenter", { top: "135%",  duration: 2, ease: "" }," <")
    .from(".block1 .lineRightSmall", { top: "125%",  duration: 2, ease: "" }," <")
    .from(".block1 .lineRight", { top: "125%",  duration: 2, ease: "" }," <")


    // .from(".block2 .lineLeft", { y: "210%",  duration: 0.5, ease: "" })
    // .from(".block1 .lineLeftSmall", { y: "270%",  duration: 2, ease: "" }," <")
    // .from(".block1 .lineCenter", { y: "260%",  duration: 2, ease: "" }," <")
    // .from(".block1 .lineRightSmall", { y: "240%",  duration: 2, ease: "" }," <")
    // .from(".block1 .lineRight", { y: "250%",  duration: 2, ease: "" }," <")


    // .from(".block3 .lineLeft", { y: "210%",  duration: 0.5, ease: "" })
    // .from(".block3 .lineLeftSmall", { y: "240%",  duration: 0.5, ease: "" })
    // .from(".block3 .lineCenter", { y: "230%",  duration: 0.5, ease: "" })
    // .from(".block3 .lineRightSmall", { y: "290%",  duration: 0.5, ease: "" })
    // .from(".block3 .lineRight", { y: "310%",  duration: 0.5, ease: "" })
   


    
    return sectionNextTrigger;
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