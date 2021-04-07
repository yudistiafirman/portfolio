import React, { useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger, TweenMax}from 'gsap/all'
import './Init.css'


import MotionPathPlugin from 'gsap/MotionPathPlugin'
import { TimelineMax } from 'gsap/gsap-core';






function Init() {

   
  


    
   
    useEffect(()=>{


      // Animations

        window.scrollTo(0,0)

        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ease: "none"});
        //line animation
       

       
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
        }).to('#firman',{
          visibility:'inherit',
          opacity:1,
          transform:'matrix(1,0,0,1,0,0)',
          duration:1
        }).to('#yudistia',{
          visibility:'inherit',
          opacity:1,
          transform:'translate(0%,0%)',
          duration:1
        })


        //cv animation
        let timeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#vitae',
               
                scrub: true,
             
            },
          
        })
      
        timeline.to('#preserve',{
          
          visibility:'inherit',
          opacity:1,
          transform:'translate(0%, -16.7%) translate3d(0px, 0px, 0px)'
        
        }).to('#preserve',{
      
          transform:`translate(0%,-100%)`,
          opacity:0,
   
        })
    
        
 
      
       
       
     

        //showcase animation
        let showcase=gsap.timeline({
            scrollTrigger:{
                trigger:'#vitae',
            
                scrub: true,
            
            },
         
        })
      
        showcase.to('#showcase',{visibility:'inherit',
        opacity:1,
        transform: 'translate(0%, -16.7%) translate3d(0px, 0px, 0px)'})
        .to('#showcase',{
      
          transform:`translate(0%,-100%)`,
          opacity:0,
   
        })
    

     
       

        //time line animation
       

        

           
         
     
    

    
       
//square purple table animation rotation
          const tableRotate= new TimelineMax({repeat:-1})

          tableRotate.to('.open-open',{
            rotation: "+=360", 
           ease: "none", 
             duration: 5,
          })
          const tableReveal= gsap.timeline({
        scrollTrigger:{
          trigger:'#quotes',
          start:'top center',
          end:'top top',
          scrub:1
        }
      
     })

     tableReveal.to('#open',{
      visibility: 'inherit',opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale(1, 1)',
     })
     let hideTable= gsap.timeline({
       scrollTrigger:{
         trigger:'#daily',
         scrub:1,
         start:'top center',
         end:'top top',
       }
     })

     hideTable.to('#open',{scale:0,opacity:0})
    


