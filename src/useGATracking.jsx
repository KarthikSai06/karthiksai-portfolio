import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-D0822F4WJ2'; // твой ID

let initialized = false;

export default function useGATracking() {
  const location = useLocation();

  // 1) Инициализация GA один раз (скрипт + config)
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    // Подключаем gtag.js, если ещё не подключен
    if (
      !document.querySelector(
        `script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`
      )
    ) {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
    }

    // Стаб gtag до загрузки внешнего скрипта
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    window.gtag('js', new Date());
    // ВАЖНО: отключаем автособытие, чтобы не было дубля на первом экране
    window.gtag('config', GA_ID, { send_page_view: false });
  }, []);

  // 2) Шлём page_view на каждую смену роутов (включая первый рендер)
  useEffect(() => {
    if (!window.gtag) return;
    const path = location.pathname + location.search + location.hash;

    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
}
