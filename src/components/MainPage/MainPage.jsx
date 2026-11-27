import { supportsScene } from '../../App';
import { ProjectList, Skills, Background, Contact } from '../PortfolioSections';
// MainPage.jsx

import AboutCompact from '../AboutCompact';



import Hero from "../Hero/Hero";

import ProjectRoom from "../ProjectRoom/ProjectRoom";



import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import gsap from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { motion } from "framer-motion";





gsap.registerPlugin(ScrollToPlugin);



const MainPage = ({ heroVisible, setHeroVisible }) => {

  const location = useLocation();



  useEffect(() => {

    if (heroVisible) {

      document.body.classList.add("loaded");

    }

  }, [heroVisible]);



  useEffect(() => {

    const hashId = (location.hash || "").replace("#", "");

    const pending = sessionStorage.getItem("pendingAnchor");

    const id = hashId || pending;

    if (!id) return;



    const scroller =

      window.innerWidth < 1100

        ? document.querySelector(".scroll-container")

        : window;



    const target = document.getElementById(id);

    if (!target) return;



    const headerEl = document.querySelector(".header");

    const offsetY = headerEl ? headerEl.offsetHeight : 0;



    const t = setTimeout(() => {

      gsap.to(scroller, {

        duration: 0.8,

        ease: "power3.out",

        scrollTo: { y: target, offsetY, autoKill: true },

        overwrite: "auto",

        onComplete: () => sessionStorage.removeItem("pendingAnchor"),

      });

    }, 50);



    return () => clearTimeout(t);

  }, [location.key]);



  useEffect(() => {

    window.dispatchEvent(new Event("darkzones-ready"));

    requestAnimationFrame(() =>

      window.dispatchEvent(new Event("darkzones-ready")),

    );

  }, []);



  return (

    <>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        transition={{ delay: 0.8 }}

      >

        <Hero visible={heroVisible} setVisible={setHeroVisible} />

        <div className="dark-zone">

          <AboutCompact />

          {supportsScene && window.innerWidth >= 1100 && <ProjectRoom heroVisible={heroVisible} />}

        </div>

        <div id={supportsScene && window.innerWidth >= 1100 ? undefined : "works"}><ProjectList /></div>
        <Skills />

        <Background />

        <Contact />

      </motion.div>

      <motion.div

        className="slide-page-transition"

        initial={{ y: "-100%" }}

        animate={{ y: "100%" }}

        transition={{ duration: 1.3, ease: [0.79, 0.08, 0.35, 0.96] }}

      />

    </>

  );

};



export default MainPage;

