import Template from './Template';

export default function Fashion() {
  const fashionProps = {
    mainImage: '../img/projects/fashion/fashion-main.jpg',
    title: 'Fashion week',
    services: ['CREATIVE BANNERS', 'CREATIVE DESIGN', 'FASHION', '2025'],
    barcodeTitle: '( around the world )',
    barcode: '../img/barcode.png',
    sections: [
      {
        label: 'OVERVIEW',
        text: [
          'This series of banners was inspired by my travels. Being surrounded by beauty everywhere made me want to reflect it in design.',
          'That’s how the idea of fashion traveling through different countries came to life.',
        ],
      },
      {
        label: 'SOLUTION',
        text: [
          'Every banner has its own character — with colors, fonts, and visuals that reflect the culture of each country hosting Fashion Week. They carry the emotions of that place and simply invite you to join the celebration of fashion together.',
        ],
      },
    ],
    caseBackgroundMain: '../img/projects/fashion/fashion-bg.png',
    caseBackgroundTopTitle: 'london fashion week',
    caseBackgroundTopImage: '../img/projects/fashion/fashion-main.jpg',

    caseBackgroundMiddleTitle: 'madrid fashion week',
    caseBackgroundMiddleImage:
      '../img/projects/fashion/caseBackgroundMiddleImage.jpg',

    caseDSGNThree: '../img/projects/fashion/fashion-tokyo.jpg',
    caseDSGNThreeTitle: 'tokyo fashion week',

    caseDSGNFourTitle: 'Kyiv fashion week',
    caseDSGNFourImg: '../img/projects/fashion/kyiv-banner.jpg',
    caseDSGNFourBg: '../img/projects/fashion/kyiv-bg.png',

    caseDSGNFiveTitle: 'milan fashion week',
    caseDSGNFiveImg: '../img/projects/fashion/milan-fashion.jpg',

    caseDSGNSixTitle: 'paris fashion week',
    caseDSGNSixImg: '../img/projects/fashion/paris-fashion.jpg',

    caseDSGNSevenTitle: 'new york fashion week',
    caseDSGNSevenImg: '../img/projects/fashion/new-york-fashion.jpg',

    caseDSGNSevenBg: '../img/projects/fashion/dsgn-seven-bg.png',

    moreWorks: [
      {
        to: '/max-milkin',
        img: '../img/projects/art6.jpg',
        alt: 'Max Milkin',
      },
      {
        to: '/press-play',
        img: '../img/projects/art1.jpg',
        alt: 'Press Play',
      },
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
    <main className='fashion'>
      <Template {...fashionProps} />
    </main>
  );
}
