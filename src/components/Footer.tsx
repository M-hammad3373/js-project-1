'use client';
import React from 'react';



const Footer = () => {
  return (
    <footer className='bg-slate-700 text-white  py-12 bottom-0 left-0 w-full  '>
<div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>

<div>
    <h3 className='text-lg font-bold italic text-white mb-4'> About Us </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae ratione qui error, deserunt, nihil nisi iste quaerat adipisci quasi, iure officiis optio corporis aspernatur sed ipsa. Accusamus, magnam? Adipisci.</p>
</div>

<div>
    <h3 className='text-lg font-bold text-white mb-4'>
        Links
        </h3>
<ul>
    <li><a href="/" className='hover:text-slate-500'>home</a></li>
    <li><a href="/services" className='hover:text-slate-500'>services</a></li>
    <li><a href="/about" className='hover:text-slate-500'>about</a></li>
    <li><a href="/contact" className='hover:text-slate-500'>contact</a></li>  
</ul>
</div>

<div> <h3 className='text-lg font-bold  font-white mb-4'>follow us</h3>
     <ul>
    <li><a href="/https://www.linkedin.com/in/hammad-ali-a805b228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='hover:text-slate-300'>Linkedin</a></li>
    <li><a href="/https://github.com/M-hammad3373" className='hover:text-slate-300'>Github</a></li>
    <li><a href="/https://www.instagram.com/hammad_ali_017?utm_source=qr&igsh=MTRrZHdhdnJndHJpdw==" className='hover:text-slate-500'>Instagram</a></li>  
    <li><a href="/https://www.facebook.com/hammad.ali.77577?mibextid=ZbWKwL" className='hover:text-slate-500'>Facebook</a></li>  
    <li><a href="/http://t.me/MuhmmadHammadAli" className='hover:text-slate-500'>Telegram</a></li>  
</ul>
</div>

<div>
<h3 className='hover:text-slate-500 font-bold '>Contact Us</h3>
<p >email:<a href="/.mail@gmail.com" className='hover:text-slate-500'>alihammadg2003@gmail.com</a></p>
<p>phone: <span className='hover:text-slate-500'>0320-9673373</span></p>
</div>



</div>
<p className='flex justify-center p-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p> 
    </footer>
 
  )
}

export default Footer