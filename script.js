gsap.timeline({ defaults: { ease: "power1.inOut" } })
  .fromTo('.slide_1 .element_4', { scaleX: 1, scaleY: 1, y: 0 }, { scaleX: 1.1, scaleY: 1.1, y: 4, duration: 1, repeat: -1, yoyo: true })


document.querySelector(".slide_1 .element_4").addEventListener("click", ballTap)
document.querySelector(".slide_1 .element_5").addEventListener("click", ballTap)


function ballTap() {
  let t1 = gsap.timeline({ defaults: { ease: "power1.inOut" } })
    .fromTo(['.slide_1 .element_4'], { opacity: 1, display: 'block' }, { opacity: 0, display: 'none', duration: .5 })
    .fromTo(['.slide_1 .element_5'], { x: 0, y: 0 }, { x: -50, y: -5, scale: .5, rotate: 720, duration: 1 }, ">-.3")
    .to(['.slide_1 .element_5'], { x: -45, y: -50, scale: .3, rotate: 360, duration: .5 }, ">-.2")
    .to(['.slide_1 .element_3'], { opacity: 0, display: "none", duration: .2 }, ">-.1")
    .to(['.slide_1 .element_6'], { opacity: 1, display: "block", duration: .2 }, "<")
    .to(['.slide_1 .element_7'], { opacity: 1, display: "block", duration: .2 }, "<")
    .to(['.slide_1 .element_8'], { opacity: 1, display: "block", duration: .2 }, "<")
    .to(['.slide_1 .element_7'], { rotate: 360, x: -10, y: -5, duration: .2, ease: Linear.easeNone }, "<")
    .to(['.slide_1 .element_8'], { rotate: 360, x: 10, y: -5, duration: .2, ease: Linear.easeNone }, "<")
    .to(['.slide_1 .element_8'], { rotate: 1080, x: 10, y: 55, duration: .6, ease: Linear.easeNone }, ">")
    .to(['.slide_1 .element_7'], { rotate: 1080, x: -10, y: 55, duration: .6, ease: Linear.easeNone }, "<")
    .to(['.slide_1 .element_5'], { opacity: 0, display: "none", duration: .3 }, ">-.3")
    // out operation done
    .to(['.slide_1 .element_2'], { opacity: 0, display: "none", duration: .5 }, ">")
    .to(['.slide_1 .element_3'], { opacity: 0, display: "none", duration: .5 }, "<")
    .to(['.slide_1 .element_4'], { opacity: 0, display: "none", duration: .5 }, "<")
    .to(['.slide_1 .element_5'], { opacity: 0, display: "none", duration: .5 }, "<")
    .to(['.slide_1 .element_6'], { opacity: 0, display: "none", duration: .5 }, "<")
    .to(['.slide_1 .element_7'], { opacity: 0, display: "none", duration: .5 }, "<")
    .to(['.slide_1 .element_8'], { opacity: 0, display: "none", duration: .5 }, "<")
    .fromTo(['.slide_1 .element_9'], { opacity: 0, scaleX: .5, scaleY: .5 }, { opacity: 1, scaleX: 1, scaleY: 1, display: "block", duration: 1 }, "<")
    .to(['.slide_1 .element_1'], { opacity: 0, display: "none", duration: .8, delay: .5 }, ">")
    .to(['.slide_1 .element_9'], { opacity: 0, display: "none", duration: .3 }, "<.4")
    // second slide
    .to(['.slide_2 .element_1'], { opacity: 1, display: "block", duration: .8 }, "<-.4")
    .to(['.slide_2 .element_2'], { opacity: 1, display: "block", duration: .8 }, ">-.2")
    .to(['.slide_2 .element_3'], { opacity: 1, display: "block", duration: .8 }, "<")
    .fromTo(['.slide_2 .element_4'], { x: -200, y: 150 }, { x: 0, y: 0, opacity: 1, display: "block", duration: .8 }, "<")
    .to(['.slide_2 .element_5'], { opacity: 1, display: "block", duration: .8 }, "<")
    .fromTo(['.slide_2 .element_5'], { scaleX: 1, scaleY: 1 }, { scaleX: 1.15, scaleY: 1.15, duration: 1, repeat: -1, yoyo: true }, ">")
    .fromTo(['.slide_2 .element_3'], { opacity: 1 }, { opacity: 0, duration: .7, repeat: -1, yoyo: true }, "<")

  let t2 = gsap.timeline({ defaults: { ease: "power1.inOut" }, repeat: -1,delay:1 })
    .fromTo(".slide_2 .element_4", { x: 0, y: 0 }, { x: -200, y: 150, duration: .7, delay: 2 }, ">")
    .to(".slide_2 .element_4", { x: 0, y: 0, duration: .7 }, ">.1")


  var master = gsap.timeline()
    .add(t1)
    .to(t2)
}