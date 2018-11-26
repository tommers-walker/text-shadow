import 'gsap';

const letterEls = Array.from(document.querySelectorAll('.js-letter'));

const letters = {
  init() {
    const tl = new TimelineMax({repeat: 1, yoyo: true})

    tl.staggerFromTo(letterEls, 0.1,
      {
        textShadow: "1rem 0rem 1rem rgba(0,0,0,0.1)"
      },
      {
        scale: 1.05,
        textShadow: "1rem 0rem 1rem rgba(0,0,0,0.05)",
        yoyo: true,
        repeat: 1
      },
      0.05
    )
  }
}

export { letters }
