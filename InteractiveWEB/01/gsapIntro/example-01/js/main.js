document.addEventListener("DOMContentLoaded", function(){
  setTimeout(()=> {
    window.scrollTo(0,0);
  },50)
  disableScroll();

  
  // 헤더 액션.
  $('header').hover(function(e){
    $(this).addClass('active');
    $('.subMenu').addClass('active');
    e.stopPropagation();
  },function(){
    $('.subMenu').removeClass('active');
    $(this).removeClass('active');
  })
  
  $('.subMenu__menu li').hover(function(e){
    var submenuNumber = $(this).data('submenunumber');
    $('.menu'+submenuNumber).addClass('active')
    e.stopPropagation();
  },function(){    
    $('[class^=menu]').removeClass('active')
  })

  $('.langWrap').click(function(){
    $('.langSubmenu').toggleClass('active');
    $('.langWrap li i.arrow').toggleClass('active');
    return false;
  })

  $('.familySite').click(function(){
    $('.familySiteSubmenu').toggleClass('active');
    $('footer ul.contactWrap li i.arrow').toggleClass('active');
    return false;
  })

    // top 버튼 액션.
    $('.btn-top').click(function(){
      window.scrollTo(0,0);
      return false;
    })
  

  // 스크롤 업 다운 체크
  let lastScroll = document.documentElement.scrollTop || 0
  document.addEventListener('scroll', function(){
    let scrollTop = document.documentElement.scrollTop
    if(scrollTop > lastScroll) {
      $('.subMenu').removeClass('active');
      $('.langSubmenu ').removeClass('active');
      gsap.to('header',{yPercent : -100})
    } else {
      gsap.to('header',{yPercent : 0})
    }
    lastScroll = scrollTop
  })  
  
});

gsap.registerPlugin(ScrollTrigger);



  // 스크롤 스무터 구동.
  let smoother = ScrollSmoother.create({
      content: ".wrap",
      smooth: 3,   
      effects: true
  });


  
