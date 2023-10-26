var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x-250 + "px"
    blur.style.top = dets.y-250 + "px"

})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor :"#000",
    height: "105px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
    
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y:90,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:4
    }
})

// gsap.from(".card", {
//     y:90,
//     opacity:0,
//     duration:2,
//     stagger:0,
//     // scrollTrigger:{
//     //     trigger:".card",
//     //     scroller:"body",
//     //     // markers:true,
//     //     start:"top 70%",
//     //     end: "top 65%",
//     //     scrub:1
//     // }
    
// })

gsap.from("#green-div .card-article", {
    x:90,
    opacity:0,
    duration:3,
    stagger: 2,
    scrollTrigger:{
        trigger:"#green-div",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end: "top 58%",
        scrub:5
    }
})
gsap.from("#green-div h1", {
    x:90,
    opacity:0,
    duration:3,
    stagger: 2,
    scrollTrigger:{
        trigger:"#green-div",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 58%",
        scrub:5
    }
})



gsap.from("#page3 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end: "top 70%",
        scrub:2
    }
})
