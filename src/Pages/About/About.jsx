import React from 'react'
import './About.css'
import '../Init/Init.css'
import { useEffect } from 'react'
import { TimelineMax } from 'gsap/gsap-core'
import { TweenMax } from 'gsap/all'
import Cv from  '../../files/yudistiafirman.pdf'
import { Link } from 'react-router-dom'
import axios from 'axios'



function About() {




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
          }).to('#about',{
            visibility:'inherit',
            opacity:1,
            transform:'matrix(1,0,0,1,0,0)',
            duration:1
          }).to('#skills',{
            visibility:'inherit',
            opacity:1,
         
          })
  
    },[])



    return (
        <div className="container-fluid wrapper about">
                    <div className="row">


                            <div className="col-1 col-lg-4">
                                        
                                    <div class="spine"></div>
                                         <div class="spine-target">
                                         <div class="circle" style={{opacity:0}} ></div>
                                          <div class="pulse" style={{opacity:0}}></div>
                                        </div>

                            </div>

                            <div className="col-11 col-lg-7 " style={{marginTop:window.innerHeight/2-56+'px'}}>
                                <div className="static-container">
                                     <h1 id="about" style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)',transformOrigin: '50% 50% 0px'}} className="title">about()</h1>
                                     <div id="skills" style={{opacity:0}} className="std">

                                     <div class="first-fold">
                                         
                                        {/* <ul style={{padding:0}}  class="about-contact">
                                          
                                          <li>
                                            <a href="#"  target="_blank" title="LinkedIn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="LinkedinIcoTitle" class="ico">
                                                    <title id="LinkedinIcoTitle">LinkedIn logo</title>
                                                    <path stroke="none" d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"></path>
                                                 </svg>
                                           </a>
                                         </li>
                                          <li>
                                              <a href="https://github.com/yudistiafirman" target="_blank" title="GitHub">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="GithubIcoTitle" class="ico">
                                                  <title id="GithubIcoTitle">GitHub logo</title>
                                                    <path stroke="none" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" clip-rule="evenodd"></path>
                                              </svg>
                                              </a>
                                        </li>
                                        <li>
                                         Download my
                                          <a  href='#' target="_self" title="Download Resume" class="bt"  >
                                          resume
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="ico">
                                                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 11.4l3.3-2.9m-6.6 0L8 11.4V.5M.5 10.8v4.7h15v-4.7"></path>
                                              </svg>
                                         </a>
                                        </li>
                                       </ul> */}
                                       <p class="-purple"> I am a web and mobile developer. From Indonesia, based in Sumedang.  </p>
                                       </div>
                                        
                                        <div className="about-grid">
                                            <h2>Main skills</h2>
                                            <div className="columns fluent">
                                                    <ul >
                                                        <li>Front End Development <br/>Back End Development <br/>Mobile Development</li>
                                                        <li>React Js React Native Redux Reddis Context GSAP </li>
                                                        <li>Express Mysql MongoDb RestApi Nodejs </li>
                                                    </ul>
                                            </div>

                                            <h2>Other Skills</h2>

                                            <div className="columns tools">
                                                <ul>
                                                    <li>Team Work</li>
                                                    <li>LeaderShip</li>
                                              
                                                </ul>
                                                <ul>
                                                    <li>Creative </li>
                                                    <li>Critical Thinking</li>
                                              
                                                </ul>
                                                <ul>
                                                    <li>Problem Solving</li>
                                                    <li>Strategic Thinking</li>
                                              
                                                </ul>

                                            </div>
                                                   
                                            <h2>Experience</h2>
                                            <div className="columns experience">
                                            <ul>
                                                    <li>
                                                      <b className="text-primary">Room Service Waiter</b>
                                                        <br/>
                                                        @Intercontinental Dubai Marina 
                                                        <br/>
                                                        2015-2017
                                                    
                                                    </li>
                                                    <li>
                                                      <b className="text-primary">Waiter</b>
                                                        <br/>
                                                        @Norwegian Cruise Line
                                                        <br/>
                                                        2017-2020
                                                    
                                                    </li>
                                              
                                                </ul>
                                            </div>

                                            <h2>Languanges</h2>
                                            <div className="columns Languages">
                                            <ul>
                                                    <li>
                                                        <span className="-comment">//Fluent</span>
                                                        <br/>
                                                      <i className="text-primary italic">en-US</i> English
                                                        <br/>
                                                        <i className="text-primary italic">id-ID</i> Indonesian
                                                        <br/>
                                                      <i className="text-primary italic">id-SU</i> Sundanase
                                                    </li>
                                                    <li>
                                                        <span className="-comment">//Intermediete</span>
                                                        <br/>
                                                      <i className="text-primary italic">ms-MAY</i> Melayu
                                                        <br/>
                                                       
                                                    </li>
                                                    <li>
                                                        <span className="-comment">//Basic</span>
                                                        <br/>
                                                      <i className="text-primary italic">ja-JPN</i> Japanese
                                                        <br/>
                                                        <i className="text-primary italic">es-ESN</i>  Spanish
                                                        <br/>
                                                    </li>
                                              
                                                </ul>
                                            </div>

                                            <h2>Also busy with </h2>
                                            <div className="columns busy">
                                                <ul>
                                                    <li>My Cupang</li>
                                                    <li>My Bird (Love Bird)</li>
                                                    <li>Mobile Legends</li>
                                                </ul>
                                                

                                            </div>


                                        </div>


                                       
                                </div>
                                </div>
                              
                                        
                              

                            </div>

                    </div>
        </div>
    )
}

export default About
