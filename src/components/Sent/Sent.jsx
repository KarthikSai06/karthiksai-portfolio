import AnimatedLink from '../Animation/AnimatedLink';
import { motion } from 'framer-motion';
import './style.scss';

const Sent = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8 }}>
        <section className='sent'>
          <div className='container'>
            <div className='sent__wrapper'>
              <div className='sent__big'>
                <h2 className='sent__big_title'>big</h2>
                <div className='sent__big_wrap'>
                  <h2>thanks</h2>
                  <p>for trusting me with your project</p>
                </div>
              </div>
              <p>
                Every brand is a little universe — can’t wait to design yours!{' '}
              </p>
              <p>I’ll ping you shortly with the next steps.</p>

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

export default Sent;
