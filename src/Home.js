
import './style.css'
import personal from './photo_5902243040435747671_y.jpg';
import laptop from './ee3369f79097a1e4c1c95742b2483a15_prev_ui.png';
import myfood from './myfood.PNG';
import playsound from './playsound.PNG'
import { useRef } from 'react';
import send from './668_prev_ui.png'
import reem from './reem.pdf'
import logo from './Elegant Circle Signature Photography Logo_prev_ui.png'
import Hamburger from 'hamburger-react'
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiCodepen } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGmail } from '@mdi/js';

export default function Home(){
    const leftArrow = useRef('<');
    const rightArrow = useRef('>');
    function sendEmail() 
  {
      window.location = "mailto:@reemsellat@outlook.com";
  }
    return (
      <div >
  
        <div className='hamburger-react' ><Hamburger color='#FE4789' onToggle={toggled => {
          if (toggled) {
            document.getElementById('side-bar').style.right = '0'
          } else {
            document.getElementById('side-bar').style.right = '-75vw'
          }
        }}></Hamburger></div>
        <div id='side-bar'>
          <span>01.</span>
          <nav>
            <a href='#part-3' onClick={(e)=>{
         
              document.getElementsByClassName('hamburger-react')[0].childNodes[0].click()
            }}>About</a>
          </nav>
          <span>02. </span>
          <nav>
            <a href='#part-4' onClick={(e)=>{
                document.getElementsByClassName('hamburger-react')[0].childNodes[0].click()
            }}>Skills</a>
  
          </nav>
          <span>03. </span>
          <nav>
            <a href='#part-5' onClick={(e)=>{
                 document.getElementsByClassName('hamburger-react')[0].childNodes[0].click()
            }}>Projects</a>
  
          </nav>
          <span>04. </span>
          <nav>
            <a href='#part-6' onClick={(e)=>{
               document.getElementsByClassName('hamburger-react')[0].childNodes[0].click()
            }}>Contact</a>
  
          </nav>
            
           
           
           
         
          
        </div>
        <div id='social-media'>
          <a href='https://github.com/reemsellat' target='_blank'> <Icon path={mdiGithub} size={1.5} /></a>
          <a href='https://codepen.io/Reem-Sellat' target='_blank'><Icon path={mdiCodepen} size={1.5} /></a>
          <a><Icon path={mdiLinkedin} size={1.5} /></a>
          <a><Icon path={mdiGmail} size={1.5} /></a>
        
        </div>
        <div id='part-1'>
          <img id='logo' src={logo}></img>
          <nav>
            <a href='#part-3'><span>01. </span>About</a>
          </nav>
          <nav>
            <a href='#part-4'><span>02. </span>Skills</a>
  
          </nav>
          <nav>
            <a href='#part-5'><span>03. </span>Projects</a>
  
          </nav>
          <nav>
            <a href='#part-6'><span>04. </span>Contact</a>
  
          </nav>
          <a href='./reem.pdf' target='_new'>
          <div id='resume'>
             <button>Resume</button>
             </div>
          </a>
         
        </div>
  
        <div id='part-2'>
          <p>Hi there, my name is</p>
          <h1>Reem Sellat</h1>
          <h1>A <span>Frontend</span> developer.</h1>
        </div>
        <div id='part-3'>
          <div>
            <h2><span>01. </span>About me</h2>
            <p>My name is Reem, 21 years old IT student from Syria, I started coding in 2020 by participating in ACM programming contest, and this was where I loved programming and gained some skills in algorithms, and critical thinking.
              Then I started learning web development in 2022, which became my passion, focusing on frontend, and ux/ui  with a basic knowledge of backend .Also I love music and coffee :)
  
            </p>
          </div>
  
          <div>
            <img src={personal}></img>
          </div>
        </div>
        <div id='part-4'>
          <div>
            <h2><span>02. </span>My skills</h2>
            <div id='skills'>
              <div>
                <p style={{ color: '#2FA406' }}>{leftArrow.current}- - -frontend- - -{rightArrow.current}</p>
                <p>.HTML<br></br>.CSS3<br></br>.Javascript<br></br>.Typescript<br></br>.Reactjs<br></br>.Redux<br></br>.Tailwind<br></br>.Sass<br></br>.Jest</p>
                <p style={{ color: '#2FA406' }}>{leftArrow.current}- - - - -{rightArrow.current}</p>
              </div>
              <div>
                <p style={{ color: '#2FA406' }}>{leftArrow.current}- - -backend- - -{rightArrow.current}</p>
                <p>.Nodejs<br></br>.MongoDB<br></br>.Express<br></br>.Firebase<br></br>.git</p>
                <p style={{ color: '#2FA406' }}>{leftArrow.current}- - - - -{rightArrow.current}</p>
              </div>
            </div>
  
          </div>
          <div>
            <img src={laptop}></img>
          </div>
  
        </div>
  
        <div id='part-5'>
  
          <div>
            <h2><span>03. </span>My Projects</h2>
            <div id='project-1'>
              <a href='https://reemsellat.github.io/myfood/' target='_blank'><img src={myfood}></img></a>
              <div>
                
                <div className='project-desc'>
                <h3>Ecommerce Website</h3>
                  <p>
                    Ecommerce Website which has
                    Authentication System, shopping cart, rating system, reviews, it’s responsive
                  </p>
                  <h4>Tools</h4>
                  <p>
                    .Firebase<br></br>
                    .Reactjs<br></br>
                    .Sass<br></br>
                    .Typescript
                  </p>
                  <div className='icons'>
                    <a href='https://github.com/reemsellat/myfood' target="_blank">
                      <Icon path={mdiGithub} size={1} />
                    </a>
                  
                  <a href='https://reemsellat.github.io/myfood/' target='_blank'>
                    <Icon path={mdiOpenInNew} size={1} />
                  </a>
                  
                  </div>
                  
                </div>
              </div>
            </div>
            <div id='project-2'>
              <div className='project-desc'>
                <h3>Music Player Website</h3>
                <div>
                  <p>
                    App which you can pick your album and listen to it, upload your music with authorization and authentication ,and dark and light mode
                  </p>
                  <h4>Tools</h4>
                  <p>
                    .Nodejs<br></br>
                    .MongoDB<br></br>
                    .Tailwind<br></br>
                    .Express<br></br>
                    .Reactjs<br></br>
                    .Redux<br></br>
                    .Javascript
                  </p>
                  <div className='icons'>
                    <a href='https://github.com/reemsellat/playsound' target='_blank'>
                      <Icon path={mdiGithub} size={1} />
                    </a>
                    <a href='https://6480918ca00d0c07afe3c65a--clinquant-pudding-f9097b.netlify.app/' target='_blank'>
                      <Icon path={mdiOpenInNew} size={1} />
                    </a>
                  
                  </div>
                 
                </div>
  
              </div>
              <a href="https://6480918ca00d0c07afe3c65a--clinquant-pudding-f9097b.netlify.app/" target='_blank'><img src={playsound}></img></a>
            </div>
          </div>
  
        </div>
        <div id='part-6'>
          <h2><span>04. </span>Contact me</h2>
          <div id='contact'>
            <img src={send}></img>
            <div id='message'>
              <button onClick={sendEmail}>Say Hi!</button>
            </div>
          </div>
        </div>
      </div>
    );
}