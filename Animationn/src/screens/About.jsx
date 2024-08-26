import React, { useEffect } from "react";
import "../styling/About.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function About() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useEffect(()=>{
    const tl = gsap.timeline({
      ScrollTrigger: {
        trigger: "#about",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
        markers: true,
      },
    })
    tl.to("#center", {
      height: "100vh",
    }, 'a')
    .to("#top", {
      top: "-50%",
    }, 'a')
  },[])

  return (
    <div id="about">
      <div id="top">
        <h1 id="top-h1">ME ?</h1>
      </div>
      <div id="center"></div>
      <div id="bottom">
        <h1 id="bottom-h1">ME ?</h1>
      </div>
    </div>
  );
}

export default About;
