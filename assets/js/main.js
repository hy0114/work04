// ****새로고침
history.scrollRestoration = "manual";

// **  메인 로고/텍스트
intro = gsap.timeline({})
intro.from('.sc-main [data-scroll-text] span .logo',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
},'a')
intro = gsap.timeline({})
intro.from('.sc-main [data-scroll-text] span .text-area',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
},'a')


// **  메인 핸드폰 움직임
// gsap.set('.sc-main .bg-phone',{ yPercent: -10, })
    
// $('.sc-main').each(function(i,el){
//   gsap.to($(this).find('.bg-phone'),{
//     scrollTrigger:{
//         trigger:el,
//         start:"0% 00%",
//         end:"100% 60%",
//         // markers:true,
//         scrub:0,
//       },
//       yPercent:0,
//       ease:'none'
//   })
// })






    
$('[data-scroll-content]').each(function(i,el){
  gsap.from($(this).find('span'),{
    scrollTrigger:{
        trigger:el,
        start:"0% 80%",
        end:"100% 100%",
        // markers:true,
        scrub:1,
      },
      yPercent:100,
      opacity:0,
      stagger:0.1
  })
})
    

$('[data-scroll-content00]').each(function(i,el){
  gsap.from($(this).find('span'),{
    scrollTrigger:{
        trigger:el,
        start:"0% 80%",
        end:"55% 100%",
        // markers:true,
        scrub:1,
      },
      yPercent:20,
      opacity:0,
      stagger:0.1
  })
})









// ** ORder 주문 순서 스텝 <좌우 슬라이더>

var swiper = new Swiper("#mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 30,
  
  
  centeredSlides: true,

  autoplay:{
  delay: 1500,
  disableOnInteraction: false,
  loop : false,
  loopAdditionalSlides : 1,}
  
  
});






// **survey 프로그레스 바

gsap.to('#progress-bar75',{
  scrollTrigger:{
    trigger:".sc-survey",
    start:"0% 10%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'75%',
  ease:'none'
})
gsap.to('#progress-bar50',{
  scrollTrigger:{
    trigger:".sc-survey",
    start:"0% 10%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'50%',
  ease:'none'
})



// **스타일가이트 폰트 레귤러-볼드


let e = document.querySelector('#try-weight');

e.addEventListener('input',function(){
    console.log(e.value);
    $('.sc-font .font-right p').css('font-weight',e.value)
    // $('.val2').text(e.value);
},false);