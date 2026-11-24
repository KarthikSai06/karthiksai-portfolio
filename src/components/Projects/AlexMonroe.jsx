import Template from './Template';

export default function AlexMonroe() {
  const alexMonroeProps = {
    mainImage: '../img/projects/alexMonroe/alex-main.jpg',
    title: 'alex monroe',
    services: [
      'website',
      'web design, UX/UI design',
      'Jewellery industry',
      '2025',
    ],
    barcodeTitle: '( great britain )',
    barcode: '../img/barcode.png',
    sections: [
      {
        label: 'OVERVIEW',
        text: [
          'The goal was to create a design concept that reflects the brand’s philosophy and style, draws more attention to the jewelry, and makes browsing collections and choosing pieces feel original and inspiring.',
        ],
      },
      {
        label: 'SOLUTION',
        text: [
          'The design reflects the brand’s values through visual simplicity and natural aesthetics.',
          ' Easy navigation makes it simple for users to explore products, stay informed, and feel inspired to take action.',
          ' At the same time, the design highlights the beauty of the products while staying minimalistic, yet emotionally refined.',
        ],
      },
    ],
    caseBackgroundMain: '../img/projects/alexMonroe/alex-bg.png',
    caseBackgroundTopTitle: 'main page',
    caseBackgroundTopImage: '../img/projects/alexMonroe/alex-desktop.jpg',

    caseBackgroundMiddleTitle: 'new items',
    caseBackgroundMiddleImage: '../img/projects/alexMonroe/alex-desktop2.jpg',

    caseDSGNThree: '../img/projects/alexMonroe/projects.jpg',
    caseDSGNThreeTitle: '',

    caseDSGNFourTitle: 'Handmade in England',
    caseDSGNFourImg: '../img/projects/alexMonroe/collections.jpg',
    caseDSGNFourBg: null,

    caseDSGNFiveTitle: 'product review',
    caseDSGNFiveImg: '../img/projects/alexMonroe/product.jpg',

    caseDSGNSixTitle: 'adaptive design',
    caseDSGNSixImg: '../img/projects/alexMonroe/mobile.png',

    caseDSGNSevenVideo: '../img/projects/alexMonroe/alex-video.mp4',
    caseDSGNSevenTitle: 'page video',
    caseDSGNSevenImg: '../img/projects/alexMonroe/alex-main.jpg',

    caseDSGNSevenBg: '../img/projects/alexMonroe/video-bg.png',

    moreWorks: [
      {
        to: '/max-milkin',
        img: '../img/projects/art6.jpg',
        alt: 'Max Milkin',
      },
      {
        to: '/fashion-week',
        img: '../img/projects/art4.jpg',
        alt: 'Fashion Week',
      },
      { to: '/press-play', img: '../img/projects/art1.jpg', alt: 'Press Play' },
      {
        to: '/raine',
        img: '../img/projects/art5.jpg',
        alt: 'Raine',
      },
      {
        to: '/outside',
        img: '../img/projects/art3.jpg',
        alt: 'Outside',
      },
    ],
  };

  return (
    <main className='alex'>
      <Template {...alexMonroeProps} />
    </main>
  );
}
