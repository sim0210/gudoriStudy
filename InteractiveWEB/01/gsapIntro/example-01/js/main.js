gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);


let smoother = ScrollSmoother.create({
    smooth: 2,   
    effects: true
  });





  // gsap.to(".mainEarth", { opacity: 0.5, duration: 0.5, repeat: -1, yoyo: true });

function init(){

  // 총괄 애니메이션
  const master = gsap.timeline();
  master.add( FUNCTION_openingTL );
  // master.add( FUNCTION_mainScrollTrigger ) ;
  // master.add( FUNCTION_poringMoving() ) ;
  // master.add( FUNCTION_openingTL_nextStep() );
  // master.add( FUNCTION_openingTL({duration : 1}).reverse() );
  


  function FUNCTION_openingTL(){
    let openingTL = gsap.timeline();
    openingTL.to("section.main", { opacity: 1, duration: 0.5, ease: "power4.in" })  
             .to(".mainEarth", { scale : 1, opacity: 1, /*rotation : 360,*/ duration: 0.5, /* ease: "slow(0.7, 0.7, false)" */ })
              
              // .to(".box", {  opacity: 1, scale : 1, ease:"bounce.in", duration : 0.5, stagger: { grid: [7,15], from: "center", amount: 1 } } ,"<-=0.2") // 튀어나옴
              .from(".box", { opacity: 0, left:"50%", top:"50%", scale : 0, ease:"bounce.in", duration : 0.8, stagger: { from : "center",  amount: 0.8 } })  // 흩뿌림
              
              .to(".earthWrap--text1", {  opacity: 1, y:50, duration : 0.8, ease: "power1.inOut" },"<+=0.3")

              .to(".earthWrap--with", {  opacity: 1, y:50, duration : 0.8, ease: "power1.inOut" },"<+=0.2")
              .to(".earthWrap--gravity", {  opacity: 1, y:50, duration : 0.8, ease: "power1.inOut" },"<+=0.1")
              .to(".earthWrap--backgroundTitle", {  opacity: 1, duration : 2.5,},"<")
              
              .set(".earthWrap--playOn", {  opacity: 1, y:50, duration : 0.8, ease: "power1.inOut" },"<+=1.0")
              .add(FUNCTION_playonTL,"<")
              .add(FUNCTION_mainScrollTrigger,"<+=1" )

              
              
                         
             
            
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
    .to('.earthWrap--playOn .object1', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .textP', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .textL', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .textA', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .textY', { display : 'inline-block', duration : 0.3 },"<+=0.3")


    .to('.earthWrap--playOn .poring', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .textN', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .object2', { display : 'inline-block', duration : 0.3 },"<+=0.3")
    .to('.earthWrap--playOn .cursor', { duration :0.01, opacity : 0, display :'none', scale : 0, color: "rgba(0,0,0,0)", })
    .add(FUNCTION_earthMoving)

    // .to('.earthWrap--playOn .object1, .earthWrap--playOn .object2', { opacity : 1, })
    // .to('.earthWrap--playOn .object1', { x: -32, duration : 0.4 })
    // .to('.earthWrap--playOn .object2', { x: 126, duration : 0.4 }, "<")
    // .to('.earthWrap--playOn .poring', { opacity :1, scale :1, duration :0.8, ease : "bounce.in" })
    
    
    // .to('.earthWrap--playOn .object1', { x: -327, duration : 0.3 })
    // .to('.earthWrap--playOn .object2', { x: 408 , duration : 0.3 } ,"<")
    // .to('.earthWrap--playOn .poring', { x: 161 } ,"<")
    // .to('.earthWrap--playOn .textN', { opacity :1, x: 300, duration : 0.2 } ,"<")
    
    // .to('.earthWrap--playOn .textP', { opacity :1, x: -289 , duration : 0.2 } ,"<+=0.4")
    // .to('.earthWrap--playOn .textL', { opacity :1, x: -182 , duration : 0.2 } ,"<+=0.3")
    // .to('.earthWrap--playOn .textA', { opacity :1, x: -79  , duration : 0.2} ,"<+=0.2")
    // .to('.earthWrap--playOn .textY', { opacity :1, x: -70  , duration : 0.2} ,"<+=0.1")
    

    return playonTL;
  }


};






