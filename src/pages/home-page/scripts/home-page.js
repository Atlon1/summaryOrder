/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

const btn = document.querySelector('#btn')

console.log(btn)

addEventListener('click', function (e){

    btn.innerHTML = "w trkacie ładowania"
})