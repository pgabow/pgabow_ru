import { useLayoutEffect, useRef } from "react";
import heroIcon from '../../assets/iconO.png'
import './Hero.css'

function Hero(props) {

  const hero = useRef();
  const gsap = props.gsap;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.defaults({ duration: 1, stagger: 0.2 })

      const timeline2 = gsap.timeline({ repeat: -1 })
      timeline2.pause()
      const timeline = gsap.timeline()

      timeline.from([".hero__title span"], { y: 200, duration: 0.5, opacity: 0, ease: "power1.inOut" })
      timeline.from([".nav__link"], { x: 200, stagger: 0.1, opacity: 0, duration: 0.2 })
      timeline.from(".hero__bottom span", { x: 200, opacity: 0, stagger: 0.1, duration: 0.2, ease: "power4.out" }, "<")
      timeline.from([".hero__logoContainer"], { x: -200, duration: 0.2, opacity: 0 })
      timeline.to([".hero__logo"], { rotation: 360, x: 60, ease: "power4.out" }, "<")
      timeline.to([".hero__logo"], { rotation: -390, x: -5, duration: 3, ease: "power1.inOut" }, "-=0.5")
      timeline.to([".hero__logo"], { rotation: -360, x: 0, ease: "back.in" })
      timeline.call(() => timeline2.play())
      timeline2.to(".hero__title span", { filter: "blur(5px)" })
      timeline2.to(".hero__title span", { filter: "blur(0px)" }, "-=0.5")
      timeline2.to(".hero__title span", { delay: 5 })
    }, hero)

    return () => ctx.revert()
  }, [gsap])

  return (
    <div ref={hero} className='hero'>
      <nav className='hero__nav'>
        <span className='hero__logoContainer'>
          <img className='hero__logo' src={heroIcon} alt='hero__icon' />
        </span>
        <div className='nav__linkContainer'>
          <a
            className='nav__link'
            href='http://gabow.ru'
            rel='noreferrer'
            title='gabow.ru'
            alt='gabow.ru'
          >
            gabow.ru
          </a>
        </div>
      </nav>
      <h1 className='hero__title'>
        <span>P</span>
        <span>A</span>
        <span>U</span>
        <span>L</span>
        <span> </span>
        <span>G</span>
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>W</span>
      </h1>
      <div className='hero__bottom'>
        <span>Moscow / Russia</span>
        <span>Front End Developer</span>
      </div>
    </div>
  )

}

export default Hero