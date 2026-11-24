import Time from '../../Time';

import AnimatedLink from '../Animation/AnimatedLink';

import { useCopy } from '../Animation/CopyContext';

import { useEffect } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { useLocation, useNavigate } from 'react-router-dom';

import './style.scss';



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



const Footer = () => {

  const { copy } = useCopy();

  const location = useLocation();

  const navigate = useNavigate();



  const handleClick = (e) => {

    // e.preventDefault();

    copy('kammala2006@gmail.com', e);

  };



  const smoothScrollToId = (id) => {

    const scroller =

      window.innerWidth < 1100

        ? document.querySelector('.scroll-container')

        : window;



    const target = document.getElementById(id);

    if (!target) return;



    const headerEl = document.querySelector('.header');

    const offsetY = headerEl ? headerEl.offsetHeight : 0;



    gsap.to(scroller, {

      duration: 0.8,

      ease: 'power3.out',

      scrollTo: { y: target, offsetY, autoKill: true },

      overwrite: 'auto',

    });

  };



  const handleAnchor = (e, id) => {

    e.preventDefault();



    if (location.pathname === '/') {

      smoothScrollToId(id);

    } else {

      sessionStorage.setItem('pendingAnchor', id);

      navigate(`/#${id}`);

    }

  };



  useEffect(() => {

    gsap.fromTo(

      '.footer-title span',

      { yPercent: 150 },

      {

        yPercent: 0,

        ease: 'power2.out',

        stagger: { each: 0.03, from: 'center' },

        scrollTrigger: {

          trigger: '.footer',

          start: 'top 30%',

          end: 'bottom bottom',

          scrub: 5,

          scroller: window.innerWidth < 1100 ? '.scroll-container' : null,

        },

      }

    );



    gsap.to('.footer-behance', {

      scrollTrigger: {

        trigger: '.footer',

        start: 'top 30%',

        scroller: window.innerWidth < 1100 ? '.scroll-container' : null,

      },

      opacity: 1,

      duration: 1.5,

    });



    gsap.to('.footer-reserved', {

      scrollTrigger: {

        trigger: '.footer',

        start: 'top 30%',

        scroller: window.innerWidth < 1100 ? '.scroll-container' : null,

      },

      opacity: 1,

      delay: 0.8,

      duration: 1.5,

    });

  }, []);



  return (

    <footer

      className='footer'

      id='footer'>

      <div className='container'>

        <div className='footer__wrapper'>

          <a

            href='tel:+916304825033'

            className='footer-phone footer-line-animation'>

            +91 6304825033

          </a>



          {/* fix: mailto */}

          <a

            href='mailto:kammala2006@gmail.com'

            className='footer-email footer-line-animation'

            onClick={handleClick}>

            kammala2006@gmail.com

          </a>



          <div className='footer__social'>

            <a

              href='https://github.com/KarthikSai06'

              target='_blank'

              className='link-line'>

              github

              <svg

                xmlns='http://www.w3.org/2000/svg'

                width='21'

                height='21'

                viewBox='0 0 21 21'

                fill='none'>

                <path

                  d='M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104'

                  stroke='#101010'

                  strokeWidth='2'

                  strokeLinecap='round'

                  strokeLinejoin='round'

                />

              </svg>

            </a>

            <a

              href='https://t.me/ola_la0304'

              target='_blank'

              className='link-line'>

              telegram

              <svg

                xmlns='http://www.w3.org/2000/svg'

                width='21'

                height='21'

                viewBox='0 0 21 21'

                fill='none'>

                <path

                  d='M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104'

                  stroke='#101010'

                  strokeWidth='2'

                  strokeLinecap='round'

                  strokeLinejoin='round'

                />

              </svg>

            </a>

            <a

              href='https://www.facebook.com/olha.lazarieva'

              target='_blank'

              className='link-line'>

              facebook

              <svg

                xmlns='http://www.w3.org/2000/svg'

                width='21'

                height='21'

                viewBox='0 0 21 21'

                fill='none'>

                <path

                  d='M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104'

                  stroke='#101010'

                  strokeWidth='2'

                  strokeLinecap='round'

                  strokeLinejoin='round'

                />

              </svg>

            </a>

          </div>



          <div className='footer-pages-location'>

            <div className='footer-pages'>

              <AnimatedLink

                text='about me'

                onClick={(e) => handleAnchor(e, 'about')}

                to='/'

              />

              <AnimatedLink

                text='services'

                onClick={(e) => handleAnchor(e, 'services')}

                to='/'

              />

              <AnimatedLink

                text='works'

                onClick={(e) => handleAnchor(e, 'works')}

                to='/'

              />

            </div>



            <div className='footer-location'>

              <p>Address:</p>

              <p>

                Dayananda Sagar College of Engineering

                <br />

                Bengaluru, India

              </p>

            </div>

          </div>



          <div className='footer-behance'>

            <AnimatedLink

              text='leetcode'

              to='https://leetcode.com'

              target='_blank'

            />

            <AnimatedLink

              text='github'

              to='https://github.com/KarthikSai06'

              target='_blank'

            />

            <AnimatedLink

              text='linkedin'

              to='https://linkedin.com/in/k-karthik-sai'

              target='_blank'

            />

          </div>



          <h2 className='footer-title'>

            {'karthik sai'.split('').map((char, i) => (

              <span key={i}>{char === ' ' ? '\u00A0' : char}</span>

            ))}

          </h2>



          <div className='footer-reserved'>

            <div className='footer-reserved__time'>

              <Time />

            </div>

            <a

              href='http://maxmilkin.com'

              className='footer-reserved__dev'

              target='_blank'

              rel='noreferrer'>

              development - <span>M</span>

              <span>M</span>

            </a>

            <div className='footer-reserved__reserved'>

              2026 All right reserved. Kammala Karthik Sai

              <br />

              Any reproduction, distribution, or use of the materials without

              permission is prohibited.

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

};



export default Footer;

