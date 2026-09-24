/* Imports------------------*/
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/*Variables---------------------*/

/* Fonction-------------------*/

/* Animation premier bloc ---------------*/ 
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




/* Src mozilla ----------*/
/* Animation vêtement -------------------*/
// 1.Sélection vêtements

/*
const tousLesVetements = document.querySelectorAll('.vetement');
const section2 = document.getElementById('section2');

// 2. La fonction qui fait tomber les vêtements
function faireTomberVetements() {
    tousLesVetements.forEach(function(vetement, index) {
        setTimeout(function() {
            vetement.classList.add('tombe');
        }, index * 700); //écart entre chaque vêtement
    });
}

// 3. "observateur" pour surveiller quand la Section 2 arrive à l'écran



// src Mozilla //
const observerOptions = {
    root: null,  // Utilise la fenêtre du navigateur
    threshold: 0.3  // Se déclenche quand 30% de la section 2 est visible à l'écran
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // Si la section 2 est visible dans l'écran
        if (entry.isIntersecting) {
            faireTomberVetements(); // On lance l'animation !
            observer.unobserve(entry.target); // On arrête de surveiller pour que l'animation ne se relance pas en boucle si on remonte la page
        }
    });
}, observerOptions);

// 4. On demande à l'observateur de surveiller notre section 2
observer.observe(section2);


*/





/* Animation deuxième section -----------------*/
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





/* Animation troisième section ------------------------*/

Draggable.create('.bloc')


/* Animation troisième bloc - Timeline -----------------*/
/*let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,

})


tl.to('#movingBlock3',{x:100,})
.to('#movingBlock3',{y:100,})
.to('#movingBlock3',{x:-100,})
.to('#movingBlock3',{y:-100,})




/* Animation quatrième bloc - Draggrable -----------------*/

/*Draggable.create("#movingBlock4",{
    //type: "x",
})*/