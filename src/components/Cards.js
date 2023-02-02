import React from 'react';
import './Cards.css';
import { Button } from './Button';

// import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our services</h1>
   <p className='content'>We engage in all stages of product development, right from design to implementation and support. We deliver quality <br/>software using multiple models and are flexible to implement other models as per the requirements of the client.</p>


      <div className='cards__container'>
        <div className='cards__wrapper'>
        <div className='cards__img'>
            <span >
                <img    alt="zxcmh" src='images/i1.png'></img>

            </span>
            <span >
                <img    alt="zxcmh" src='images/i2.png'></img>

            </span>
            <span >
                <img    alt="zxcmh" src='images/i3.png'></img>

            </span>
          
          </div>
          <div className='cards__h'>
                <h3>App Development</h3>

                <h3>Consulting</h3>

                <h3>Software Solutions</h3>

          
          </div>
          <div className='cards__items'>
        
           <p>We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from Brovitech who are experts for delivering excellence in cross-platform app development services.</p>
          
          
          </div>
          <div className='cards__items'>

          <span >

            </span>
          <p>Experience the enriched expertise of our software consulting services that outpace the speed of disruption and emerge sturdier – to embrace digitally-enabled approaches and intelligent business models.</p>
          
          </div>

          <div className='cards__items'>

          <span >

            </span>
            <p>Brovitech is the technology partner you would be looking for, to get highly functional, scalable, and custom software applications developed for your business. The heady blend of unmatched customer servicing and competitive software development costs is what makes us stand apart.</p>
            
            </div>
        </div>






        
      </div>
      <div className='cards_emp'>
     <h4>03 HAPPY CLIENTS</h4>
     <h4>25 APPROVED PROJECTS ​</h4>

     <h4>50+ MOBILE APPS

</h4>
     <h4>10+ BEAUTIFUL WEBSITES</h4>

      
      </div>

      <div className='cards_serv'>
      <h1> Our work</h1>
      <h4>Projects that speak about our versatility</h4>
      <span >
                <img    alt="zxcmh" src='images/i4.png'></img>

            </span>

      {/* <img alt='dasf' src='image/img-home.png'></img> */}

      </div>



      <div className='container_project'>
    
    {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
    <h1>Let's talk about your next project</h1>
    <div className='pr-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        GET A QUOTE
      </Button>
   
    </div>
  </div>


   
    </div>









  );

  
}

export default Cards;
