import './src/style/style.css';
import gsap from 'gsap';
import { setupCounter } from './counter.js'
document.title = `Vanilla JS TODO List`
document.querySelector('#app').innerHTML = `
  <div class="bg-red-600">

    <h1 class="text-2xl text-red-700 font-bold bg-slate-500">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

