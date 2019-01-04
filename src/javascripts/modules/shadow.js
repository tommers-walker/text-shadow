import 'gsap';

const shadowEls = Array.from(document.querySelectorAll('.js-shadow-el'));
const shadowSvgs = Array.from(document.querySelectorAll('.js-shadow-svg'));

const midX = window.innerWidth/2;
const midY = window.innerHeight/2;

const shadows = {
  shadow(e) {
    let x;
    let y;
    let shadowX;
    let shadowY;

    x = -(e.x - midX);
    y = -(e.y - midY);

    TweenLite.set(shadowEls, {textShadow: `${x*0.01}px ${y*0.01}px 1.25vw rgba(0,0,0,0.1)`});
    TweenLite.set(shadowSvgs, {webkitFilter: `drop-shadow(${x*0.01}px ${y*0.01}px 1.25vw rgba(0,0,0,0.1))`, onComplete: function() {
      // console.log(x)
    }});
  },

  init() {
    // const tl = new TimelineMax()
    //
    // tl.staggerFromTo(letterEls, 0.2,
    //   {
    //     opacity: 0,
    //     scale: 0.95,
    //     textShadow: "0 0 0 rgba(0,0,0,0.2)",
    //   },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     textShadow: "0.5vw 0 1.25vw rgba(0,0,0,0.1)",
    //     ease: Back.easeOut.config(1.25)
    //   },
    //   0.05
    // );

    document.addEventListener('mousemove', function(e) {
      shadows.shadow(e);
    })
  }
}

export { shadows }
