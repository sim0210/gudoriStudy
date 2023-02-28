gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let smoother = ScrollSmoother.create({
    smooth: 2,   
    effects: true
  });

gsap.to(".img1", { opacity: 0.5, duration: 0.5, repeat: -1, yoyo: true });
gsap.to("section.first", { opacity: 1, duration: 2 });



gsap.to(".earth", { opacity: 1});




let openingTl = gsap.timeline();
    openingTl.to('.img1', { rotation : 360, scale : 2.0, delay : 2, duration: 2.5 })
    .to("#earth", {opacity : 1, x : -368, duration: 4.5, scale :0.3, } )
    .to("#earth", {opacity : 0, x : 368, duration: 0, scale :0.3,})
    .to("#earth", {opacity : 1, x : -368, duration: 4.5, scale :0.3, } )


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

    