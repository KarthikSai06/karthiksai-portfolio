// Awards.jsx
import "./style.scss";
import useTitleAnimation from "../Animation/useTitleAnimation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Awards = () => {
  useTitleAnimation();

  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const root = scopeRef.current;
      if (!root) return;

      const blocks = gsap.utils.toArray(root.querySelectorAll(".awards-block"));
      const cleanups = [];

      const HIDE_TOP = "polygon(0 0, 100% 0, 100% 0, 0 0)";
      const SHOW = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
      const HIDE_BOTTOM = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";

      const mq = window.matchMedia("(max-width: 620px)");

      const preview = root.querySelector(".awards-preview");
      const previewWrap = preview?.querySelector(".awards-preview__wrap");
      if (!preview || !previewWrap) return;

      // ✅ переносим каждый .awards-block__img-wrap в preview
      const wrapsByIndex = [];

      blocks.forEach((block, i) => {
        const img = block.querySelector(".awards-block__img");
        const wrap = block.querySelector(".awards-block__img-wrap");
        if (!wrap) return;

        wrapsByIndex[i] = wrap;

        // desktop/tablet: можем держать все внутри previewWrap слоями
        previewWrap.appendChild(wrap);

        if (img) img.setAttribute("data-moved", "true");
      });

      // -----------------------------
      // ✅ ONLY CLIP-PATH ANIMATIONS
      // -----------------------------

      const getAnimConfig = () => {
        const isMobile = mq.matches;

        return {
          openDur: isMobile ? 1.25 : 1.2,
          closeDur: isMobile ? 1.05 : 1.0,
          imgScaleInDur: isMobile ? 0.9 : 0.8,
          imgScaleOutDur: isMobile ? 0.85 : 0.8,
          stagger: isMobile ? 0.06 : 0.05,

          // ✅ небольшой сдвиг, чтобы не было каши
          openDelayMobile: isMobile ? 0.8 : 0.0,

          hoverDelay: 500,
        };
      };

      const prepWrapHidden = (wrap) => {
        if (!wrap) return;
        const pics = wrap.querySelectorAll(".awards-block__img-picture");
        const imgs = wrap.querySelectorAll(".awards-block__img-picture img");
        gsap.set(pics, { clipPath: HIDE_TOP });
        gsap.set(imgs, { scale: 1.3 });
      };

      const tlClose = (wrap) => {
        if (!wrap) return gsap.timeline();

        const { closeDur, imgScaleOutDur, stagger } = getAnimConfig();
        const pics = wrap.querySelectorAll(".awards-block__img-picture");
        const imgs = wrap.querySelectorAll(".awards-block__img-picture img");

        gsap.killTweensOf([pics, imgs]);

        const tl = gsap.timeline();
        tl.to(
          pics,
          {
            clipPath: HIDE_BOTTOM,
            duration: closeDur,
            ease: "power3.inOut",
            stagger,
            overwrite: "auto",
          },
          0,
        );

        tl.to(
          imgs,
          {
            scale: 1.3,
            duration: imgScaleOutDur,
            ease: "power3.inOut",
            stagger,
            overwrite: "auto",
          },
          0,
        );

        // ✅ после закрытия возвращаем в HIDE_TOP
        tl.add(() => {
          gsap.set(pics, { clipPath: HIDE_TOP });
          gsap.set(imgs, { scale: 1.3 });
        });

        return tl;
      };

      const tlOpen = (wrap, { immediate = false } = {}) => {
        if (!wrap) return gsap.timeline();

        const { openDur, imgScaleInDur, stagger } = getAnimConfig();
        const pics = wrap.querySelectorAll(".awards-block__img-picture");
        const imgs = wrap.querySelectorAll(".awards-block__img-picture img");

        gsap.killTweensOf([pics, imgs]);

        if (immediate) {
          gsap.set(pics, { clipPath: SHOW });
          gsap.set(imgs, { scale: 1 });
          return gsap.timeline();
        }

        gsap.set(pics, { clipPath: HIDE_TOP });
        gsap.set(imgs, { scale: 1.3 });

        const tl = gsap.timeline();
        tl.to(
          pics,
          {
            clipPath: SHOW,
            duration: openDur,
            ease: "power3.out",
            stagger,
            overwrite: "auto",
          },
          0,
        );

        tl.to(
          imgs,
          {
            scale: 1,
            duration: imgScaleInDur,
            ease: "power3.out",
            stagger,
            overwrite: "auto",
          },
          0,
        );

        return tl;
      };

      // ------------------------------------------------
      // ✅ MOBILE DOM POOL: чтобы wraps не "стеком"
      // ------------------------------------------------
      const pool = document.createElement("div");
      pool.style.display = "none";
      preview.appendChild(pool);

      const syncMobileDom = (activeWrap) => {
        if (!mq.matches) return;

        wrapsByIndex.forEach((w) => {
          if (!w) return;
          if (w.parentNode !== pool) pool.appendChild(w);
        });

        if (activeWrap) previewWrap.appendChild(activeWrap);
      };

      // ✅ scroll включаем только если контент реально шире
      const updatePreviewScroll = () => {
        if (!mq.matches) {
          preview.classList.remove("is-scrollable");
          preview.style.overflowX = "";
          preview.scrollLeft = 0;
          return;
        }

        const activeWrap =
          activeIndex !== null ? wrapsByIndex[activeIndex] : wrapsByIndex[0];

        if (!activeWrap) {
          preview.classList.remove("is-scrollable");
          preview.style.overflowX = "hidden";
          preview.scrollLeft = 0;
          return;
        }

        // даём DOM примениться
        requestAnimationFrame(() => {
          const needScroll = preview.scrollWidth > preview.clientWidth + 1;
          preview.classList.toggle("is-scrollable", needScroll);
          preview.style.overflowX = needScroll ? "auto" : "hidden";
          if (!needScroll) preview.scrollLeft = 0;
        });
      };

      // init: все скрыты
      wrapsByIndex.forEach(prepWrapHidden);

      let activeIndex = null;
      let mobileSwitchTL = null;

      const setActive = (index, { immediate = false } = {}) => {
        const nextWrap = wrapsByIndex[index];
        if (!nextWrap) return;

        // underline on mobile
        if (mq.matches) {
          blocks.forEach((b, i) =>
            b.classList.toggle("is-active", i === index),
          );
        }

        const isMobile = mq.matches;

        // DESKTOP
        if (!isMobile) {
          if (activeIndex !== null && activeIndex !== index) {
            tlClose(wrapsByIndex[activeIndex]);
          }
          activeIndex = index;
          tlOpen(nextWrap, { immediate });
          updatePreviewScroll();
          return;
        }

        // MOBILE
        if (mobileSwitchTL) {
          mobileSwitchTL.kill();
          mobileSwitchTL = null;
        }

        const prevWrap =
          activeIndex !== null ? wrapsByIndex[activeIndex] : null;
        activeIndex = index;

        const { openDelayMobile } = getAnimConfig();

        // ✅ в DOM держим только один wrap
        syncMobileDom(nextWrap);

        // ✅ пересчёт overflow
        updatePreviewScroll();

        mobileSwitchTL = gsap.timeline();

        if (prevWrap && prevWrap !== nextWrap) {
          // чтобы корректно закрыть — на время добавим prevWrap обратно в previewWrap
          previewWrap.appendChild(prevWrap);

          mobileSwitchTL.add(tlClose(prevWrap), 0);

          // после close — возвращаем prevWrap в pool (иначе будет стек)
          mobileSwitchTL.add(() => {
            if (prevWrap.parentNode !== pool) pool.appendChild(prevWrap);
          }, ">-0.001");
        }

        mobileSwitchTL.add(tlOpen(nextWrap, { immediate }), openDelayMobile);

        mobileSwitchTL.eventCallback("onComplete", () => {
          mobileSwitchTL = null;
          updatePreviewScroll();
        });
      };

      // ✅ initial state
      if (mq.matches && wrapsByIndex[0]) {
        syncMobileDom(wrapsByIndex[0]);
        setActive(0, { immediate: true });
      } else {
        // десктоп: просто не даём горизонтальному скроллу жить
        updatePreviewScroll();
      }

      // resize watcher
      const onResize = () => {
        // при переходе десктоп <-> мобайл нужно пересобрать DOM
        if (mq.matches) {
          const current =
            activeIndex !== null ? wrapsByIndex[activeIndex] : wrapsByIndex[0];
          syncMobileDom(current);
        } else {
          // десктоп: можно вернуть все wraps в previewWrap слоями
          wrapsByIndex.forEach((w) => {
            if (!w) return;
            if (w.parentNode !== previewWrap) previewWrap.appendChild(w);
          });
        }
        updatePreviewScroll();
      };

      window.addEventListener("resize", onResize);
      cleanups.push(() => window.removeEventListener("resize", onResize));

      // events
      blocks.forEach((block, index) => {
        let enterTimer = null;

        const onEnter = () => {
          if (mq.matches) return;
          if (enterTimer) clearTimeout(enterTimer);

          enterTimer = window.setTimeout(() => {
            setActive(index, { immediate: false });
          }, getAnimConfig().hoverDelay);

          block.__enterTimer = enterTimer;
        };

        const onLeave = () => {
          if (mq.matches) return;
          if (enterTimer) clearTimeout(enterTimer);
          enterTimer = null;
          block.__enterTimer = null;

          if (activeIndex !== null) {
            tlClose(wrapsByIndex[activeIndex]);
            activeIndex = null;
            updatePreviewScroll();
          }
        };

        const onClick = () => {
          if (!mq.matches) return;

          setActive(index, { immediate: false });

          // если скролл нужен — уводим в начало
          preview.scrollTo({ left: 0, behavior: "smooth" });

          block.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        };

        block.addEventListener("mouseenter", onEnter);
        block.addEventListener("mouseleave", onLeave);
        block.addEventListener("click", onClick);

        cleanups.push(() => {
          if (enterTimer) clearTimeout(enterTimer);
          block.__enterTimer = null;
          block.removeEventListener("mouseenter", onEnter);
          block.removeEventListener("mouseleave", onLeave);
          block.removeEventListener("click", onClick);
        });
      });

      cleanups.push(() => {
        if (pool && pool.parentNode) pool.parentNode.removeChild(pool);
      });

      return () => cleanups.forEach((fn) => fn());
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="awards">
      <div className="container">
        <div className="awards__title">
          <h2 className="animation-title">certifications & achievements</h2>
          <div className="awards__title-span">
            <span>cert/05</span>
          </div>
        </div>

        <div className="awards__text">
          <p>
            My expertise is confirmed <br />
            by{" "}
            <span>
              many international <br /> recognitions
            </span>
          </p>
          <p>
            <span>Top 40 designers</span> <br />
            (the Independent of the Year) <br />
            on Awwwards’2025
          </p>
        </div>

        <div ref={scopeRef} className="awards-wrap">
          <div className="awards-preview" aria-hidden="true">
            <div className="awards-preview__wrap" />
          </div>

          <div className="awards__blocks">
            {/* 1 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/1.svg" alt="" />
                <h3>
                  awwwards
                  <span>( 7 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards1.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards2.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards3.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards4.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards5.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards6.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/awards7.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/2.svg" alt="" />
                <h3>
                  MUZLI
                  <span>( 3 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/muzli1.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/muzli2.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/muzli3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/3.svg" alt="" />
                <h3>
                  CSS Design award
                  <span>( 4 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/cs1.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/cs2.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/cs3.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/cs4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/4.svg" alt="" />
                <h3>
                  GSAP
                  <span>( 2 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/gsap1.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/gsap2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/5.svg" alt="" />
                <h3>
                  FWA
                  <span>( 1 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/fwa.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/6.svg" alt="" />
                <h3>
                  WD AWARDS
                  <span>( 2 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/wd1.jpg" alt="" />
                  </div>
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/wd2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="awards-block link-line">
              <div className="awards-block__title">
                <img src="./img/awards/awards-icon/7.svg" alt="" />
                <h3>
                  behance
                  <span>( 1 )</span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="awards-block__img">
                <div className="awards-block__img-wrap">
                  <div className="awards-block__img-picture">
                    <img src="./img/awards/behance.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="awards-article">
          My article on{" "}
          <a
            href="https://tympanus.net/codrops/2025/12/02/two-portfolios-one-process-where-design-motion-and-code-come-together/"
            target="_blank"
            className="link-line"
            rel="noreferrer"
          >
            CODROPS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Awards;
