import Template from './Template';

export default function MaxMilkin() {
  const pressPlayProps = {
    mainImage: '../img/projects/max/main.jpg',
    title: 'max milkin portfolio ',
    services: ['website', 'web design, UX/UI design', 'portfolio', '2025'],
    barcodeTitle: '( Germany )',
    barcode: '../img/barcode.png',
    sections: [
      {
        label: 'OVERVIEW',
        text: [
          'The goal was to design a website that not only showcases his technical expertise, but also communicates personality, confidence, and high-level craftsmanship through visual storytelling.',
        ],
      },
      {
        label: 'SOLUTION',
        text: [
          'To elevate Max Milkin’s digital identity, we built a portfolio that merges high-end design with developer-level performance. The solution focused on three pillars: expertise, depth and experience.',
        ],
      },
    ],
    caseBackgroundMain: '../img/projects/max/max-bg.jpg',
    caseBackgroundTopTitle: '',
    caseBackgroundTopImage: '../img/projects/max/1.jpg',

    caseBackgroundMiddleTitle: '',
    caseBackgroundMiddleImage: '../img/projects/max/2.jpg',

    caseDSGNThree: '../img/projects/max/3.jpg',
    caseDSGNThreeTitle: '',

    caseDSGNFourTitle: 'max milkin',
    caseDSGNFourImg: '../img/projects/max/4.jpg',
    caseDSGNFourBg: null,

    caseDSGNFiveTitle: 'about page',
    caseDSGNFiveImg: '../img/projects/max/5.jpg',

    caseDSGNSixTitle: 'adaptive design',
    caseDSGNSixImg: '../img/projects/max/mob.jpg',

    caseDSGNSevenTitle: 'Project page',
    caseDSGNSevenImg: '../img/projects/max/6.jpg',

    caseDSGNSevenBg: '../img/projects/max/bottom-b.png',

    websiteLink: 'https://maxmilkin.com/',
    websiteText: 'visit website',

    moreWorks: [
      {
        to: '/fashion-week',
        img: '../img/projects/art4.jpg',
        alt: 'Fashion Week',
      },
      { to: '/press-play', img: '../img/projects/art1.jpg', alt: 'Press Play' },
      { to: '/raine', img: '../img/projects/art5.jpg', alt: 'Raine' },
      {
        to: '/alex-monroe',
        img: '../img/projects/art2.jpg',
        alt: 'Alex Monroe',
      },
      {
        to: '/outside',
        img: '../img/projects/art3.jpg',
        alt: 'Outside',
      },
    ],
  };

  return (
    <main className='max-milkin'>
      <Template {...pressPlayProps} />
    </main>
  );
}
