import './App.css';
import Links from './Links';
import AnimatedBackground from './AnimatedBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  useGSAP(() => {
    gsap.from("#profilePicture", {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });

    gsap.from("#titles", {
      x: -100,
      opacity: 0,
      delay: 0.5,
    });

    gsap.from("#links", {
      x: -100,
      opacity: 0,
      delay: 1,
    });

    gsap.from("#asterisk", {
      x:-100,
      opacity: 0,
      delay: 1.3,
    });
  })

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <AnimatedBackground />
      <div className='grid 2xl:grid-cols-2 grid-cols-1 place-items-center 2xl:mx-70 mx-10 relative z-10'>
        {/* Col 1 */}
        <div>
          <img id='profilePicture' src="/images/pic.jpg" alt="Profile Picture" className='2xl:w-[400px] w-[200px] 2xl:mt-0 mt-20 rounded-full object-contain shadow-[0_0_40px_rgba(255,106,0,0.6)]' />
        </div>
        {/* Col 2 */}
        <div>
          {/* Typography */}
          <div id='titles' className='2xl:leading-25 2xl:mt-0 mt-6'>
            <h2 className='2xl:text-[35px] text-[25px] font-bold'>Hello !</h2>
            <div className='flex'>
              <h1 className='2xl:text-[128px] text-[50px] font-bold tracking-tighter'>I'm Aldin</h1>
              <img src="/images/asterisk.png" alt="asterisk" className='2xl:w-[60px] 2xl:h-[60px] w-[20px] h-[20px]' />
            </div>
            <p className='2xl:text-xl 2xl:pt-10 tracking-tight'>Wassup ! I'm a web enthusiast based on Indonesia. <br />
              Everyday (believe me) i perfecting my craft on making websites to give you value and solution : &#10223;.
            </p>
          </div>
          {/* Links */}
          <div id='links' className='pt-3'>
            <Links />
          </div>
          <div id='asterisk' className='2xl:mt-0 mt-3 flex items-center'>
            <img src="/images/asterisk.png" alt="asterisk" className='2xl:w-[20px] 2xl:h-[20px] w-[20px] h-[20px]' />
            <p className='2xl:text-xl 2xl:pt-10 tracking-tight 2xl:mb-6 mt-3'>call me al, din, riel, ciel (whatever).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
