import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import './App.css'
import Hero from './components/Hero/Hero'
// import HtmlCss from './components/HtmlCss/HtmlCss'
// import Section from './components/Section/Section'

function App() {

  const section = useRef()
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({
    ignoreMobileResize: true
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".myDiv",
          onEnter: self => console.log(self.isActive),
          start: "top 85%"
        }
      })

      timeline.to(".javaScript h3", {
        bottom: 0,
        duration: 0.5,
        ease: "power1.out"
      })

      timeline.to(".javaScript p", {
        y: 0,
        opacity: 0.5,
        duration: 0.5,
        delay: 0.1
      }, "<")
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div className="App">
      <Hero gsap={gsap} ScrollTrigger={ScrollTrigger} />
      {/* <HtmlCss gsap={gsap} ScrollTrigger={ScrollTrigger} />
      <section ref={section} className="javaScript">
        <div className="myDiv">
          <div className="titleContainer">
            <h3>JavaScript</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
        </div>
      </section> */}
      {/* <Section title={"Template"}>
        Lorem ipsum dolor sit amet,
      </Section> */}
    </div>
  );
}

export default App