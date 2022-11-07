import React, {useState, useLayoutEffect, useEffect} from 'react';
import {DATA, NEXT_DATA} from './mockData';
import Hamburger from './img/hamburger.png';
import Close from './img/close.png';

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


const Container = ({children}) => {
  return(
    <div>
      {children}
    </div>
  );
}

const BrandName = () => {
  return(
    <div>
      <p className='font-extrabold text-[4vw] lg:text-[2vw] uppercase leading-[3.5vw] lg:leading-[2vw]'>Design</p>
      <p className='font-medium text-[3.2vw] lg:text-[1.6vw] uppercase leading-[3.5vw] lg:leading-[2vw]'>Agency</p>
    </div>
  );
}

const MobileMenu = () => {
  return(
    <div className='font-semibold text-[4vh] justify-center flex items-center flex-col'>
    <a className='mt-[15vh] block'>Specialize in</a>
    <a className='mt-[10vh] block'>Case Study</a>
    <a className='mt-[10vh] block'>Process</a>
    <a className='mt-[10vh] block'>Industries</a>
  </div>
  );
}

const Menu = () => {
  return(
    <div className='flex justify-between font-semibold text-[2vh] items-center whitespace-nowrap'>
      <a className='mr-[2vw]'>Specialize in</a>
      <a className='mr-[2vw]'>Case Study</a>
      <a className='mr-[2vw]'>Process</a>
      <a>Industries</a>
    </div>
  );
}

const Buttons = ({title, isInvert}) => {
  const bgColor = !isInvert ? 'bg-[#000000]' : 'bg-[#FFFFFF]';
  const txtColor = isInvert ? 'text-[#000000]' : 'text-[#FFFFFF]';

  return(
    <div style={{boxShadow: '0px 4px 20px #00000029'}} className={`w-[80vw] md:w-[40vw] lg:w-[15vw] py-[2%] ${bgColor} mt-[2vh] lg:mt-0 rounded-[33px] flex justify-center items-center mr-[12px] text-[1vw]`}>
      <a className={`${txtColor} text-[4vw] md:text-[2vw] lg:text-[1.1vw]`}>{title}</a>
    </div>
  );
}

const ButtonCombo = () => {
  return(
    <div className='flex flex-col lg:flex-row mt-[10vh] lg:mt-0 justify-center items-center'>
      <Buttons title={'Schedule A Call'} />
      <Buttons title={'We are Hiring'} isInvert />
    </div>
  );
}

const NavBar = ({menu, onChangeMenu}) => {
  return(
    <>
    <div className='px-[5%] mt-[3%] flex justify-between absolute w-[100%] items-center'>
      <BrandName />
      <div className='hidden lg:flex justify-between w-[75vw]'>
        <Menu />
        <ButtonCombo />
      </div>
      <div className='flex lg:hidden'>
        <div className='bg-white p-5 rounded-full cursor-pointer z-[100]' onClick={onChangeMenu}>
          <img src={menu ? Hamburger : Close} className={"w-[5vw]"} />
        </div>
      </div>
    </div>
   {!menu && <div className=' bg-[#00FF00] w-screen h-screen fixed z-[51]'>
      <MobileMenu />
      <ButtonCombo />
    </div>}
    </>
  );
}

const MainBannerContainer = () => {
  return(
    <div className="w-screen h-[105vh] bg-[#00FF00] bg-banner bg-cover bg-no-repeat lg:bg-bottom md:bg-left">
      <div className='z-50 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:translate-y-[-30%]'>
      <p className='text-[10vw] md:text-[5vw] font-extrabold lg:whitespace-nowrap'>{`INNOVATION DIGITAL`}</p>
      <p className='text-[10vw] md:text-[5vw] font-extrabold lg:whitespace-nowrap'>{`TECHNOLOGY`}</p>
      <p className='text-[3vw] md:text-[1.7vw] font-bold'>everything we do is the consumer, imagination and you.</p>
      </div>
    </div>
  );
}

const SuccessMeasure = () => {
  return(
    <div className={`w-screen min-h-screen lg:h-screen pb-32 bg-black lg:mt-[20vh]`}>
      <p className={`text-[#00FF00] text-center pt-[10%] md:pt-[8%] lg:pt-[6%] text-[4vw] md:text-[2.7vw] lg:text-[2.3vw] font-extrabold`}>MEASUREMENT <br/>TO OUR SUCCESS</p>
      <p className={`text-white text-center mt-[2%] md:mt-[0] text-[2.4vw] md:text-[1vw] lg:text-[0.7vw]`}>Our process-driven approach keeps us going</p>
      <div className='flex flex-wrap px-[5%] lg:px-[10%]'>
        {DATA.map((item, i) => {
          let imageWidth = i === 3 ? 'w-[30%] md:w-[22%] lg:w-[18%]' : 'w-[30%] md:w-[22%] lg:w-[18%]'
          let justify = i % 2 !== 0 ? 'justify-end' : ''
          return(
            <div className={`flex mt-[15%] md:mt-[10%] lg:mt-[7%] items-center ${justify} w-[50%] lg:w-[33%]`}>
              <img src={item.img} className={`object-fill ${imageWidth} h-auto `} />
              <p className='text-white ml-[10%] text-[2.5vw] md:text-[2vw] w-[25vw] lg:text-[1.1vw] font-bold whitespace-pre-line'>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const OurCollaboration = () => {
  return(
    <div className={`w-screen min-h-screen lg:h-screen pb-32 bg-[#EDEDED]`}>
      <p className={`text-[#09090A] text-center pt-[8%] lg:pt-[6%] text-[4vw] md:text-[2.7vw] lg:text-[2.3vw] font-extrabold`}>WE ARE WORKING <br/> WITH THESE INDUSTRIES</p>
      <div className='flex flex-wrap px-[5%] lg:px-[10%]'>
        {NEXT_DATA.map((item, i) => {
          let justify = i % 2 !== 0 ? 'justify-end' : ''
          return(
            <div className={`flex mt-[10%] lg:mt-[7%] items-center ${justify} w-[50%] lg:w-[33%]`}>
              <img src={item.img} className='object-fill w-[40%] md:w-[25%] lg:w-[20%] h-auto' />
              <p className='text-[#000000] ml-[10%] text-[2.5vw] md:text-[2vw] w-[20vw] lg:text-[1.1vw] font-semibold whitespace-pre-line'>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const App = () => {
  const [width, height] = useWindowSize();
  const [isMenu, setIsMenu] = useState(true);

  useEffect(() => {
    setIsMenu(true);
  }, [width, height])

  useEffect(() => {
    if(isMenu){
      enableScroll();
    }
  }, [isMenu])
  

  const toggleMenu = () => {
    if(isMenu) {
      disableScroll();
      setIsMenu(false);
    } else {
      enableScroll()
      setIsMenu(true);
    }
  }

  return(
    <Container>
      <NavBar menu={isMenu} onChangeMenu={toggleMenu}  />
      <MainBannerContainer />
      <SuccessMeasure />
      <OurCollaboration />
    </Container>
  );
}

export default App;