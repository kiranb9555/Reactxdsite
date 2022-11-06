import React from 'react';
import {DATA, NEXT_DATA} from './mockData';

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
      <p className='font-extrabold text-[30px] uppercase leading-[30px]'>Design</p>
      <p className='font-medium text-[25px] uppercase leading-[30px]'>Agency</p>
    </div>
  );
}

const Menu = () => {
  return(
    <div className='ml-[25px] w-[449px] flex justify-between font-semibold text-[18px] items-center'>
      <a>Specialize in</a>
      <a>Case Study</a>
      <a>Process</a>
      <a>Industries</a>
    </div>
  );
}

const Buttons = ({title, isInvert}) => {
  const bgColor = isInvert ? 'bg-[#000000]' : 'bg-[#FFFFFF]';
  const txtColor = !isInvert ? 'text-[#000000]' : 'text-[#FFFFFF]';

  return(
    <div style={{boxShadow: '0px 4px 20px #00000029'}} className={`w-[219px] h-[49px] ${bgColor} rounded-[33px] flex justify-center items-center mr-[12px]`}>
      <a className={`${txtColor}`}>{title}</a>
    </div>
  );
}

const ButtonCombo = () => {
  return(
    <div className='flex'>
      <Buttons title={'Schedule A Call'} />
      <Buttons title={'We are Hiring'} isInvert />
    </div>
  );
}

const NavBar = () => {
  return(
    <div className='px-[140px] mt-[54px] flex justify-between absolute w-[100%] items-center'>
      <div className='flex'>
        <BrandName />
        <Menu />
      </div>
      <ButtonCombo />
    </div>
  );
}

const MainBannerContainer = () => {
  return(
    <div style={{ borderRadius: '0 0 0 26%'}} className='w-screen h-screen bg-[#00FF00] pt-[241px] pl-[100px] overflow-hidden'>
      <div style={{
           width: '80%',
           backgroundImage: "url('Group 82.svg')",
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'contain',
           height:'80%',
           bottom:'-5%',
           position:'absolute'
      }}>
      </div>
      <div className='z-50 absolute left-[50%] top-[50%] translate-x-[-50%]'>
      <p className='text-[72px] font-extrabold'>{`INNOVATION DIGITAL TECHNOLOGY`}</p>
      <p className='text-[25px] font-bold'>everything we do is the consumer, imagination and you.</p>
      </div>
    </div>
  );
}

const SuccessMeasure = () => {
  return(
    <div className={`w-screen h-screen bg-black mt-[149px]`}>
      <p className={`text-[#00FF00] text-center pt-[6%] text-[40px] font-extrabold`}>MEASUREMENT <br/>TO OUR SUCCESS</p>
      <p className={`text-white text-center text-[12px]`}>Our process-driven approach keeps us going</p>
      <div className='flex flex-wrap px-[10%]'>
        {DATA.map(item => {
          return(
            <div className='flex mt-[80px]  items-center w-[33%]'>
              <img src={item.img} className='object-fill w-[80px] h-[80px]' />
              <p className='text-white ml-[40px] text-[18px] font-bold whitespace-pre-line'>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const OurCollaboration = () => {
  return(
    <div className={`w-screen h-screen bg-[#EDEDED]`}>
      <p className={`text-[#09090A] text-center pt-[6%] text-[40px] font-extrabold`}>WE ARE WORKING <br/> WITH THESE INDUSTRIES</p>
      <div className='flex flex-wrap px-[10%]'>
        {NEXT_DATA.map(item => {
          return(
            <div className='flex mt-[80px]  items-center w-[33%]'>
              <img src={item.img} className='object-fill w-[80px] h-[80px]' />
              <p className='text-[#000000] ml-[40px] text-[17px] font-semibold whitespace-pre-line'>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const App = () => {
  return(
    <Container>
      <NavBar />
      <MainBannerContainer />
      <SuccessMeasure />
      <OurCollaboration />
    </Container>
  );
}

export default App;