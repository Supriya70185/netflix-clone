import React from 'react';
import Supriya from '../assets/image/net.jpeg';

const Sup = () => {
  return (
    < >
      <div style={{ backgroundImage: `url('https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg')` }}>
    <div className="bg-cover bg-center  flex flex-row w-full items-center sm:flex-row justify-between p-8 " >
      
      <div className='text-red-600 text-4xl'> <h1>NETFLIX</h1></div>
      <div className=''>
      <select className='text-white bg-black'>
        <option>English</option>
        <option>Hindi</option>
        <option>Marathi</option>
      </select>
      <button className='bg-red-600 w-20 text-center rounded-sm '>Sign In</button>
      </div>
      </div>
      <div className='flex flex-col justufy-center p-5 text-center mt-40 sm:flex-col'>
      <h1 className='text-white text-5xl mt-5'>UNLIMITED TV SHOWS,MOVIES AND MORE</h1>
      <p className='text-2xl text-white mt-5'>Starts at rs.149.Cancel at any time.</p>
      <p className='text-white text-lg'>Ready to watch?Enter your Email to create a restart your membership.</p>
        <div className='mt-5 space-x-1'>
          <input className='rounded-md h-11 w-64 bg-black text-white text-center' type='text' placeholder= 'Email address'></input>
        <button className='bg-red-600 w-64 h-11 text-white rounded-lg mt-2'>Get Started</button>
      </div>
      </div>
      </div>
      <div className='bg-black p-4'>
        <p className='text-3xl text-white'>Trending Now</p>
        <div className='mt-4'>
        <select className='text-white bg-black border-white '>
          <option>india</option>
          <option>south </option>
        </select>
        <select className='text-white bg-black border-white'>
          <option>Movies</option>
          <option>web series </option>
        </select>
        </div>
        <div className='mt-4 flex flex-col justify-evenly items-center w-full sm:flex sm:flex-row gap-4'>
          <img className='w-44 bg-cover ' src='https://tse1.mm.bing.net/th?id=OIP.AkqQU6wiR_50f-Qd-jYA7wAAAA&pid=Api&P=0&h=180'></img>
          <img className='w-44' src='https://tse3.mm.bing.net/th?id=OIP.ng38lIHD2D_dQre8DTxjhgHaKs&pid=Api&P=0&h=180'></img>
          <img className='w-44' src='https://tse3.mm.bing.net/th?id=OIP.F8tU9wy_GrFoBLSp19dXFAHaK-&pid=Api&P=0&h=180'></img>
          <img  className='w-44' src='https://tse3.mm.bing.net/th?id=OIP.1umjRUVLTbPQCPVU_q1HPgHaK-&pid=Api&P=0&h=180'></img>
          <img className='w-44' src='https://tse4.mm.bing.net/th?id=OIP.CXA8HBzxkegKYRmGCAeUfwHaKo&pid=Api&P=0&h=180'></img>
        </div>
        
      </div>
      <div className='bg-black flex flex-col justify-center p-4   '>
      <p className='text-white text-3xl mb-3'>More Reasons to join</p>
      <div className=' gap-5 flex flex-col sm:flex-wrap justify-around sm:flex-row items-center '>
      <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-4 rounded-lg  p-7 w-72 hover:scale-105 hover:transition hover:duration-150'>
        <p className='text-white text-xl'>Enjoy on your TV</p>
        <p className='text-white'>watch on smart tVs,Playstation,Xbox,Blue-ray players and more</p>
      </div>
      <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-4  rounded-lg p-7 w-72 hover:scale-105 hover:transition hover:duration-150'>
        <p className='text-white text-xl'>Download your shows to watch offline</p>
        <p className='text-white'>Save your favourites easily and always have something to watch.</p>
      </div>
      <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-4  rounded-lg p-7 w-72 hover:scale-105 hover:transition hover:duration-150'>
        <p className='text-white text-xl'>Watch everywhere</p>
        <p className='text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
      </div>
      <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-4 w-72 rounded-lg p-7 hover:scale-105 hover:transition hover:duration-150'>
        <p className='text-white text-xl '>Create profiles for kids</p>
        <p className='text-white'>Create profiles  in a space made just for them — free with your membership.</p>
      </div>
      </div>
      </div>
      <div className='bg-black text-white text-2xl p-5'>
        <p>Frequently Asked Questions</p>
        <div className='border-b-2 border-black hover:transition '>
        <details className='bg-gray-500  '>
        <summary>What is netflix?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, doloremque reiciendis sed asperiores ipsam ullam incidunt vel saepe perferendis quod quas, aliquam temporibus illo assumenda maxime dolores, excepturi optio.</p>
        </details>
        </div>
        <details className='bg-gray-500 border-b-2 border-black '>
        <summary>How much does netflix cost?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, doloremque reiciendis sed asperiores ipsam ullam incidunt vel saepe perferendis quod quas, aliquam temporibus illo assumenda maxime dolores, excepturi optio.</p>
        </details>
        <details className='bg-gray-500 border-b-2 border-black'>
        <summary>Where i can watch</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, doloremque reiciendis sed asperiores ipsam ullam incidunt vel saepe perferendis quod quas, aliquam temporibus illo assumenda maxime dolores, excepturi optio.</p>
        </details>
        <details className='bg-gray-500 border-b-2 border-black'>
        <summary>How do i cancel</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, doloremque reiciendis sed asperiores ipsam ullam incidunt vel saepe perferendis quod quas, aliquam temporibus illo assumenda maxime dolores, excepturi optio.</p>
        </details>
        <details className='bg-gray-500 border-b-2 border-black'>
        <summary>What can i watch on netflix?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore, doloremque reiciendis sed asperiores ipsam ullam incidunt vel saepe perferendis quod quas, aliquam temporibus illo assumenda maxime dolores, excepturi optio.</p>
        </details>
        <details className='bg-gray-500 border-b-2 border-black'>
        <summary>Is netflix good for kids</summary>
        <p>Lorem ipsum dolor sit amet consectetur doloremque reiciendis sed asperiores ipsam ullam incidunt vel saepe perferendis quod quas, aliquam temporibus illo assumenda maxime dolores, excepturi optio.</p>
        </details>
        
      </div>
      <div className='text-2xl text-white bg-black items-center flex flex-col'>
        <p className='items-center'>Ready to watch?Enter your email to create or restart your membership.</p>
        <div className='flex flex-col sm:flex-row'>
      <input className='text-center w-60 h-11 bg-black text-white mt-4 ' type='Email' placeholder='Email address'></input>
      <button className='bg-red-500 text-white h-11 w-40 ml-5 mt-3 items-center'>get started</button>
      </div>
      </div>
      <div className='bg-black text-white p-4 '>
        <p className='mb-5 mt-6'>Questions? Call 000-800-919-1694</p>
        <div className='flex flex-col  gap-5 sm:flex sm:flex-row justify-between'>
        <div>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div>
          <p>help center</p>
          <p>jobs</p>
          <p>cookie Preferences</p>
          <p>legal notices</p>
        </div>
        <div>
          <p>Account</p>
          <p>Ways to watch</p>
          <p>Corporate information</p>
          <p>only on netflix</p>
        </div>
        <div>
          <p>Media centre</p>
          <p>Terms of use</p>
          <p>contact us</p>
          </div>
          </div>
      </div>
      </>
      
  
  );
}

export default Sup;
