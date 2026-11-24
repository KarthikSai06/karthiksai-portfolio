import Template from './Template';

export default function AlexMonroe() {
  const outsideProps = {
    mainImage: '../img/projects/outside/outside-main.jpg',
    title: 'outside',
    services: [
      'website',
      'web design, UX/UI design',
      'tourism industry',
      '2025',
    ],
    barcodeTitle: '( usa )',
    barcode: '../img/barcode.png',
    sections: [
      {
        label: 'OVERVIEW',
        text: [
          'The goal was to create a website design that stands out from competitors and conveys emotions of will, freedom, and a strong connection with nature and the company.',
        ],
      },
      {
        label: 'SOLUTION',
        text: [
          'The site design for “Outside” showcases simplicity, functionality, and aesthetic appeal. The site creates a clear, engaging experience for users looking for active adventures and trekking tours.',
          'The resulting design stands out and is captivating. Space in the design makes the site easier to read and enjoyable to use.',
        ],
      },
    ],
    caseBackgroundMain: '../img/projects/outside/outside-bg.png',
    caseBackgroundTopTitle: 'main page',
    caseBackgroundTopImage: '../img/projects/outside/outside-main.jpg',

    caseBackgroundMiddleTitle: 'about company',
    caseBackgroundMiddleImage: '../img/projects/outside/about.jpg',

    caseDSGNThree: '../img/projects/outside/tour.jpg',
    caseDSGNThreeTitle: 'the best tours',

    caseDSGNFourTitle: 'active travel',
    caseDSGNFourImg: '../img/projects/outside/active-travel.jpg',
    caseDSGNFourBg: null,

    caseDSGNFiveTitle: '',
    caseDSGNFiveImg: '../img/projects/outside/tr.jpg',

    caseDSGNSixTitle: 'adaptive design',
    caseDSGNSixImg: '../img/projects/outside/mobile.png',

    caseDSGNSevenTitle: 'company philosophy',
    caseDSGNSevenImg: '../img/projects/outside/ph.jpg',

    caseDSGNSevenBg: '../img/projects/outside/ph-bg.png',

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
        to: '/alex-monroe',
        img: '../img/projects/art2.jpg',
        alt: 'Alex Monroe',
      },
    ],
  };

  return (
    <main className='outside'>
      <Template {...outsideProps} />
    </main>
  );
}
