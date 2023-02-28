gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);


let smoother = ScrollSmoother.create({
    smooth: 2,   
    effects: true
  });





  // gsap.to(".mainEarth", { opacity: 0.5, duration: 0.5, repeat: -1, yoyo: true });

function init(){

  let openingTL = gsap.timeline();
  openingTL.to("section.main", { opacity: 1, duration: 1 })  
           .to(".mainEarth", { scale : 1, rotation : 360, duration: 3, /* ease: "slow(0.7, 0.7, false)" */ })
          //  .to(".box", { duration: 0.2, stagger: {each: 0.2, from: "center", ease: "power2.inOut" } },"<")
           .to(".box.main--1", {  opacity: 1, motionPath : PATH_LIST.main_1_path , duration : 2.0, ease: 'sine.out' },"<+=1")
           .to(".box.main--o", {  opacity: 1, motionPath : PATH_LIST.main_o_path , duration : 2.0 },"<+=0.2")
           .to(".box.main--a", {  opacity: 1, motionPath : PATH_LIST.main_a_path , duration : 2.0 },"<+=0.2")
           .to(".box.main--b", {  opacity: 1, motionPath : PATH_LIST.main_b_path , duration : 2.0 },"<+=0.2")
           .to(".box.main--l", {  opacity: 1, motionPath : PATH_LIST.main_l_path , duration : 2.0 },"<+=0.2")
           .to(".box.main--e", {  opacity: 1, motionPath : PATH_LIST.main_e_path , duration : 2.0 },"<+=0.2")
           
          //  .to(".box.main--o", { duration : 5, scale : 0, repeat : -1, yoyo : true, keyframes : {                                    
          //  .to(".box.main--o", { duration : 5, repeat : -1, keyframes : {                                    
          //                           "0%" : { xPercent : 0,  },
          //                           "10%" : {  scale : 0.7, },
          //                           "20%" : {  scale : 0.5, },
          //                           "30%" : {  scale : 0.3, },
          //                           "40%" : {  scale : 0, },
          //                           "50%" : {  xPercent : 550, scale : 1, },
          //                           "60%" : {  scale : 1, },
          //                           "70%" : {  scale : 0, },
          //                           "80%" : {  scale : 1, },
          //                           "90%" : {  scale : 1, },
          //                           "100%" : {  xPercent : 0, scale : 1, },
          //                           // "35%" : { scale : 0.3 },
          //                           // "50%" : { scale: 1, x: 976,  },
          //                           // "50%" : {  xPercent: 600,  },
          //                           // "75%" : { xPercent: 530, scale : 1 },
          //                           // "100%" : { xPercent: -10 },
          //                         }
          //                       })

};

let openingTL_nextStep = gsap.timeline();



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

    