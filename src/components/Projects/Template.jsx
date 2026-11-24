// Template.jsx
import './style.scss';
import useTitleAnimation from '../Animation/useTitleAnimation';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const labels = ['CHALANGE', 'SERVICE', 'INDUSTRY', 'YEAR'];

const Arrow = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 35 35'
    fill='none'
    aria-hidden>
    <path
      d='M10.8554 11.4273L24.4842 22.8598M14.7927 23.8603L24.6458 22.9956L23.7979 13.141'
      stroke='#AAA8A8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Template = ({
  mainImage,
  title,
  services = [],
  barcodeTitle,
  barcode,
  sections = [],
  caseBackgroundMain,
  caseBackgroundTopTitle,
  caseBackgroundTopImage,
  caseBackgroundMiddleTitle,
  caseBackgroundMiddleImage,
  caseDSGNThree,
  caseDSGNThreeTitle,
  caseDSGNFourTitle,
  caseDSGNFourImg,
  caseDSGNFourBg,
  caseDSGNFiveTitle,
  caseDSGNFiveImg,
  caseDSGNSixTitle,
  caseDSGNSixImg,
  caseDSGNSevenImg,
  caseDSGNSevenVideo,
  caseDSGNSevenTitle,
  caseDSGNSevenBg,
  moreWorks = [],
  websiteLink,
  websiteText = 'visit website',
}) => {
  useTitleAnimation();

  // единые опции для кастомного скроллера (без null/undefined)
  const ST = useRef(
    window.innerWidth < 1100 ? { scroller: '.scroll-container' } : {}
  );

  // === split-тайтл ("Kyiv\nfashion\nweek") ===
  const dsgn4TitleRef = useRef(null);

  // ВСЕ ScrollTrigger'ы / твины — в одном useLayoutEffect с cleanup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1) Заголовок из слов: слова въезжают сверху
      if (dsgn4TitleRef.current && caseDSGNFourTitle) {
        const words = dsgn4TitleRef.current.querySelectorAll('.word__inner');
        gsap.set(words, { yPercent: -120 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: dsgn4TitleRef.current,
              start: 'top 100%',
              end: 'top 30%',
              scrub: 1,
              ...ST.current,
            },
          })
          .to(words, { yPercent: 0, ease: 'none', stagger: 0.2 }, 0);
      }

      // 2) Тёмные заголовки — добавить класс при входе во вьюпорт
      gsap.utils.toArray('.case-title-dark').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          onEnter: () => el.classList.add('case-dark-title-active'),
          onEnterBack: () => el.classList.add('case-dark-title-active'),
          ...ST.current,
        });
      });

      // 3) Ревил картинок .animated-img
      gsap.utils.toArray('.animated-img').forEach((el) => {
        gsap.to(el, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.7,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 0%',
            ...ST.current,
          },
        });
      });

      // 4) Стартовый ревил вверху
      gsap.to('.case-image', {
        duration: 1.7,
        ease: 'power4.inOut',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      });

      gsap.to('.case-image>img', {
        duration: 1.7,
        delay: 0.3,
        ease: 'power4.inOut',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        scale: 1,
      });

      gsap.fromTo(
        '.case-back',
        { opacity: 0, ease: 'power4.inOut' },
        {
          opacity: 1,
          ease: 'power4.inOut',
        }
      );

      // 5) Параллакс фоны
      gsap.fromTo(
        '.case-background-main img',
        { yPercent: -15, ease: 'none' },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.case-background-main',
            scrub: true,
            ...ST.current,
          },
        }
      );
      gsap.fromTo(
        '.case-dsgn7__bg img',
        { yPercent: -15, ease: 'none' },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.case-dsgn7__bg',
            scrub: true,
            ...ST.current,
          },
        }
      );
    });

    // корректный refresh после реального лейаута
    requestAnimationFrame(() => ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
    const imgs = Array.from(document.querySelectorAll('.case img')).filter(
      (img) => !img.complete
    );
    const onImg = () => ScrollTrigger.refresh();
    imgs.forEach((img) => img.addEventListener('load', onImg, { once: true }));

    return () => {
      imgs.forEach((img) => img.removeEventListener('load', onImg));
      ctx.revert(); // убираем ВСЕ триггеры/твины, созданные внутри
    };
  }, [caseDSGNFourTitle]);

  // ===== Tooltip для MORE WORKS =====
  const tooltipRef = useRef(null);
  const tooltipTextRef = useRef(null);
  const tooltipTL = useRef(null);
  const gridRef = useRef(null);

  const moveTooltip = (e) => {
    gsap.to(tooltipRef.current, {
      x: e.clientX + 40,
      y: e.clientY,
      duration: 0.8,
      ease: 'power3.out',
    });
  };

  const swapText = (text) => {
    const box = tooltipRef.current;
    const textEl = tooltipTextRef.current;
    if (!box || !textEl) return;

    gsap.killTweensOf(box);
    gsap.set(box, { autoAlpha: 1 });

    if (textEl.textContent === text) return;

    if (tooltipTL.current) tooltipTL.current.kill();
    const tl = gsap.timeline();
    tooltipTL.current = tl;

    tl.to(textEl, { yPercent: -100, duration: 0.18, ease: 'power2.in' })
      .add(() => {
        textEl.textContent = text;
      })
      .set(textEl, { yPercent: 100 })
      .to(textEl, { yPercent: 0, duration: 0.22, ease: 'power2.out' });
  };

  const enterTooltip = (e, text) => {
    swapText(text);
    moveTooltip(e);
  };

  const leaveGrid = () => {
    const box = tooltipRef.current;
    if (!box) return;
    gsap.to(box, { autoAlpha: 0, duration: 0.2, ease: 'power2.out' });
  };

  useEffect(() => {
    // сразу и на следующий кадр — чтобы гарантированно после монтирования
    window.dispatchEvent(new Event('darkzones-ready'));
    requestAnimationFrame(() =>
      window.dispatchEvent(new Event('darkzones-ready'))
    );
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

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

  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    ScrollTrigger.create({
      trigger: '.dark-zone',
      start: 'top 5%',
      end: 'bottom center',
      ...ST.current,
      onEnter: () => btn.classList.add('case-back-white'),
      onEnterBack: () => btn.classList.add('case-back-white'),
      onLeave: () => btn.classList.remove('case-back-white'),
      onLeaveBack: () => btn.classList.remove('case-back-white'),
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8 }}
        className='case'>
        <div className='container'>
          <NavLink
            ref={btnRef}
            className='case-back'
            onClick={(e) => handleAnchor(e, 'works')}
            to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='16'
              viewBox='0 0 20 16'
              fill='none'>
              <path
                d='M18.5738 7.6158L0.784935 7.55245M7.54209 14.5716L0.573936 7.55185L7.58172 0.57166'
                stroke='#ffffff'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span>back</span>
          </NavLink>
          <div className='case-image'>
            <img
              src={mainImage}
              alt={title}
            />
          </div>

          {window.innerWidth > 1100 ? (
            <h1 className='case-title animation-title'>{title}</h1>
          ) : (
            <h1 className='case-title'>
              <span>{title}</span>
            </h1>
          )}

          <div className='case-services'>
            <ul>
              {labels.map((label, i) => (
                <li
                  className='case-meta__col'
                  key={label}>
                  <div className='case-meta__label'>
                    {label} <Arrow />
                  </div>
                  <div className='case-meta__value'>{services[i] ?? ''}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className='barcode'>
            <h2 className='barcode__title'>{barcodeTitle}</h2>
            <img
              src={barcode}
              alt=''
            />
          </div>

          <div className='case-description'>
            {sections.map((s, i) => (
              <div
                className='case-meta__col'
                key={i}>
                <div className='case-meta__label'>
                  {s.label} <Arrow />
                </div>
                <div className='case-meta__value'>
                  {(s.text || []).filter(Boolean).map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            {websiteLink && (
              <a
                href={websiteLink}
                target='_blank'
                rel='noopener noreferrer'
                className='header-contact link-line'>
                {websiteText}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='21'
                  height='21'
                  viewBox='0 0 21 21'
                  fill='none'>
                  <path
                    d='M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104'
                    stroke='rgb(239, 239, 239)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className='dark-zone'>
          <div className='case-background'>
            <div className='case-background-main'>
              <img src={caseBackgroundMain} />
            </div>
            <div className='container'>
              <div className='case-background-top case-background-block'>
                <h2 className='case-title-dark'>
                  <span>{caseBackgroundTopTitle}</span>
                </h2>
                <div className='case-background__top-image'>
                  <img
                    className='animated-img'
                    src={caseBackgroundTopImage}
                  />
                </div>
              </div>

              <div className='case-background-middle case-background-block'>
                <h2 className='case-title-dark'>
                  <span>{caseBackgroundMiddleTitle}</span>
                </h2>
                <div className='case-background__top-image-second'>
                  <img
                    className='animated-img'
                    src={caseBackgroundMiddleImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='case-dsgn3'>
            <div className='container'>
              <div className='case-dsgn3__wrapper'>
                <div>
                  <img src={caseDSGNThree} />
                </div>
                <h2 className='case-title-dark'>
                  <span>{caseDSGNThreeTitle}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className='case-dsgn4'>
            {caseDSGNFourBg ? (
              <div className='case-dsgn4__bg'>
                <img src={caseDSGNFourBg} />
              </div>
            ) : null}

            <div className='container'>
              <div className='case-dsgn4__wrapper'>
                {/* split-слова: span.word > span.word__inner */}
                <h2
                  className='breaks case-split-title'
                  ref={dsgn4TitleRef}>
                  {String(caseDSGNFourTitle || '')
                    .split('\n')
                    .flatMap((line, li, arr) => [
                      ...line
                        .trim()
                        .split(/\s+/)
                        .filter(Boolean)
                        .map((w, wi) => (
                          <span
                            className='word'
                            key={`${li}-${wi}`}>
                            <span className='word__inner'>{w}</span>
                          </span>
                        )),
                      li < arr.length - 1 ? <br key={`br-${li}`} /> : null,
                    ])}
                </h2>

                <div className='case-dsgn4__img'>
                  <img src={caseDSGNFourImg} />
                </div>
              </div>
            </div>
          </div>

          <div className='case-dsgn5'>
            <div className='container'>
              <div className='case-dsgn5__wrapper'>
                <h2 className='case-title-dark'>
                  <span>{caseDSGNFiveTitle}</span>
                </h2>
                <div className='case-dsgn5__img'>
                  <img
                    className='animated-img'
                    src={caseDSGNFiveImg}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='case-dsgn6'>
            <div className='container'>
              <div className='case-dsgn6__wrapper'>
                <h2 className='case-title-dark'>
                  <span>{caseDSGNSixTitle}</span>
                </h2>
                <div className='case-dsgn6__img'>
                  <img
                    className='animated-img'
                    src={caseDSGNSixImg}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='case-dsgn7'>
            <div className='case-dsgn7__bg'>
              <img src={caseDSGNSevenBg} />
            </div>
            <div className='container'>
              <div className='case-dsgn7__wrapper'>
                <div className='case-dsgn7__img'>
                  {caseDSGNSevenVideo ? (
                    <video
                      className='case-dsgn7__media'
                      src={caseDSGNSevenVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='metadata'
                    />
                  ) : (
                    <img
                      className='case-dsgn7__media'
                      src={caseDSGNSevenImg}
                    />
                  )}
                </div>
                <h2 className='case-title-dark'>
                  <span>{caseDSGNSevenTitle}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {moreWorks.length > 0 && (
          <div className='case-more-works'>
            <div className='container'>
              <h2 className='case-more-works__title animation-title'>
                MORE WORKS
              </h2>

              <ul
                className='case-more-works__grid'
                ref={gridRef}
                onMouseMove={moveTooltip}
                onMouseLeave={leaveGrid}>
                {moreWorks.slice(0, 5).map(({ to, img, alt }, i) => (
                  <li
                    className='case-more-works__item'
                    key={i}>
                    <NavLink
                      to={to}
                      className='case-more-works__link'
                      onMouseEnter={(e) => enterTooltip(e, alt || '')}>
                      <img
                        src={img}
                        alt={alt || ''}
                        loading='lazy'
                      />
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Курсорная плашка */}
              <div
                className='case-tooltip'
                ref={tooltipRef}>
                <span
                  className='case-tooltip__text'
                  ref={tooltipTextRef}></span>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        className='slide-page-transition'
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 1.3, ease: [0.79, 0.08, 0.35, 0.96] }}
      />
    </>
  );
};

export default Template;
