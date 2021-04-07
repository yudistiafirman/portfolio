import { TimelineMax } from 'gsap/gsap-core'
import { TweenMax } from 'gsap/gsap-core'
import React from 'react'
import { useEffect } from 'react'
import './Project.css'
import PejoyLogo from '../../Support/Images/PejoyLogo.png'
import Pman from '../../Support/Images/Pman.png'
import Hoteloka from '../../Support/Images/hotelokaSplash.gif'


export default function Project() {



    useEffect(()=>{
      window.scrollTo(0,0)
        TweenMax.set('.spine',{
            top:'60vh'
          })
          TweenMax.set('.circle',{
            opacity:0,
          })
        
          TweenMax.set('.pulse',{
            opacity:0,
           
          })
  
        
  
          const introTimeline= new TimelineMax({repeat:0})
  
          introTimeline.to('.spine',{
            top:'50vh'
          }).to('.circle',{
            opacity:1,
         
          }).to('.circle',{
            backgroundColor:'var(--purple)',
            ease:'power3'
          },'+=1').to('.pulse',{
            opacity:1,
            scale:5,
            duration:1
          }).to('.pulse',{
            opacity:0
          }).to('#p-title',{
            visibility:'inherit',
            opacity:1,
            transform:'matrix(1,0,0,1,0,0)',
            duration:1
          }).to('#projects',{
            visibility:'inherit',
            opacity:1,
            delay:1,
          })
  
    },[])

    return (
        <div className="container-fluid wrapper">
            <div className="row">
                    <div className="col-1 col-lg-4">
                    <div class="spine"></div>
                                         <div class="spine-target">
                                         <div class="circle" style={{opacity:0}} ></div>
                                          <div class="pulse" style={{opacity:0}}></div>
                                        </div>

                    </div>
                    <div className="col-11 col-lg-7" style={{marginTop:window.innerHeight/2-56+'px'}}>
                            <div className="static-container">
                                
                                         <h1 id="p-title" style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)'}} className="title text-light"  >Projects(<span className="text-primary">'selected'</span>)</h1>

                                   <div id="projects" style={{opacity:0}} className="std">
                                       <ul style={{padding:0}} className="work-list">
                                            <li>
                                                <a href="https://github.com/yudistiafirman/Pejoy.com-Fe-Reborn">
                                                  <div style={{backgroundColor:"var(--purple)",borderRadius:'5px'}} className="image-container">
                                                  <img src={PejoyLogo}  alt="#"/>
                                                  </div>
                                            
                                                  <div class="details">
                                                    <strong>www.Pejoy.com</strong><br/>
                                                      
                                                         Fashion Online Store
                                                  </div>
                                              
                                                   </a>
                                              </li>
                                            <li>

                                            <a href="https://github.com/yudistiafirman/DailyGadget-React-Native-App">
                                            <div className="image-container">
                                                  <img src={Pman} alt="#"/>
                                                  </div>
                                                  <div class="details">
                                                    <strong>Daily Gadget</strong><br/>
                                                      
                                                            E-commerce Gadget Trading
                                                  </div>
                                              
                                                   </a>
                                            </li>
                                            <li>

                                            <a href="https://github.com/yudistiafirman/Hoteloka-React-native-apps">
                                            <div className="image-container">
                                                  <img src={Hoteloka} alt="#"/>
                                                  </div>
                                                  <div class="details">
                                                    <strong>Hoteloka</strong><br/>
                                                      
                                                         Booking Hotels App
                                                  </div>
                                              
                                                   </a>

                                            </li>

                                       </ul>
                                   </div>


                            </div>



                    </div>



            </div>
           
        </div>
    )
}
