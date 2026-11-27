import { useCopy } from '../Animation/CopyContext';

import { NavLink } from 'react-router-dom';





const Hero = () => {

  const { copy } = useCopy();



  const handleClick = (e) => {

    // e.preventDefault();

    copy('kammala2006@gmail.com', e);

  };



  return (

    <section className='hero'>

      <div className='container'>

        <div className='hero__wrapper'>

          <h1 className='hero-title'>

            <div className='hero-title__number'>

              <div className='hero-title__number-wrap hero-title__number-first'>

                <span>0</span>

                <span>1</span>

                <span>2</span>

                <span>3</span>

                <span>4</span>

                <span>5</span>

                <span>6</span>

                <span>7</span>

                <span>8</span>

                <span>9</span>

              </div>

              <span className='hero-title__number-second'>,</span>

              <div className='hero-title__number-wrap hero-title__number-third'>

                <span>0</span>

                <span>1</span>

                <span>2</span>

                <span>3</span>

                <span>4</span>

                <span>5</span>

                <span>6</span>

                <span>7</span>

                <span>8</span>

                <span>9</span>

              </div>

              <div className='hero-title__number-wrap hero-title__number-four'>

                <span>0</span>

                <span>1</span>

                <span>2</span>

                <span>3</span>

                <span>4</span>

                <span>5</span>

                <span>6</span>

                <span>7</span>

                <span>8</span>

                <span>9</span>

              </div>

              <div className='hero-title__number-wrap hero-title__number-five'>

                <span>0</span>

                <span>1</span>

                <span>2</span>

                <span>3</span>

                <span>4</span>

                <span>5</span>

                <span>6</span>

                <span>7</span>

                <span>8</span>

                <span>9</span>

              </div>

            </div>

            <div className='hero-word'>

              {'software'.split('').map((char, index) => (

                <span

                  key={`c-${index}`}

                  className='hero-letter'>

                  {char}

                </span>

              ))}

            </div>

            <div className='hero-word'>

              {'engineer'.split('').map((char, index) => (

                <span

                  key={`d-${index}`}

                  className='hero-letter'>

                  {char}

                </span>

              ))}

            </div>

          </h1>

          <div className='hero-designer'>

            <div className='hero-designer__descr'>

              <p>

                <span>/ AI & AGENTIC SYSTEMS</span>

              </p>

              <p>

                <span>/ LLM FINE-TUNING & QLORA</span>

              </p>

              <p>

                <span>/ FULL-STACK SYSTEMS</span>

              </p>

            </div>

            <div className='hero-designer__img'>

              <img

                src='/img/karthik.jpg'

                alt=''

              />

            </div>

          </div>

          <div className='hero-based'>

            <span>based</span>

            <span>in</span>

            <span>Bengaluru, India</span>

          </div>

          <div className='hero-signature-wrap'><img className='hero-signature-img' src='/img/signature.png' alt='Karthik Sai’s signature'/></div>
          <div className='hero-description'><p>I’m Kammala Karthik Sai, a software developer building intelligent automation, Android tools and real-time data applications.</p></div>

          <NavLink

            to='/projects/ai-mobile-agent'

            className='hero-recent'>

            <span>

              recent work

              <svg

                xmlns='http://www.w3.org/2000/svg'

                width='21'

                height='21'

                viewBox='0 0 21 21'

                fill='none'>

                <path

                  d='M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104'

                  strokeWidth='2'

                  strokeLinecap='round'

                  strokeLinejoin='round'

                />

              </svg>

            </span>

            <span>AI Mobile Agent</span>

          </NavLink>

          <a

            href='mailto:kammala2006@gmail.com'

            className='hero-collab'

            onClick={handleClick}>

            <span>

              AVAILABLE FOR HIRE & COLLABORATION

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

        </div>

      </div>

    </section>

  );

};



export default Hero;