function init(){
  
  // 총괄 애니메이션
  const master = gsap.timeline();
  master.add( FUNCTION_openingTL, { onComplete : console.log('오프닝완료') });
  master.add(FUNCTION_contentNextOBJMoving , { onComplete : console.log('통통튀는 오브젝트들 완료') });
  master.add(FUNCTION_titleDisplayTL, { onComplete : console.log('더월드 스크롤트리거 불러옴') });
  master.add(FUNCTION_recruitTitleDisplayTL, { onComplete : console.log('리크루투 불러옴') });

        
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



  // contentNext object moving
  function FUNCTION_contentNextOBJMoving(){
    const contentNextOBJMoving = gsap.timeline({ })
    .to(".objectBox", { y: 20, rotation :-10, ease: "bounce.out", duration : 1.5, stagger: { from: "center", each :0.1, repeat : -1, yoyo:true } }) 

    return contentNextOBJMoving;
  }



  function FUNCTION_mainScrollTrigger() { 

    // gsap.to("body", { overflow : "visible" })

    let mainScrollTrigger = gsap.timeline({
            
      scrollTrigger: {
        trigger: '.main',
        // markers: true,
        scrub: 3,
        pin: true,
                
        end: () => "+=" + document.querySelector(".main").offsetHeight*3
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
    .to(".alphabet", { left:"50%", top:"60%", width : 100, height : 100, x: "-50%", y: "-50%", ease:"power4.inOut", duration : 0.5, stagger: { amount: 0.1 } }, "<") 
    .to(".earthWrap--textInfo1", {  opacity: 0,  duration : 0.3, },)
    
    
    .to(".earthWrap--textInfo2", {  opacity: 1,  duration : 0.3, },)
    .to(".alphabet.leftOut", {  x: "-1000%",  ease:"power4.inOut", opacity :0, duration : 1.2, stagger: { amount: 0.8 } },) 
    .to(".alphabet.rightOut", {  x: "1000%",  ease:"power4.inOut", opacity :0, duration : 1.2, stagger: { amount: 0.8 } }, "<") 
    .set(".earthWrap--mainCharImgWrap", { opacity : 1 }, "<+=1.0" )
    .from(".mainSectionImg", { x : "-50%", opacity : 0, ease:"power4.inOut", duration : 0.8, stagger: { amount: 0.8 } }, "<") 
    
    .to(".earthWrap--imgMainLine1", {  opacity: 1, height : 429,  duration : 0.3, },"<+=0.5")
    .to(".earthWrap--imgMainLine2", {  opacity: 1, scale : 1, duration : 0.3, },"<+=0.2")
    .to(".earthWrap--imgcenterLight", {  opacity: 1, scale : 1, duration : 0.3, },"<")
    .to(".earthWrap--textInfo1", {  opacity: 0,  duration : 0.3, }, "<+=0.5")
    
    .set("section.main", { backgroundColor:"#ffffff" })
    .add(MENUdarkModeRemove)
    .set("section.main .content", { backgroundColor:"#000010",  },"<" )
    .set("section.main .content", { clipPath: 'circle(100%)'}, "<") 
    .to("section.main .content", {  overflow: "hidden", clipPath: 'circle(0%)',  duration : 2.0, ease:"none",}, "<") 
    
    .add(MENUdarkModeActive,"<")
    .set(".contentNext", { display : "flex"},"<+=0.7") 
    .to(".contentNext", { opacity:1, scale: 1, duration : 1.0, ease:"none",}, "<") 
    .to(".onlineEarthWrap", { x:0, y:"-50%", scale :1,  duration : 2.0, ease:"none",}, "<")
    .to(".onlineEarthWrap--power", { scale :1,  duration : 1.0, ease:"bounce.in",},"<")
    .from(".objectBox", { scale :0, ease:"bounce.inOut", duration : 0.8, stagger: { amount: 0.8 } }, "<") 
    
    
    .to(".onlineEarthWrap", { x:"-80%", y:"20%", scale :0, opacity : 0,  duration : 2.0, ease:"none",}) 
        

    .to(".text-online", { opacity :0, x : "-70%" , scale:0 },"<+=0.3")
    .to(".mobilePhoneWrap", { x:0, y:"-50%", scale :1, opacity : 1, duration : 2.0, ease:"none",}, "<")
    .to(".mobilePhoneWrap--power", { scale :1,  duration : 1.0, ease:"bounce.in",}, "<+=0.8")
    .to(".text-mobile", { opacity :1, x : "-50%" },"<")


    .to(".iptvWrap", { x:"69%", y:"-114%", scale :0.5,  duration : 2.0, ease:"none",}, "<")
    
            
    .to(".mobilePhoneWrap", { x:"-80%", y:"20%", scale :0, opacity : 0,  duration : 2.0, ease:"none",})     
    .to(".iptvWrap", { x:100, y:"-50%", scale :1, opacity : 1, duration : 1.0, ease:"none",}, "<")
    .to(".iptvWrap--power", { scale :1,  duration : 1.0, ease:"bounce.in",}, "<+=0.8")
    .to(".text-mobile", { opacity :0, x : "-70%" , scale:0 },"<")
    .add(MENUdarkModeActive,"<")
    .to(".text-iptv", { opacity :1, x : "-50%" },"<+=0.3")
    
    


    return mainScrollTrigger;
  }


  // The world 애니메이션
  function FUNCTION_titleDisplayTL(){


    let titleDisplayTl = gsap.timeline({
      scrollTrigger: {
        trigger: 'section .theWorldContent--playOn',        
        scrub: 3,  
        // markers : true,
        start : "top-=100 80%",
        end : "bottom 80%",
        duration : 0.8


      }
    });
    
    titleDisplayTl.to(".sectionTheWorld", { duration : 1.5, backgroundColor :"#060518" },"<");

    titleDisplayTl.set(".theWorldContent--playOn", {                
        "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    })
    
    .to(".theWorldContent--playOn", { 
    "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },">")    

    .to(".theWorldContent--playOn", { 
    "clip-path": "polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)" },">")

    .to(".theWorldContent--playOn", {
    "clip-path": "polygon(0% 0%, 85% 0%, 85% 100%, 0% 100%)" },">")

    .to(".theWorldContent--playOn", {
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },">")
    .to(".titWorld", { y : 0, duration:0.3, opacity : 1, onComplete : MENUdarkModeRemove})
    .to(".theWorldContent--textInfo p", { y : 0, duration:0.3, opacity : 1 })
    
    

    return titleDisplayTl;

  }
  


  // Recruit 애니메이션
  function FUNCTION_recruitTitleDisplayTL(){
    
    let recruitTitleDisplayTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.recruitContent',        
        scrub: 1,  
        // markers : true,
        // start : "top-=100 80%",
        end: () => "+=" + document.querySelector(".recruitContent").offsetHeight
        


      }
    })
        
  recruitTitleDisplayTl.set(".recruitContent--playOn", {                
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
  })
  
  .to(".recruitContent--playOn", { 
  "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },">")    

  .to(".recruitContent--playOn", { 
  "clip-path": "polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)" },">")

  .to(".recruitContent--playOn", {
  "clip-path": "polygon(0% 0%, 85% 0%, 85% 100%, 0% 100%)" },">")

  .to(".recruitContent--playOn", {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },">")

  .to(".titRecruit", { y : 0, duration:0.5, opacity : 1 })
  .to(".recruitContent--textInfo p", { y : 0, duration:0.5, opacity : 1 })


  .to(".recruitEarthWrap--earth", { scale:0.8, duration:1.0, } ,"<=+0.5")

  .to(".recruitEarthWrap--imgMainLine1", {  opacity: 0.4, height : 434,  duration : 0.5, })
  .to(".recruitEarthWrap--imgMainLine2", {  opacity: 0.4, scale : 1, duration : 0.5, })
  .to(".recruitEarthWrap--imgcenterLight", {  opacity: 1, scale : 1, duration : 0.5, })
  .to(".recruitEarthWrap--gravitySimbol", {  opacity: 1, duration : 0.5, },"<")
  .to(".recruitBtnWrap li", { opacity: 1, scale : 1,  ease:"power1.in", duration : 0.5, stagger: { from : "center",  amount: 0.5 } },"<") 
    

    return recruitTitleDisplayTl;

  }
  
    

  

  function FUNCTION_openingTL(){
    let openingTL = gsap.timeline();
    openingTL.to("section.main", { opacity: 1, duration: 0.5, ease: "power4.in" })  
             .to(".mainEarth", { scale : 1, opacity: 1, /*rotation : 360,*/ duration: 0.5, /* ease: "slow(0.7, 0.7, false)" */ })
                            
              .set(".box", { scale : 1},"<")
              .from(".box", { opacity: 0, left:"50%", top:"50%", ease:"power1.in", duration : 0.3, stagger: { from : "center",  amount: 0.3 } },"<")  // 흩뿌림
              
              .to(".earthWrap--text1", {  opacity: 1, y:50, duration : 0.8, ease: "power1.in" },"<+=0.3")

              .to(".earthWrap--with", {  opacity: 1, y:50, duration : 0.8, ease: "power1.in" },"<+=0.1")
              .to(".earthWrap--gravity", {  opacity: 1, y:50, duration : 0.8, ease: "power1.in" },"<+=0.1")
              .to(".earthWrap--backgroundTitle", {  opacity: 1, duration : 2.5,},"<")
              
              .set(".earthWrap--playOn", {  opacity: 1, y:50, duration : 0.8, ease: "power1.in" },"<+=1.0")
              .add(FUNCTION_playonTL,"<")
              .add(FUNCTION_mainScrollTrigger,"<+=1.5" )
              .add(enableScroll,"<" )
                                                                              
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
        // markers : true,
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


  function MENUdarkModeActive(){
    $('header').addClass('darkMode');
  }
  function MENUdarkModeRemove(){
    $('header').removeClass('darkMode');
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



  