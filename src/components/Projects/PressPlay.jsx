import Template from './Template';

export default function Fashion() {
  const pressPlayProps = {
    mainImage: '../img/projects/pressPlay/press-main.jpg',
    title: 'press play portfolio ',
    services: ['company portfolio', 'creative design', 'production', '2025'],
    barcodeTitle: '( United Arab Emirates )',
    barcode: '../img/barcode.png',
    sections: [
      {
        label: 'OVERVIEW',
        text: [
          'This project was created for a production company in dubai.',
          'The main goal was to design a fresh and clear portfolio for the brand — one that feels aesthetic, minimalist, and modern.',
        ],
      },
      {
        label: 'SOLUTION',
        text: [
          'I focused on branding, presentation formats, and visual storytelling to help Press Play stand out in the UAE market.',
          'The portfolio brings together visuals and marketing materials in a balanced way, while thoughtful design, typography, and color choices reflect the values and uniqueness of Press Play Art Productions.',
        ],
      },
    ],
    caseBackgroundMain: '../img/projects/pressPlay/press-bg.png',
    caseBackgroundTopTitle: 'title page',
    caseBackgroundTopImage: '../img/projects/pressPlay/press-main.jpg',

    caseBackgroundMiddleTitle: 'who are we',
    caseBackgroundMiddleImage:
      '../img/projects/pressPlay/caseBackgroundMiddleImage.jpg',

    caseDSGNThree: '../img/projects/pressPlay/team.jpg',
    caseDSGNThreeTitle: 'the team',

    caseDSGNFourTitle: 'aisha al zaabi',
    caseDSGNFourImg: '../img/projects/pressPlay/director.jpg',
    caseDSGNFourBg: null,

    caseDSGNFiveTitle: 'projects',
    caseDSGNFiveImg: '../img/projects/pressPlay/projects.jpg',

    caseDSGNSixTitle: 'our clients',
    caseDSGNSixImg: '../img/projects/pressPlay/clients.jpg',

    caseDSGNSevenTitle: 'new york fashion week',
    caseDSGNSevenImg: '../img/projects/pressPlay/contact.jpg',

    caseDSGNSevenBg: '../img/projects/fashion/dsgn-seven-bg.png',

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
    <main className='press-play'>
      <Template {...pressPlayProps} />
    </main>
  );
}
