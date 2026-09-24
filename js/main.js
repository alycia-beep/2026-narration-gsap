/* Imports------------------*/
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/*Variables---------------------*/

/* Fonction-------------------*/

/* --------------------------------Animation premier bloc ---------------*/ 
gsap.from("#section1", {
    x: "400px",
    duration: 2,
})

/*Texte*/
gsap.from(".section1-text",{
    x:"-600px",
    duration: 3,
})


gsap.from(".section1-txt",{
    x:"600px",
    duration: 3,
})




/* ------------------------------Animation deuxième section -----------------*/
gsap.fromTo(".vetement", 
  { opacity: 0, y: 0 },
  {
    scrollTrigger: {
      trigger: "#section2",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
    },
    opacity: 1,
    y: 600,
    duration: 1,
    stagger: 1,
  }
);



/*------------------------------ Animation troisième section ------------------------*/

Draggable.create('.bloc')







/* Animation troisième bloc - Timeline -----------------*/
/*let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,

})


tl.to('#movingBlock3',{x:100,})
.to('#movingBlock3',{y:100,})
.to('#movingBlock3',{x:-100,})
.to('#movingBlock3',{y:-100,})*/