import './App.css';
import Links from './Links';

function App() {

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='grid grid-cols-2 place-items-center mx-70'>
        {/* Col 1 */}
        <div>
          <img src="/images/pic.jpg" alt="Profile Picture" className='w-[400px] rounded-full object-contain' />
        </div>
        {/* Col 2 */}
        <div>
          {/* Typography */}
          <div className='leading-25'>
            <h2 className='text-[35px] font-bold'>Hello !</h2>
            <h1 className='text-[128px] font-bold tracking-tighter'>I'm Aldin</h1>
            <p className='text-xl pt-10 tracking-tight'>Wassup ! I’m a web ethusiast based on Indonesia. <br />
              Everyday i perfecting my craft on making websites to give you value and solution : &#10223;.
            </p>
          </div>
          {/* Links */}
          <div>
            <Links/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
