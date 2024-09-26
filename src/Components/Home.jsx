import React from 'react';


const Home = () => {
  return (
    <>
   
   <div className='flex  md:flex-row justify-between bg-teal-500 text-white p-4 sticky top-0  lg:flex-row '> 
    <h1 className='text-2xl mb-2 md:mb-0'>Sharma Bakery</h1>
    <div>
<div className='  hidden sm:block'>
            <div className=' flex flex-row space-x-8 '>
            <a  href=''>Home</a>
              <a href=''>About</a>
              <a  href=''>Gallery</a>
              <a href=''>Menu</a>
              <a href=''>Contact Us</a>
              </div>  
    </div>
    <div className='sm:hidden'>
    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 w-32 h-10 text-center  '>More info.</button>
    </div>
    </div>
   </div>
   
   
    <div >
   <img className='w-full md:w-full  shadow-black ' src='https://img.freepik.com/free-photo/close-up-delicious-birthday-cake_23-2150734928.jpg?ga=GA1.1.489428153.1726724684&semt=ais_hybrid'></img>
   </div>
<br />
   
    <h1 className='text-5xl p-4 text-center  bg-rose-400 text-white'>About Us</h1>
   <div className='bg-rose-400 text-white rounded-b-xl p-3 flex flex-col sm:flex sm:flex-row sm:justify-center sm:items-center '>
    

    <div className=''>
    <img className=' pb-10  m-auto shadow-black rounded-xl ' src='https://img.freepik.com/free-photo/delicious-birthday-cake-with-candle_23-2150734884.jpg?ga=GA1.1.489428153.1726724684&semt=ais_hybrid'></img>
    </div>

    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-2xl text-center'>Before they sold out readymade bakery</h1>
    <p className='p-2 text-xl text-center pl-0 sm:pl-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. a velit laudantium voluptatum.</p>
    <button className='bg-gray-500 w-[50%] rounded-xl  mb-10 text-center h-10'>Primary</button>
    </div>

  
  </div>

  <div className='p-7'>
    <p className='text-4xl text-center mb-3'>Gallery</p>
    <p className='text-4xl text-center'>Our Delicious Bakeries</p>
    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis et? Qui optio magnam soluta a voluptate, ex ipsa earum tempore consequuntur doloremque, possimus cumque obcaecati voluptatum fuga tempora accusantium!</p>
    </div> 
    <div className='  flex flex-col justify-center gap-4 items-center sm:flex-row sm:gap-4 sm:flex-wrap '>
    
      <img  className='  rounded-lg w-80 ' src='https://img.freepik.com/free-photo/delicious-cake-candles-arrangement_23-2149023576.jpg?w=900&t=st=1726825189~exp=1726825789~hmac=90ce2a442e22fd81e0e9ade0f2efdf58ada635098abbfb72f09525e7bf5bab0b'></img>
 
      <img className='   rounded-lg w-80'src='https://img.freepik.com/free-photo/birthday-party-items-with-copy-space_23-2149023537.jpg'></img>
   
     
      <img  className='  rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img>
        <img  className=' s  rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img>
     
        <img  className='   rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img>

        <img  className='   rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img>

        <img  className='   rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img>

        <img  className='   rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img>

        {/* <img  className=' shadow-2xl shadow-black  rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img> */}

        {/* <img  className=' shadow-2xl shadow-black  rounded-lg w-80' src='https://img.freepik.com/free-photo/cake-with-glaze-candles-high-angle_23-2149023562.jpg?w=996&t=st=1726825222~exp=1726825822~hmac=e341054234fd27fac9a36ce3bcc663ec34b9b0efc9ba0c85fd3ae9e9e4aadfa7'></img> */}

    </div>
   
    
    <div>
      <p className='text-white bg-gray-600 text-3xl text-center'>Menu</p>
    </div>
    <div className='bg-gray-600 flex flex-col gap-6 sm:flex sm:justify-center items-center sm:flex-row sm:gap-6 sm:p-8  '>
      <div className='bg-white p-4 rounded-lg'>
      <img src='https://img.freepik.com/premium-vector/delicious-chocolate-cake-slice-illustration-white-background_1310786-15125.jpg?size=626&ext=jpg&ga=GA1.1.489428153.1726724684&semt=ais_hybrid'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa ratione cum nobis unde, officiis perferendis delectus deserunt, dolor, nisi reiciendis laudantium natus consequatur labore eius. Quam dignissimos aut est!</p>
    <button className='bg-blue-700 text-white items-center w-28 rounded-md h-10 mt-5 '>Read more</button>
    </div>
    <div className='bg-white  p-4 rounded-lg'>
      <img src='https://img.freepik.com/free-photo/carrot-cake_74190-2550.jpg?size=626&ext=jpg&ga=GA1.1.489428153.1726724684&semt=ais_hybrid'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa ratione cum nobis unde, officiis perferendis delectus deserunt, dolor, nisi reiciendis laudantium natus consequatur labore eius. Quam dignissimos aut est!</p>
    <button className='bg-blue-700 text-white items-center w-28 rounded-md h-10 mt-5'>Read more</button>
    </div>
    <div className='bg-white p-4 rounded-lg'>
      <img src='https://img.freepik.com/premium-photo/red-velvet-cake_1339-48633.jpg?size=626&ext=jpg&ga=GA1.1.489428153.1726724684&semt=ais_hybrid'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa ratione cum nobis unde, officiis perferendis delectus deserunt, dolor, nisi reiciendis laudantium natus consequatur labore eius. Quam dignissimos aut est!</p>
    <button className='bg-blue-700 text-white items-center w-28 rounded-md h-10 mt-5'>Read more</button>
    </div>
    <div className='bg-white  p-4 rounded-lg'>
      <img src='https://img.freepik.com/free-photo/fork-slice-cake-white-plate_23-2147840393.jpg?size=626&ext=jpg&ga=GA1.1.489428153.1726724684&semt=ais_hybrid'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa ratione cum nobis unde, officiis perferendis delectus deserunt, dolor, nisi reiciendis laudantium natus consequatur labore eius. Quam dignissimos aut est!</p>
    <button className='bg-blue-700 text-white items-center w-28 rounded-md h-10 mt-5'>Read more</button>
    </div>
    </div>
    <footer className='bg-red-600 mt-6 text-white rounded-2xl p-5'>
    <p className='text-center text-3xl'>Contact us</p>
      <div  className=' justify-center  sm:flex gap-7 '>
        <div>
      <p>Name</p>
      <input className='w-60 rounded-sm ' type='text' placeholder='Enter Your Name'></input>
      </div>
      
      <div>
      <p>Email address</p>
      <input className=' rounded-sm ' type='text' placeholder='name@exapmle.com'></input>
      </div>
      
      </div>
      <p>Message</p>
      <div className='flex flex-col'>
        <input  className='w-full pb-20  rounded-lg '    type='text' placeholder='message'></input>
      <button className='bg-blue-900 text-white p-4 mt-4 ml-4 mb-4 w-40 rounded-lg shadow-xl shadow-black'>submit</button>
      </div>
    </footer>
    
    </> 
  );
};
 
export default Home;
