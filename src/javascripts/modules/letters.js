import 'gsap';

const letterEls = Array.from(document.querySelectorAll('.js-letter'));

const letters = {
  init() {
    const tl = new TimelineMax()

    tl.staggerFromTo(letterEls, 0.2,
      {
        opacity: 0,
        scale: 0.95,
        textShadow: "0 0 0 rgba(0,0,0,0.2)",
      },
      {
        opacity: 1,
        scale: 1,
        textShadow: "0.5vw 0 1.25vw rgba(0,0,0,0.1)",
        ease: Back.easeOut.config(1.25)
      },
      0.05
    )
  }
}

export { letters }