init();


// MotionPathHelper.create(".main--1");


// gsap.to(".earth", { opacity: 1});


// let openingTl = gsap.timeline();
//     openingTl.to('.img1', { rotation : 360, scale : 2.0, delay : 2, duration: 2.5 })
//     .to("#earth", { opacity :1, duration: 8, rotationY: 360, rotateX : 360, transformOrigin: "50% 50% -400" } )



    // openingTl.to("#earth", {
    //     keyframes: {
    //         "0%":   { opacity : 1, x: -368, scale :0.3, },
    //         "25%":   { opacity : 0, x: 389},
    //         // "75%":  { x: 0, y: 0}, 
    //         // "100%": { opacity : 1, x: -368, scale :0.3, },
    //             // easeEach: 'expo.inOut' // ease between keyframes
    //     },
    //     duration: 2
    // })

    


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


  //earth moving
  function FUNCTION_earthMoving(){
    const earthMovingTl = gsap
    .timeline({
      repeat: -1,
      // yoyo: true            
    })
    .set(".mainEarth", {
      // rotation: 360,
      transformOrigin: "center"
    })
    .to(".mainEarth", {
      rotation: -360,
      transformOrigin: "center",
      ease:Linear.easeNone,
      duration : 8
    });

    return earthMovingTl;
  }



  function FUNCTION_mainScrollTrigger() { 

    // gsap.to("body", { overflow : "visible" })

    let mainScrollTrigger = gsap.timeline({
            
      scrollTrigger: {
        trigger: '.main',
        markers: true,
        scrub: 1,
        pin: true,
                
        end: () => "+=" + document.querySelector(".main").offsetHeight
      }
              
      
    })
    .to(".earthWrap--playOn", { y : -180, scale : 0.8, duration : 0.2,})
    .to(".mainEarth", { scale : 0.6 , duration : 0.2,}, "<")
    

    .to(".earthWrap--backgroundTitle", { opacity :0 , display :"none" , duration : 0.3,}, "<")
    .to(".earthWrap--text1", {  opacity: 0,  duration : 0.1, },"<")
    .to(".earthWrap--with", {  opacity: 0,  duration : 0.1, },"<")

    .to(".earthWrap--gravity", {  opacity: 0,  duration : 0.1, },"<")
    
    // .to(".mainEarth", { scale : 0.9},"<")
            
    .to(".mainEarth", { scale : 1, duration : 0.3})
    .to(".earthWrap--textGravityGames", {  opacity: 1, scale : 1, duration : 0.3, },"<")
    .to(".earthWrap--textInfo1", {  opacity: 1,  duration : 0.3, },)
    .to(".earthWrap--textInfo1", {  opacity: 0,  duration : 0.3, },)
    .to(".earthWrap--textInfo2", {  opacity: 1,  duration : 0.3, },)
    .set(".earthWrap--mainCharImgWrap", { opacity : 1 }, "<" )
    .from(".mainSectionImg", { x : "-50%", opacity : 0, ease:"power4.inOut", duration : 0.8, stagger: { amount: 0.8 } }, "<") 

    .to(".earthWrap--imgMainLine1", {  opacity: 1, height : 429,  duration : 0.3, },"<+=0.5")
    .to(".earthWrap--imgMainLine2", {  opacity: 1, scale : 1, duration : 0.3, },"<+=0.2")
    .to(".earthWrap--imgcenterLight", {  opacity: 1, scale : 1, duration : 0.3, },"<")
    .to(".earthWrap--textInfo1", {  opacity: 0,  duration : 0.3, }, "<+=0.5")









    
    
    // .to(".box", { left:"50%", top:"50%", width : 100, height : 100, ease:"bounce.inOut", duration : 0.8, stagger: { amount: 0.8 } }, "<") 
  

    return mainScrollTrigger;
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



  // 커서 관련 
  let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});