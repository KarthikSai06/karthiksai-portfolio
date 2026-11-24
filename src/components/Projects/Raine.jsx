import Template from './Template';

export default function Raine() {
  const raineProps = {
    mainImage: '../img/projects/raine/raine-main.jpg',
    title: 'Raine architecture ',
    services: [
      'website',
      'web design, UX/UI design',
      'architecturel bureau',
      '2025',
    ],
    barcodeTitle: '( usa )',
    barcode: '../img/barcode.png',
    sections: [
      {
        label: 'OVERVIEW',
        text: [
          'My goal was to create a website with a unique architectural vibe that reflects the brand’s style and professionalism.',
          'I focused on strong visuals, lots of clean white space, and modern, elegant typography to keep the design fresh and refined.',
        ],
      },
      {
        label: 'SOLUTION',
        text: [
          'The design concept was inspired by the world of architecture — from load-bearing wall symbols to thin, precise lines that feel like pencil-drawn blueprints. ',
          'This idea brings in the spirit of precision, minimalism, and attention to detail that defines the work of architects.',
        ],
      },
    ],
    caseBackgroundMain: '../img/projects/raine/raine-bg.png',
    caseBackgroundTopTitle: 'main page',
    caseBackgroundTopImage: '../img/projects/raine/raine-main.jpg',

    caseBackgroundMiddleTitle: 'agency experience',
    caseBackgroundMiddleImage:
      '../img/projects/raine/caseBackgroundMiddleImage.jpg',

    caseDSGNThree: '../img/projects/raine/team.jpg',
    caseDSGNThreeTitle: 'completed projects',

    caseDSGNFourTitle: 'Edgar Villanueva',
    caseDSGNFourImg: '../img/projects/raine/director.jpg',
    caseDSGNFourBg: null,

    caseDSGNFiveTitle: 'adaptive design',
    caseDSGNFiveImg: '../img/projects/raine/mobile.png',

    caseDSGNSixTitle: 'contact form',
    caseDSGNSixImg: '../img/projects/raine/form.jpg',

    caseDSGNSevenVideo: '../img/projects/raine/website.mp4',
    caseDSGNSevenTitle: 'full page video',
    caseDSGNSevenImg: '../img/projects/raine/raine-main.jpg',

    caseDSGNSevenBg: '../img/projects/raine/dsgn-seven-bg.png',

    websiteLink: 'https://rainearchitects.com/',
    websiteText: 'visit website',

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
    <main className='raine'>
      <Template {...raineProps} />
    </main>
  );
}