const triangleTimeline= new TimelineMax({repeat:-1})

     triangleTimeline.to('.smart-smart',{
            rotation: "+=360", 
            ease: "power1", 
            duration: 5, 
          }).to(".smart-smart", {
            rotation: "-=360", 
            ease: "power2", 
            duration: 5, 
           
          
           
          });

          const triangleRotation = gsap.timeline({scrollTrigger:{
            trigger:'#quotes',
            start:'top center',
            end:'top top',
            scrub:1
           
          }})       
            
            triangleRotation.to('#smart',{
                visibility: 'inherit', opacity: '0.999962', transform: 'translate3d(0px, 0px, 0px) scale(1, 1)'
              })
        
              let hideTriangle= gsap.timeline({
                scrollTrigger:{
                  trigger:'#daily',
                  scrub:1,
                  start:'top center',
                  end:'top top',
                }
              })
              hideTriangle.to('#smart',{
                scale:0 , opacity:0,
              })
   //coffee animation

              const coffeeAnimation=new TimelineMax({repeat:-1})

              coffeeAnimation.to('.coffee-coffee',{
                yPercent:'+=150',
                xPercent:'+=100',
                yoyo:true,
                duration:5,
              rotation:'+=180',
              }).to('.coffee-coffee',{
                yPercent:'-=150',
                xPercent:'-=100',
                yoyo:true,
                duration:5,
                rotation:'-=180'
              })

              const coffeeShow= gsap.timeline({
                scrollTrigger:{
                  trigger:'#about',
                  scrub:1,
                  start:'top center',
                  end:'top top',
             
                }
              })

              coffeeShow.to('#coffee',{  visibility: 'inherit',
              opacity: 1,
             transform: 'matrix(1, 0, 0, 1, 0, 0)',
           right: '0px',
            bottom: '214px'})
              // show coffee animation
            const scaleCoffee= gsap.timeline({
              scrollTrigger:{
                trigger:'#daily',
                scrub:1,
                start:'top center',
                end:'top top',
           
              }
            })
            scaleCoffee.to('#coffee',{visibility: 'inherit', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale(4, 4)', left: '0px', top: '8rem',})
              // hide coffee animation

            const hideCoffee=gsap.timeline({
              scrollTrigger:{
                trigger:'#earlydays',
                scrub:1,
                start:'top center',
                end:'top top',
              }
            
            })

            hideCoffee.to('#coffee',{
              visibility: 'inherit',
              opacity: 1,
              transform: 'translate(-200%, -750%) matrix(4, 0, 0, 4, 0, 0)',
              left: '0px',
              top: '8rem',
            })
              // astro animation
              //astro left arm animation

              const astroAnim= new TimelineMax({repeat:-1})

              astroAnim.to('.astro-astro',{
                y:'-=50',
                yoyo:true,
                rotation:'+=55',
                duration:3,
              
           
              }).to('.astro-astro',{
                y:'+=50',
                yoyo:true,
                duration:3,
              
                rotation:'-=55',
                
              })
              
              const astroLarmAnimation= new TimelineMax({paused:true})  
              const mainLarmAnim=new TimelineMax({repeat:-1})
                astroLarmAnimation.to('.astro-l-arm',{
                rotation:'-=45',
                duration:0.05,
                yoyo:true
              }).to('.astro-l-arm',{
                rotation:'+=45',
                duration:0.05,
                yoyo:true
              })

              mainLarmAnim.add(astroLarmAnimation.tweenFromTo(0,astroLarmAnimation.duration()))
              mainLarmAnim.add(astroLarmAnimation.tweenFromTo(0,astroLarmAnimation.paused()))

              //astro left leg animation

              TweenMax.to('.astro-l-leg',{
                rotation:'-=30',
                repeat:-1,
                yoyo:true,
                duration:3
              })

              //astro right leg 

       TweenMax.to('.astro-r-leg',{
                rotation:'+=15',
                repeat:-1,
                yoyo:true,
                duration:3
              })

              //astro body

            TweenMax.to('.astro-body',{
                rotation:'-=5',
                repeat:-1,
                yoyo:true,
                duration:3
              })
            
        
              const showAstro = gsap.timeline({
                scrollTrigger:{
                trigger:'#about',
                scrub:1,
                  start:'top center',
                  end:'top top',
                }
              })
              showAstro.to('#astro',{
                visibility: 'inherit',
               opacity: 1,
              transform: 'matrix(1, 0, 0, 1, 0, 0)',
             right: '0px',
             bottom: '214px'
              })

              // show astro
              const scaleAstro = gsap.timeline({
                scrollTrigger:{
                  trigger:'#daily',
                  scrub:1,
                    start:'top center',
                    end:'top top',
                  }
              }) 
              scaleAstro.to('#astro',{
                visibility: 'inherit', opacity: 1, transform: 'matrix(4, 0, 0, 4, 0, 0)', right: '-10vw', bottom: '-10vh'
              })

              // hide astro

              const hideAstro = gsap.timeline({
                scrollTrigger:{
                  trigger:'#earlydays',
                  scrub:1,
                  start:'top center',
                  end:'top top'
                }
              })
              
              hideAstro.to('#astro',{
                visibility: 'inherit',
                opacity: 1,
                transform: 'translate(200%, 600%) matrix(4, 0, 0, 4, 0, 0)',
                right: '-10vw',
                bottom: '-10vh'
              })


                //  dino animation 


                //dino head animation 
          TweenMax.to('.dino-head',{
                rotation:'+=10',
                repeat:-1,
                yoyo:true,
                duration:1,
              })

              //dino tail animation

             TweenMax.to('.dino-tail',{
                rotation:'+=10',
                repeat:-1,
                yoyo:true,
                duration:1,
              })
              
              //dino left leg animation

          TweenMax.to('.dino-l-leg',{
                    rotation:"+=15",
                    repeat:-1,
                    yoyo:true,
                    duration:1
              })

              //dino right leg animation
       TweenMax.to('.dino-r-leg',{
                rotation:"-=15",
                repeat:-1,
                yoyo:true,
                duration:1
              })

              //dino left hand

           TweenMax.to('.dino-l-arm',{
                y:'+=5',
                repeat:-1,
                yoyo:true,
                duration:1
              })
              //dino r hand
              TweenMax.to('.dino-r-arm',{
                rotation:'+=5',
                repeat:-1,
                yoyo:true,
                duration:1
              })

              //dino headphone

      TweenMax.to('.dino-headphone',{
                scale:1.1,
                repeat:-1,
                yoyo:true,
                duration:0.3
              })



              //show dino animation
            const dinoShow=gsap.timeline({
              scrollTrigger:{
                trigger:'#about',
                scrub:1,
                start:'top center',
                end:'top top'
              }

            }) 
            
            
            dinoShow.to('#dino',{
            transform: 'translate(0,0)', visibility: 'inherit', opacity: 1
            })

            //hide dino animation

            const dinoHide=gsap.timeline({
              scrollTrigger:{
                trigger:'#daily',
                scrub:1,
                start:'top center',
                end:'top top'
              }
            })
            dinoHide.to('#dino',{
              transform: 'translate(0%, 200%) matrix(1.5, 0, 0, 1.5, 0, 0)'
            })
          // const show earlydays container

          let showContainer=gsap.timeline({
            scrollTrigger:{
              trigger:'#earlydays',
              scrub:3,
              start:'top center',
              end:'top top'
            }
          })

          showContainer.to('#t-container',{
            visibility:'inherit',
            opacity:1,
          
          })



        // earldays animation
            let earlyDay=gsap.timeline({
              scrollTrigger:{
                  trigger:'#earlydays',
                 
                  scrub: 1,
               
              },
            
          })
          
          earlyDay.to('#early',{
            
            visibility:'inherit',
            opacity:1,
            transform:'translate(0%, -16.7%) translate3d(0px, 0px, 0px)'
          
          }).to('#early',{
        
            transform:`translate(0%,-100%)`,
            opacity:0,
     
          })

          // show table yes

          let tableyes=gsap.timeline({
            scrollTrigger:{
                trigger:'#earlydays',
            
                scrub: 1,
            
            },
         
        })
      
        tableyes.to('#table-yes',{visibility:'inherit',
        opacity:1,
        transform: 'translate(0%, -16.7%) translate3d(0px, 0px, 0px)'})
        .to('#table-yes',{
      
          transform:`translate(0%,-100%)`,
          opacity:0,
   
        })


        //clooud animation


        // cloud-3 

        let cloud3= gsap.timeline({
          scrollTrigger:{
            trigger:'#earlydays',
            scrub:3,
            delay:2,
            start:'top center',
            end:'top top'
          }
        })
        
        cloud3.to('.cloud-3',{
   
            opacity:1,
           transform:' translate(-20%, -85%) translate3d(-1024.5px, -521px, 0px)'
          
        })
 
        //cloud-2
        let cloud2= gsap.timeline({
          scrollTrigger:{
            trigger:'#earlydays',
            scrub:3,
            delay:2,
            start:'top center',
            end:'top top'
          }
        })

        cloud2.to('.cloud-2',{
          opacity:1,
          transform: 'translate(85%, -50%) translate3d(-1024.5px, -521px, 0px)'
         })

         
        
        //cloud-3

        let cloud1=gsap.timeline({
          scrollTrigger:{
            trigger:'#earlydays',
            scrub:5,
            delay:2,
            
          }
        })

        cloud1.to('.cloud-1',{
        transform:'translate(-20%, -85%) translate3d(-1024.5px, -521px, 0px)'
        })

        // show up ground and sky

        let groudAndsky= gsap.timeline({
          scrollTrigger:{
            trigger:'#earlydays',
            scrub:true,
            start:'top center',
            end:'top top'
          }
        })

        groudAndsky.to('#ground',{
          visibility:'inherit',
          opacity:1
        })
// hide ground and sky

let hideGroundAndsky= gsap.timeline({
  scrollTrigger:{
    trigger:'#atncl',
    scrub:1,
    start:'top center',
    end:'top top'
  }
})

hideGroundAndsky.to('#ground',{
  
  opacity:0
})

// code book videogames






let showCode = gsap.timeline({
  scrollTrigger:{
    trigger:'#code',
    scrub:1,
    start:'top center',
    end:'top top'
    
  }
})

showCode.to('.lines',{
  visibility:'inherit',
  opacity:1,
  transform:'matrix(1,0,0,1,0,0)'
}).to('.lines',{
 
  transform:'translate(0%,-100%)',
  opacity:0
})


// cloud in sections codedecs

TweenMax.set('.c1',{
  xPercent:0,
  yPercent:50
})

TweenMax.set('.c2',{
  xPercent:80,
  yPercent:50,

})



let cloudTimeline= gsap.timeline({
  scrollTrigger:{
    trigger:'#codedesc',
    scrub:true,
    start:'top center',
    end:'top top'
  
  }
})

cloudTimeline.to('.sky_2',{
  opacity:1,
  visibility:'inherit',

})


// changing background skh


let changeSkyBg= gsap.timeline({
  scrollTrigger:{
    trigger:'#dailyroutine',
    
  }
})


changeSkyBg.to('.sky_2',{
  background:'linear-gradient(180deg,#0497d1 3rem,rgba(4,151,209,0))'
})


let cloud_2Scale=gsap.timeline({
  scrollTrigger:{
    trigger:'#codedesc',
    scrub:3
  }
})

cloud_2Scale.to('.c2',{
  scale:2
 
})

let cloud_1Scle=gsap.timeline({
  scrollTrigger:{
    trigger:'#codedesc',
    scrub:3
  }
})
cloud_1Scle.to('.c1',{
    xPercent:-100,
    scale:2
})


// grass animation


TweenMax.set('.grass1',{
  xPercent:0
})


let grassAnim =gsap.timeline({
  scrollTrigger:{
    trigger:'#dailyroutine',
    scrub:3
  }
})

grassAnim.to('.grass1',{
  xPercent:-100
})

let hideBG=gsap.timeline({
  scrollTrigger:{
    trigger:'#dailyroutine',
    scrub:1,
    start:'top center',
    end:'top top'
  
   
  
  }
})

hideBG.to('.sky_2',{
  opacity:0
})

        },[])
        

