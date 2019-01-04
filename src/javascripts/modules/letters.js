import 'gsap';

const letterEls = Array.from(document.querySelectorAll('.js-letter'));

const midX = window.innerWidth/2;
const midY = window.innerHeight/2;

const letters = {
  shadow(e) {
    let x;
    let y;
    let blur;

    x = -(e.x - midX);
    y = -(e.y - midY);

    blur = 1.25 * Math.abs(x*0.001)+Math.abs(y*0.001);

    TweenLite.set(letterEls, {textShadow: `${x*0.01}px ${y*0.01}px 1.25vw rgba(0,0,0,0.1)`});
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
      letters.shadow(e);
    })
  }
}

export { letters }
