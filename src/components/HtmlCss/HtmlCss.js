import { useLayoutEffect, useRef } from 'react'
import './HtmlCss.css'

function HtmlCss(props) {

  const section = useRef()
  const ScrollTrigger = props.ScrollTrigger
  props.gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({
    ignoreMobileResize: true
  });

  useLayoutEffect(() => {
    let ctx = props.gsap.context(() => {
      const timeline = props.gsap.timeline({
        scrollTrigger: {
          trigger: ".myDiv",
          onEnter: self => console.log(self.isActive),
          start: "top 85%"
        }
      })

      timeline.to(".HtmlCss h2", {
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        opacity: 1
      })

      timeline.to(".HtmlCss p", {
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        opacity: 1,
        delay: 0.1
      }, "<")
    }, section)

    return () => ctx.revert()
  }, [props.gsap])

  return (
    <section className="HtmlCss" ref={section}>
      <div className="myDiv">
        <h2>HTML & CSS</h2>
        <p>I spent my entire teenagehood studying only HTML & CSS, not only because that's the only thing I needed to customize my website, but also because I was afraid of JavaScript back then.</p>
      </div>
    </section>
  );
}

export default HtmlCss