// components

    return (
        <div id="home" className="container-fluid wrapper" >
              <div className="row">
                    
                   {/* left sections */}
               <div className="col-1 col-lg-4">

             
               <div class="spine"></div>
               <div class="spine-target">
                <div class="circle" style={{opacity:0}} ></div>
                <div class="pulse" style={{opacity:0}}></div>
              </div>
                    <div   className="container">
   
                         
                     {/* square purple svg */}
                      <svg xmlns="http://www.w3.org/2000/svg"style={{visibility: 'hidden', opacity: 0, transform: 'matrix(0, 0, 0, 0, 0, 0)'}}id="open" viewBox="0 0 100 100">
                        <g class="open-open" data-svg-origin="50 50.00416564941406" >
                          <path fill="var(--purple)" d="M90 70.2l-2-44.1c-.5-9.3-8.4-16.5-17.8-16.1l-44.1 2c-9.3.5-16.5 8.4-16.1 17.8l2 44.1c.4 9.3 8.4 16.6 17.7 16.1l44.1-2c9.4-.5 16.6-8.4 16.2-17.8z"></path>
                       </g>
                      </svg>
         {/* triangle purple svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" style={{visibility: 'hidden',opacity: 0,transform: 'matrix(0, 0, 0, 0, 0, 0)'}} id="smart" viewBox="0 0 100 100" >
                         <g class="smart-smart" transform='matrix(1,0,0,1,0,0)' data-svg-origin="49.99407482147217 49.99379062652588" >
                          <path fill="#682ae9" d="M80.1 39.2L34.2 11.9c-8.8-5.2-19.9 1-20.1 11.2l-.7 53.4c-.1 10.2 10.8 16.7 19.8 11.8l46.6-26.1c8.9-5 9.1-17.8.3-23z"></path></g>
                      </svg>
        {/* coffee svg */}
                       <svg xmlns="http://www.w3.org/2000/svg" style={{visibility: 'hidden', opacity: 0,transform: 'translate(400%, 100%) matrix(0, 0, 0, 0, 0, 0)', left: '1168px',top: '214.2px'}} id="coffee" viewBox="0 0 20 20">
                          <g transform=" matrix(1,0,0,1,0,0)" class="coffee-coffee"  data-svg-origin="9.978446006774902 9.95466423034668" >
                            <path fill="#7b4dad" d="M17.8 5.5c-.5-.3-1.1-.3-1.6-.1v-.2c-.1-.6-.2-2.6-8-1.4S.9 7 1 7.7c.4 2.7 2.4 5.7 5.2 6.9 0 .2 0 .3.1.5.2 1.1 1.9 1.6 3.9 1.3 2-.3 3.4-1.3 3.2-2.4 0-.2-.1-.4-.1-.5.7-.6 1.3-1.4 1.7-2.2.2.1.4.3.6.4.3.2.7.2 1 .2.8-.1 1.6-.9 2.1-2.1.6-2 .3-3.7-.9-4.3zm-.1 3.7c-.4 1.1-1.2 1.7-1.8 1.4-.2-.1-.3-.2-.4-.3.5-1.2.8-2.4.8-3.6.2-.1.4-.2.5-.2.2 0 .4 0 .5.1.7.3.8 1.4.4 2.6z" class="coffee-cup"></path>
                            <path fill="#3e1e00" d="M8.4 4.9C5 5.4 2.4 6.4 2.5 7c.1.7 2.9.8 6.2.3 3.3-.5 6-1.5 5.9-2.2s-2.9-.7-6.2-.2z" class="coffee-liquid"></path></g>
                       </svg>
                      

       {/* astro boy svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" style={{visibility: 'hidden', opacity: 0, transform: 'translate(400%, 100%) matrix(0, 0, 0, 0, 0, 0)', right: '0px', bottom: '243.25px'}} id="astro" viewBox="0 0 100 100" aria-labelledby="astroDesc" >
                         <desc id="astroDesc">An astronaut in a purple space suit, floating in space trying to reach for his</desc>
                         <g class="astro-astro" data-svg-origin="47.869708776474 49.372182697057724" transform="matrix(1,0,0,1,0,0)" >
                            <g class="astro-tube" data-svg-origin="62.29999923706055 59.32244873046875" transform="matrix(0.96592,-0.25881,0.25881,0.96592,-13.23095853736865,18.14578973542362)" style={{transformOrigin:' 0px 0px 0px'}}>
                               <path fill="none" stroke="#e2f1f7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.061" d="M62.3 58.8s10.4 3.6 14.5-8.1-8.6-18.4-8.6-18.4"></path>
                             </g>
                            <g class="astro-l-arm" data-svg-origin="39.36406917572022 56.3940673828125" transform="matrix(1,0,0,1,0,0)">
                               <path fill="#8b55bb" d="M34.4,58.8L16.7,45.3c-1.2-0.9-1.4-2.6-0.5-3.8l4.3-5.7c0.9-1.2,2.6-1.4,3.8-0.5L42,48.8 C42,48.8,34.4,58.8,34.4,58.8z"></path>
                            </g>
                            <g class="astro-l-leg" data-svg-origin="38.8751106262207 64.57488746643067" transform="matrix(0.9848,0.17364,-0.17364,0.9848,11.803911813904065,-5.769554477244654)" style={{transformOrigin: '0px 0px 0px'}}>
                              <path fill="#8b55bb" d="M38.9 76.7L18.3 91.4c-1.2.9-2.9.6-3.8-.6L8 81.7c-.9-1.2-.6-2.9.6-3.8l20.6-14.8c3.7-2.7 9-1.8 11.6 1.9 2.7 3.8 1.8 9-1.9 11.7z"></path>
                           </g>
                            <g class="astro-head" data-svg-origin="54.400001525878906 47.930000686645506" transform="matrix(0.96592,-0.25881,0.25881,0.96592,-15.33156221278879,15.712931617865486)"style={{transformOrigin: '0px 0px 0px'}}>

                              <path fill="#a95ed4" d="M78.3 28.9c0 7.1-3.1 13.4-8 17.8-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6-3-4-4.7-8.9-4.7-14.2C30.5 15.7 41.2 5 54.4 5s23.9 10.7 23.9 23.9z"></path>
                              <path fill="#563388" d="M70.3 46.7c-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6 4.4-3.1 9.7-4.9 15.5-4.9 7.7 0 14.7 3.3 19.6 8.5z"></path>
                              <path fill="#170609" d="M32.4 28.8c-.4-7.3 3.8-15.3 11.5-18.3s21-1.2 23.4 9.5c2.4 10.7-7.8 10.9-17 11.8-9.2.9-17.2 9.6-17.9-3z"></path>
                              <path fill="#fff" d="M46.8 14.2c4.7-1 9.1-.8 12.3.3 0-.5-.7-1.2-2.6-1.8-12-3.8-20.8 6.9-20.8 6.9h.1c2.4-2.4 6.4-4.4 11-5.4z"></path></g>
                          <g class="astro-body" data-svg-origin="60.00657272338867 61.394596099853516" transform="matrix(1,0,0,1,0,0)" >
                              <path fill="#a95ed4" d="M68.9 61.3c.2-1.5 1.3-2.8 2.8-3.1l19.2-4c1.1-.2 1.8-1.3 1.6-2.5l-1.9-8.6c-.2-1.1-1.3-1.8-2.5-1.6L67.6 46c-18.6-13.4-40.9.7-40.1 19 .8 21 38.6 25.8 41.4-3.7z"></path>
                          </g>

                          <g class="astro-r-leg" data-svg-origin="42.77762908935547 67.08769836425782" transform="matrix(0.9848,-0.17364,0.17364,0.9848,-10.999768258144428,8.447470219670748)" style={{transformOrigin: '0px 0px 0px'}}>
                              <path fill="#a95ed4" d="M44.4 75.9l-8.5 17.6c-.7 1.4-2.3 1.9-3.6 1.3l-10.1-4.9c-1.4-.7-1.9-2.3-1.3-3.6l8.5-17.6c2-4.1 7-5.9 11.1-3.9 4.2 2 5.9 7 3.9 11.1z"></path>
                          </g>
                        </g>
                     </svg>
  

              {/* dino svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" id="dino" viewBox="0 0 100 100" aria-labelledby="dinoDesc" style={{transform: 'translate(400%, 100%) matrix(0, 0, 0, 0, 0, 0)', visibility: 'hidden', opacity: 0}} >
  
                         <desc id="dinoDesc">A purple dinosaur with a red headset, listening and dancing to the music</desc>
                          <g class="dino-dino">
                              <g class="dino-l-arm" data-svg-origin="36.195858001708984 54.499996185302734" transform="matrix(1,0,0,1,0,0)" >
                                 <path fill="none" stroke="#7f4fb2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.138" d="M55,63.8c0,0-8,2.9-12.6,0.9s-6.3-6.3-6.2-10.2"></path>
                             </g>
                              <g class="dino-tail" data-svg-origin="64.87775802612305 78.39898681640625" transform="matrix(1,0,0,1,0,0)" >
                                  <path fill="#7f4fb2" d="M69 74.1c5.7.7 10.7-1.8 12.8-3 .5-.3 1.1.1 1 .7-1.8 11.9-23.1 13.6-23.9 14L69 74.1z"></path>
                             </g>
                             <g class="dino-l-leg" data-svg-origin="49.81098175048828 94.91090393066406" transform="matrix(1,0,0,1,0,0)">
                                  <path fill="#7f4fb2" d="M55.3 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6H54c.8.1 1.3-.5 1.3-1.3z"> </path>
                              </g>
                             <g class="dino-head" data-svg-origin="76.02258262634277 87.5" transform="matrix(1,0,0,1,0,0)">
                                 <g class="dino-back-hair">
                                   <path fill="#002c58" d="M59.6 15.7S59.7 7 56.8 7s-7 7.4-7 7.4l9.8 1.3z"></path>
                                   <path fill="#002c58" d="M66.5 19.7s2.3-8.4-.5-9.1-8.6 5.4-8.6 5.4l9.1 3.7z"></path>
                                  </g>
                                 <path fill="#e7edf1" d="M47.1 48.6H44l1.2 2.7c.1.3.6.3.7 0l1.2-2.7z" class="teeth1"></path>
                                 <path fill="#ab63d6" d="M66.5 53c-.9-2.1-1.2-5.3-1.2-8.9 0-7.4 1.5-16.6 2.1-22.1.3-2.5-1.3-4.9-3.8-5.5-2.7-.6-6.6-1.5-10.8-2-10.8-1.2-24.7-.5-31.3 10-1.8 2.8-8 17.9-1.1 21.7 5.6 3 24.3 3.4 30.1 2.7-.3 4-11.5 10.7-11.5 22.3 0 9.1 7.7 16.3 16.9 16.3 9.3 0 16.9-7.6 16.9-16.9 0-7.4-4.6-13.6-6.3-17.6z"></path>
                                 <path fill="#9660c7" d="M67.5 22c-.7 5.4-2.1 14.6-2.1 22.1 0 0-3.8.6-4.8-8.7s7.1-18.6-7.7-20.8h-.1c4.3.5 8.1 1.3 10.8 2 2.5.6 4.2 2.9 3.9 5.4z"></path>
                                 <path fill="none" stroke="#002c58" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".428" d="M47.7 49.1c9 .1 12.9-2 14-5.5" class="mouth-chillout"></path>
                                 <path fill="none" stroke="#002c58" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".428" d="M54.6,47.1c-0.6,0-0.7,1-3,1" class="mouth-fuck-yeah" ></path><path fill="#e7edf1" d="M47.7 49.1l1.6 3c.2.3.7.3.9 0l1.2-2.6.2-.5-3.9.1z" class="teeth2"></path>
                                    <g class="dino-headphone" data-svg-origin="43.715554809570314 15.66422233581543" transform="matrix(1,0,0,1,0,0)" >
                                      <path fill="#ff0110" d="M71.5 28.1l.6-3.5-6.2-.6-.9 3.8 6.5.3z"></path>
                                      <path fill="#ff0110" d="M61.1 35.1c0 7.9 6.3 8 8.5 8 3.5 0 4.1-3.6 4.1-8s-.6-8-4.1-8c-4.1 0-8.5.9-8.5 8z"></path>
                                      <path fill="#ff5153" d="M63.8 35.1c0 4.5 2.3 8 5.8 8 3 0 6.3-3.6 6.3-8s-2.8-8-6.3-8-5.8 3.5-5.8 8z"></path>
                                      <path fill="#ff5153" d="M33.4 15.7c-.4-.4-.4-.7-.3-1.2 2.1-12.1 24.2-7.2 34-3.8 8.3 3 6.7 11 5.8 14-.2.7-.9 1.1-1.5 1l-4.4-.3h-.7c-.9-.1-1.6-1-1.3-1.9.5-1.4 1-3.4 1.2-5.4.2-2.6-.4-5.1-3-5.9-5.7-1.6-24-7.1-27.2 2.8 0 0-.8.2-1.4.3-.5.2-1.2.4-1.2.4z"></path>
                                      <path vector-effect="non-scaling-stroke" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M76.5 32.5c2.1-1.8 4.4-3.5 6.7-4.9m-10 .5c.7-1.7.8-7.1-.6-8.6m4.6 18.7c2.5-.4 2 .1 2 2.3 2-.8 5.4.3 7.2 1.8m-11.6.8c-4 3.8 3.6 1.8 3 4.3-.3.9-2.5 1.4-2.4 2.5.7.8 1.7 1.2 2.8 1.3" class="dino-sounds"> </path>
                                  </g>
                            <g class="dino-eye" data-svg-origin="53 40.29999923706055" transform="matrix(1,0,0,0.09999,0,36.26999931335449)" style={{transformOrigin: '0px 0px 0px'}}>
                                <circle cx="53" cy="40.3" r="2.8" fill="#002c58"></circle>
                                <circle cx="53.7" cy="38.7" r=".7" fill="#e7edf1" class="dino-bright" style={{visibility: 'inherit', opacity: 1}}>
                                </circle>
                            </g>
                             <g class="dino-front-hair">
                                 <path fill="#002c58" d="M34.8 15.3c-.3-.6-2.8-4.8-4.4-3.7-1.5 1.1-.9 4.8-.8 5.6 1.7-.8 3.4-1.4 5.2-1.9z"></path>
                                 <path fill="#002c58" d="M42.2 14.2c-.5-1.1-3.2-6.6-4.8-6-1.4.5-2.1 5.1-2.4 7.1 2.3-.6 4.8-1 7.2-1.1z"></path>
                                 <path fill="#002c58" d="M50.8 14.4c-.2-1.4-2-9.4-4.2-9.4-2.3 0-4.1 8-4.3 9.2 2.9-.2 5.8-.1 8.5.2z"></path>
                            </g>
                            </g>
                              <g class="dino-r-leg" data-svg-origin="61.91644096374512 94.91090393066406" transform="matrix(1,0,0,1,0,0)" >
                                <path fill="#ab63d6" d="M67.4 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6h8.4c.8.1 1.4-.5 1.3-1.3z"></path></g>
                             <g class="dino-r-arm" data-svg-origin="52.70000457763672 59.400001525878906" transform="matrix(1,0,0,1,0,0)" >
                
                                <path fill="none" stroke="#ae71db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.138" d="M64.8 59.4s4.1 6.6-.6 8.3c-4.8 1.6-9-.3-11.5-3.3"></path>
                               </g>
                           </g>
                        </svg>
      
                        </div>
                             
                    </div>

{/* right sections */}
                    <div  className="col-11 col-lg-7" style={{marginTop:window.innerHeight/2-56+'px'}}>

                        {/* firman.init section */}
              
                        <section  id="intro">
                            <div className="static-container">
                        
                             <h1  className="title text-light" id="firman" style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)',transformOrigin: '50% 50% 0px'}} >
                                    <span>Firman</span>
                                    <span className="text-primary">.init()</span>
                              </h1>
                              <div className="std" id="yudistia" style={{visibility:'hidden',opacity:0,transform:'translate(-15%,0%)'}}>
                              <p className=" text-primary">Firman Hadi Yudistia</p>
                                  <p className=" text-light">Web and Mobile Developer</p>
                              </div>
                                  
                         
                          
                              </div>
                        </section>
                     
                       {/* gap between section */}
                        <div className="gap"></div>

                     
                  {/* curriculum vitae sections */}
                        <section id="vitae">
                            <div className="title-container" >
                                    <h1 className="title text-light" id="preserve" style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)',transformOrigin: '50% 50% 0px'}} >CurriculumVitae(<span className="text-primary">\s@/</span>)</h1>
                                  <p id='showcase' style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 100, -100, 1)',transformOrigin: '50% 50% 0px'}} className="std text-std">{`<life+work showcase>`}</p>
                            </div>
                        </section>
                           
                                   
                          
                          
                                  
                           
                   
                   <div className="gap"/>
                   <div className="gap"/>
                   <div className="gap"/>

                    {/* Draw timeline sections */}
                        
                      

                    {/* tom bilyeu quotes */}
                             <section className="scene pt-5" id="quotes"> 
                                <div className="static-container font-italic">
                                    <p className="quotes text-light ">"its not about who you are today  </p>
                                     <p className="quotes text-primary">its about who you want to become</p>
                                     <p className="quotes text-primary">and the price you are willing </p>
                                     <p className="quotes text-primary"> to pay to get there<b className="text-light">"</b></p>
                                     <p className="std text-light" >-Tom Bilyeu</p>
                                  
                                </div>
                        </section>

                    {/*  throughout this year sections */}

                        <section className="scene pt-5" id="about"> 
                        <div className="static-container">
                                <div className="std">
                                <p className="big text-light">Throughtout this year i have been challenging myself 
                                    <b className="text-primary"> by developing web and mobile apps that i've never developed before</b><b className="text-light">.</b>
                                   </p>
                                    <p className="text-light"> as well as sharpening my problem solving skill by solving every single challenge from <a style={{cursor:'pointer'}} href="www.codewars.com" className="text-primary">www.codewars.com</a>  </p>
                                </div>
                                    
                                </div>
                        </section>

                    {/* for past 3 months */}
                        <section className="scene pt-5" id="daily"> 
                        <div className="static-container">
                                  <div className="std">
                                    <p className="big text-light">For the past 3 months i have,
                                        <b className="big text-primary"> deployed 2 web apps and developed 2 mobile apps<b className="text-light">.</b></b>
                                     </p>
                                    <p className="text-light">including this personal web sites, e commerce web apps, booking apps(mobile apps), as well as 
                                        i have made a mobile version of my e commerce web apps. 
                                    </p>
                                    </div>
                                </div>
                        </section>

                    {/* early days */}

                    <section className="scene" id="earlydays">
                                   <div id="t-container" className="title-container" style={{visibility:'hidden',opacity:0}} >
                                    <h1 id="early" style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)',transformOrigin: '50% 50% 0px'}} className="text-light title">Early Days(<span className="text-primary">2015,2020</span>)</h1>
                                     <p id='table-yes' style={{ visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 100, -100, 1)',transformOrigin: '50% 50% 0px'}} className="std text-std">{`<table+yes>`}</p>
                                     <div class="clouds  cloud-1" style={{transform: 'translate(20%, 50%) matrix(1, 0, 0, 1, -1095, -521)'}}></div>

                                     <div class="clouds cloud-2" style={{transform: 'translate(-10%, 40%) matrix(1, 0, 0, 1, -1095, -521)'}} ></div>
                                     <div class="clouds cloud-3" style={{transform: 'translate(40%, 70%) matrix(1, 0, 0, 1, -683, -347.5)'}} ></div>
                                     <div role="img" aria-labelledby="pepeDesc" class="pepe-scenery" id="ground" style={{ visibility: 'hidden', opacity: 0}}>
                                   
                                       <div class="sky"></div>
                                       <div class="ocean">
                                       <div class="sky-mask"></div>
                                     
                                       </div>
                                       </div>
                                      
                            </div>

                    </section>

                    <div className="gap"/>
                    <div className="gap"/>
{/* Ihg Dubai */}
                    <section className="scene pt-5" id="ihgdubai"> 
                        <div className="static-container italic">
                                   <div className="std">
                                   <p className="text-light">2015-2017 </p>
                                    <p className="big text-light">Room Service Waiter at
                                        <b className="big text-primary">  Intercontinental Dubai Marina<b className="text-light">.</b></b>
                                     </p>
                                   </div>
                                   
                                </div>
                        </section>
{/* ncl  */}
                        <section className="scene pt-5" id="atncl"> 
                        <div className="static-container">
                                   <div className="std">
                                   <p className=" text-light">2018-2020 </p>
                                    <p className="big text-light">Assistant Waiter <b className="text-primary">{`&`}</b> Pasadore  <b className="text-primary">{`&`}</b> Waiter
                                        <b className="big text-primary"> at Norwegian Cruise Line<b className="text-light">.</b></b>
                                     </p>
                                      <p className="text-light">Norwegian Cruise Line is a leading global cruise company with a combined fleet of 28 ships <b className="text-primary" >.</b> 
                                    </p>

                                   </div>
                                   
                                </div>
                        </section>     
{/* programmers */}
                        <section className="scene pt-5" id="programmers"> 
                        <div className="static-container">
                                   <div className="std">
                                   <p className="text-light">2021 {`>=`} ? </p>
                                    <p className="big text-light">Web <b className="text-primary">{`||`}</b> Mobile Developer
                                        <b className="big text-primary"> at <b className="text-light">?</b></b>
                                     </p>
                                      <p className="text-light"><b className="text-primary" >. . .</b> i'll be happy to rehearse everything why i've decided to become programmers once we have conversation
                                    </p>
                                   </div>
                                  
                                </div>
                        </section>   
{/*code read games  */}
                      <section id="code">
                            <div className="title-container" >
                            <h1 class="title" id="t-lines" style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                              <span id="line-1" class="lines" style={{visibility: 'hidden', opacity: 0,transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)', transformOrigin: '50% 50% 0px'}}>
                                  <span className="text-primary">`${`{`}</span>Code<span className="text-primary">{`}`}</span>
                              </span>
                              
                              <span class="lines" style={{visibility: 'hidden', opacity: 0, transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)', transformOrigin: '50% 50% 0px'}}>
                              <span className="text-primary">&nbsp;${`{`}</span>Motivation<span className="text-primary">{`}`}</span>
                              </span>
                              <span class="lines" style={{visibility: 'hidden', opacity: 0,transform: 'translate(0%, -50%) matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -100, -100, 1)',transformOrigin: '50% 50% 0px'}}>
                                  <span className="text-primary">&nbsp;${`{`}</span>Games<span className="text-primary">{`}`}`</span>
                            
                              </span>
                              </h1>
                            </div>
                        </section>

                        <div className="gap"/>


                        <section id="codedesc">
                                <div className="static-container">
                                   <div className="std">
                                   <p className="text-light">being a web or mobile developer means a direct contribution to digital world, i want to create fine arts that people around the world could   </p>
                                    <p className="big text-primary">Seen <b className="text-light">{`,`}</b> Enjoyed <b className="text-light">{`and`}</b> get benefit from its
                                       
                                     </p>
                                      <p className="text-light"> that's why everyday i keep update and learning programming at any risks
                                    </p>
                                   </div>
                                   
                                </div>
                        </section>

                        <section id="dailyroutine">
                                <div className="static-container">
                                  <div className="std">
                                  <p className="big text-light">Meanwhile <b className="text-primary">{`...`}</b> </p>
                                    <p className="big text-light">i love to reads <b className="text-primary"> Motivational Books</b> <b className="text-primary"><b className="text-light">{`,`}</b>  Japanese Manga</b> <b className="text-light">{`and`}</b> playing<b className="text-primary"> MOBA GAMES</b> </p>
                                    <p className="text-light">motivation books help me to keep motivated and get inspired everyday, japanese manga has an impact to increase my creativity and playing moba games train my mind to think faster</p>
                                  </div>
                                    
                                </div>
                                <div class="container" >
                                   <div class="sky_2" style={{visibility: 'hidden', opacity: 0}} >
                                     <div class="cloud c1" ></div>
                                     <div class="cloud c2" ></div>
                                     <div class="grass1" ></div>
                                    </div>
                                 
                                   
                               </div>
                        </section>

                        <div className="gap"/>
{/* poet */}
                        <section id="wrapperTitle" class="scene">
                          <div class="static-container" ><h1 class="title text-primary">
                           &lt;/wrapper&gt;
                          </h1>
                          <div class="std">
                          <p class="-gray">
                          {`/*`}<br/>
                             - Close your eyes. What do you hear?<br/><span class="-answer">- I hear the water, I hear the birds.</span><br/>
                             - Do you hear your own heartbeat?<br/><span class="-answer">- No.</span><br/>
                             - Do you hear the grasshopper which is at your feet?<br/><span class="-answer">- Old man, how is it that you hear these things?</span><br/>
                             - Young man, how is it that you do not?<br/>
                               */
                         </p>
                         </div>
                        </div>
                      </section>

                  <section id="thanks" className="scene">
                  <div class="static-container">
                  <div class="std">
                  <svg xmlns="http://www.w3.org/2000/svg" id="potion" viewBox="0 0 100 100">
                    <g class="potion-potion">
                    <g class="potion-vase">
                    <g class="potion-bottle">
                    <path fill="#00c8c8" d="M55.6 23.2H44.8c-2.1 0-3.8-1.8-3.8-3.8l.1-6.4c0-1.6 1.4-3 3-3l12.6.1c1.6 0 3 1.4 3 3l-.1 6.4c-.3 2-2 3.7-4 3.7z"></path>
                    <path fill="#fff" d="M64.7 25.8c0-.2.2-6.2.2-6.2.1-2.2-1.8-4.1-4-4l-20.4-.1c-2.2 0-4 1.8-4 4.1 0 0 .1 5.9 0 6.2C25.8 31 18.6 42 18.6 54.7 18.4 72.5 32.6 87 50.1 87c17.5.1 31.9-14.3 32-32.2.1-12.8-7-23.7-17.4-29zm10.1 28.8c-.1 13.7-11.1 24.7-24.6 24.7-13.5-.1-24.4-11.2-24.3-24.9S37 29.7 50.5 29.7c13.4.1 24.4 11.2 24.3 24.9z" opacity=".8"></path>
                    <path fill="#e8d7ef" d="M50.4 29.7c-13.5 0-24.5 11.1-24.6 24.7 0 13.7 10.8 24.9 24.3 24.9s24.5-11.1 24.6-24.7c.2-13.7-10.8-24.8-24.3-24.9z" opacity=".8"></path>
                    <g class="potion-liquids">
                      <path fill="#4612a5" class="potion-liquid2">
                      <animate dur="1.6s" repeatCount="indefinite" attributeName="d" values="M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;
                     M73.5 50.4c-.9-4.8-1 5.3-4.4 5.9-11 2-19.7-6.3-36-3.9-5.5.8-6.6 3.3-6.1 6.3 2.3 12.7 14.6 21.3 27.4 19 12.9-2.2 21.4-14.4 19.1-27.3z;
                     M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;" calcMode="spline" keySplines="0.455 0.03 0.515 0.955;
                     0.455 0.03 0.515 0.955"></animate>
                     </path>
                     <path fill="#5918df" class="potion-liquid">
                      <animate dur="1.4s" repeatCount="indefinite" attributeName="d" values="M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;
                     M27.1 58.8c-.9-4.8 2.8 2.9 6.2 2.2 9.9-1.8 21.9-13.1 33-14.6 5.5-.7 6.6.9 7.1 3.9 2.3 12.7-6.2 25.1-19 27.4-12.7 2.5-24.9-6-27.3-18.9z;
                     M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;" calcMode="spline" keySplines="0.455 0.03 0.515 0.955;
                     0.455 0.03 0.515 0.955"></animate></path>
                     </g>
                     </g>
                     <g class="potion-drops">
                       <ellipse cx="49.4" cy="37.5" fill="#5918df" rx="4.6" ry="4.6" class="potion-drop2" data-svg-origin="44.80000305175781 32.900001525878906" transform="matrix(1,0,0,1,0,9.199999809265137)" ></ellipse>
                       <ellipse cx="59.8" cy="42" fill="#5918df" rx="2.8" ry="2.8" class="potion-drop" data-svg-origin="57 39.20000076293945" transform="matrix(1,0,0,1,0,5.599999904632568)">
                        </ellipse>
                      </g>
                      </g>
                      </g>
                      </svg>
                      <div class="madeof">
                      <p class="-comment">{'// Made with'}</p>
                      <div class="cols">
                        <ul class="col">
                        <li class="ico">&lt;/&gt;</li><li>React.js</li><li>GSAP</li><li>ScrollTrigger</li><li>Photoshop</li></ul>
                        <ul class="col"><li class="ico">~</li><li>+320h of thinking</li><li>+76 hours of code</li><li>+72 cups of coffee</li><li>+24 hours learning GSAP</li><li>4 packages Gudang Garam Merah</li></ul>
                   </div></div>
             <p className="text-light">
                Thanks for checking my website!<br/><span class="-comment">{`// It's a work in progress so check back often!`}</span></p>
              <p class="big text-light">
                Check out my <a href="/projects" class="text-primary" title="Work">selected projects</a> for more details.
            </p>
            </div>
          </div>


                  </section>
                    </div>  
                </div>          
        </div>
                                   
                                   
                                   
                                   
                      
    
    )
}

export default Init
                                  
 








 
          
   
   
                         
              
           
               


                     
                                 
                                  
                      
                                  






                 

                  
                     
                            
                     
                    
                    
                  
                  
                
