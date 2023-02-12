// const body = document.querySelector('body'),
// modetoggle = body.querySelector('mode-toggle');

// modetoggle.addEventListener('click', ()=>{
//   body.classList.toggle('dark')
// })

const modeToggle = document.getElementById('mode-toggle').addEventListener('click',function(){
  const body = document.querySelector("body")
  body.classList.toggle("dark")
})