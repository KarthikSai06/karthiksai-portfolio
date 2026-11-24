import { useCopy } from '../Animation/CopyContext';

import AnimatedLink from '../Animation/AnimatedLink';

import { motion } from 'framer-motion';

import './style.scss';



const Secret = () => {

  const { copy } = useCopy();



  const handleClick = (e) => {

    e.preventDefault();

    copy('kammala2006@gmail.com', e);

  };



  return (

    <>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        transition={{ delay: 0.8 }}>

        <section className='secret'>

          <div className='container'>

            <div className='secret__wrapper'>

              <p>It seems like you are very curious about design :)</p>

              <img

                src='./img/secret.jpg'

                alt=''

              />

              <p>

                Clients like you make the work exciting — let’s bring your

                project to the next level with a 15% discount!

              </p>

              <p>Specify the secret phrase "I found" in the letter.</p>

              <a

                href='mailto:kammala2006@gmail.com'

                className='hero-collab'

                onClick={handleClick}>

                <span>

                  my contact

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

                </span>

                <span className='link-line'>KAMMALA2006@GMAIL.COM</span>

              </a>

              <AnimatedLink

                text='return home'

                to='/'

              />

            </div>

          </div>

        </section>

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



export default Secret;

