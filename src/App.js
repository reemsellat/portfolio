
import './style.css'
import personal from './photo_5902243040435747671_y.jpg';
import laptop from './ee3369f79097a1e4c1c95742b2483a15_prev_ui.png';
import myfood from './myfood.PNG';
import playsound from './playsound.PNG'
import { useRef } from 'react';
import send from './668_prev_ui.png'
import github from './icons8-github-16.png'
import codepen from './icons8-codepen-24.png'
import linkedin from './icons8-linkedin-24.png'
import gmail from './icons8-gmail-24.png'
import logo from './Elegant Circle Signature Photography Logo_prev_ui.png'
import Hamburger from 'hamburger-react'
function App() {
  const leftArrow = useRef('<')
  const rightArrow = useRef('>')
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
          <a href='#'>About</a>
        </nav>
        <span>02. </span>
        <nav>
          <a href='#'>Skills</a>

        </nav>
        <span>03. </span>
        <nav>
          <a href='#'>Projects</a>

        </nav>
        <span>04. </span>
        <nav>
          <a href='#'>Contact</a>

        </nav>
        <button>Resume</button>
      </div>
      <div id='social-media'>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fill-rule="nonzero"><g fill="#d8d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" styles="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fill-rule="nonzero"><g fill="#d8d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" styles="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2.8125l-0.53516,0.34375l-21.46484,13.64063v16.40625l22,13.98438l22,-13.98437v-16.40625zM25,5.1875l20,12.70703v14.21094l-20,12.70703l-20,-12.70703v-14.21094zM24,8.12891l-16.23828,10.32031l7.82031,5.42188l8.41797,-5.73437zM26,8.12891v10.00781l0.4375,0.29688l7.98047,5.4375l7.82031,-5.42187zM22,11.76953v5.30859l-6.40625,4.36719l-4.21875,-2.92578zM28,11.76953l10.625,6.75l-4.21875,2.92188l-6.40625,-4.36328zM25,19.8125l-7.69922,5.25l7.69922,5.33594l0.57031,-0.39453l7.12891,-4.94141zM7,20.29297v9.42969l6.85938,-4.67578l-1.19922,-0.82812zM43,20.29688l-6.85937,4.75l1.20313,0.82422l5.65625,3.85156zM25,22.23438l4.16797,2.84375l-4.16797,2.88672l-4.16797,-2.88672zM9,24.11328l1.32813,0.92188l-1.32812,0.90234zM41,24.11328v1.82422l-1.32812,-0.90234zM15.57422,26.23828l-0.57031,0.38672l-7.23047,4.93359l16.22656,10.3125v-9.79297zM34.42578,26.23828l-8.42578,5.83984v9.79297l16.22656,-10.3125zM15.5625,28.66797l6.4375,4.45703v5.10547l-10.59375,-6.73047zM34.4375,28.66797l4.15625,2.83203l-10.59375,6.73047v-5.10547z"></path></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fill-rule="nonzero"><g fill="#d8d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" styles="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M23.77344,12c-10.918,0 -11.77344,0.85444 -11.77344,11.77344v16.45312c0,10.918 0.85544,11.77344 11.77344,11.77344h16.45312c10.918,0 11.77344,-0.85444 11.77344,-11.77344v-16.45312c0,-10.919 -0.85444,-11.77344 -11.77344,-11.77344zM21.16797,16h21.66406c4.793,0 5.16797,0.37497 5.16797,5.16797v21.66406c0,4.793 -0.37597,5.16797 -5.16797,5.16797h-21.66406c-4.793,0 -5.16797,-0.37597 -5.16797,-5.16797v-21.66406c0,-4.793 0.37497,-5.16797 5.16797,-5.16797zM22.50195,18.50391c-1.629,0 -2.94922,1.32027 -2.94922,2.94727c0,1.627 1.31922,2.94922 2.94922,2.94922c1.625,0 2.94531,-1.32122 2.94531,-2.94922c0,-1.625 -1.32031,-2.94727 -2.94531,-2.94727zM37.93359,26.32227c-2.46,0 -4.11016,1.34991 -4.78516,2.62891h-0.07031v-2.22266h-4.84961v16.27148h5.05273v-8.05078c0,-2.123 0.40611,-4.17773 3.03711,-4.17773c2.594,0 2.62695,2.42941 2.62695,4.31641v7.91211h5.05469v-8.92578c0,-4.382 -0.94541,-7.75195 -6.06641,-7.75195zM19.97266,26.72852v16.27148h5.05664v-16.27148z"></path></g></g></svg>
       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fill-rule="nonzero"><g fill="#d8d7d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" styles="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z"></path></g></g></svg>
      </div>
      <div id='part-1'>
        <img id='logo' src={logo}></img>
        <nav>
          <a href='#'><span>01. </span>About</a>
        </nav>
        <nav>
          <a href='#'><span>02. </span>Skills</a>

        </nav>
        <nav>
          <a href='#'><span>03. </span>Projects</a>

        </nav>
        <nav>
          <a href='#'><span>04. </span>Contact</a>

        </nav>
        <button>Resume</button>
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
              </div>

            </div>
            <a href="https://647b54161de38010e56b1144--grand-mousse-b5e685.netlify.app/" target='_blank'><img src={playsound}></img></a>
          </div>
        </div>

      </div>
      <div id='part-6'>
        <h2><span>04. </span>Contact me</h2>
        <div id='contact'>
          <img src={send}></img>
          <div id='message'>
            <button>Say Hi!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
