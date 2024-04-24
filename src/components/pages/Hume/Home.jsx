import React from 'react'
import Header from '../../partials/Header'
import Features from './Features'
import { feature, faq } from './data';
import Accordion from './Accordion';
import EmailForm from './EmailForm';
import Footer from '../../partials/Footer';

const Home = () => {
  return (
    <>
      <div className="bg-[url('../../img/login/bg-login.jpg')] h-[74vh] w-full bg-cover isolate relative">
          <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/50 z-[-1]"></div>
          <Header isLogin={false}/>

          <div className="absolute txy-a f-col-center text-center w-full">
            <h1 className='text-5xl text-white mb-8'>Unlimited movies, TV shows, and more</h1>
            <p className='text-xl text-white mb-5'>Watch anywhere. Cancel anytime.</p>
            <p className='text-xl text-white mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
            <EmailForm/>
          </div>
      </div>
      <div className="feature-list border-b-8 border-[#333]">
        {feature.map((item, key) => <Features item={item} key={key}/>)}
      </div>
      <div className="faqs bg-black py-12">
        <div className='max-w-[1200px] mx-a px-4 mb-12'>
          <h2 className='text-5xl text-center mb-10 text-white'>Frequently Asked Questions</h2>
          
          {faq.map((item, key) => <Accordion item={item} key={key}/>)}
        </div>
        <p className='text-center text-2xl text-white mb-0 leading-none'>Ready to watch? Enter your email to create or restart your membership.</p>
        <EmailForm />
      </div>
      <Footer/>
    </>
  )
}

export default Home