var backdrop =document.querySelector('.backdrop');
var closeButton=document.querySelector('.close');
var navButton=document.querySelector('.nav-button');
const showBackdrop =()=>{
  console.log('close btn is clicked');
  backdrop.style.display='block';
}
const hideBackdrop =()=>{
  console.log('nav btn is clicked');
  backdrop.style.display='none';
}
closeButton.addEventListener('click',hideBackdrop);
navButton.addEventListener('click', showBackdrop);