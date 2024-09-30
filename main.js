import './src/style/style.css';
import gsap from 'gsap';
import { setupCounter } from './counter.js'
document.title = `Vanilla JS TODO List`
document.querySelector('#app').innerHTML = `
  <div>
  <!...header....>
  <header>
    <main>
      <div class="title-box">
        <h1 class="title bg-clip-text text-transparent text-7xl text-center font-extrabold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600"><span class="item">welcome to </span><span class="item">todo </span> app<span class="item"></span></h1>
      </div>
    </main>
  </header>
  </div>
`

setupCounter(document.querySelector('#counter'))

