import { useLayoutEffect, useRef } from 'react'
import './Section.css'
import { gsap, ScrollTrigger } from 'gsap/all'

function Section(props) {

  const section = useRef()
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({
    ignoreMobileResize: true
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".section__inner",
          onEnter: self => console.log(self.isActive),
          start: "top 85%"
        }
      })

      timeline.to([".section__title", ".section__pContainer p"], {
        y: 0,
        duration: 0.5
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={section} className="section">
      <div className="section__inner">
        <div className="section__titleContainer">
          <h2 className="section__title">{props.title}</h2>
        </div>
        <div className="section__pContainer">
          <p>{props.children}</p>
        </div>
      </div>
    </section>
  )
}

export default Section