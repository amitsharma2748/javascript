'use strict';

const modal=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const btnClose=document.querySelector('.close-modal')
const btnShow=document.querySelectorAll('.show-modal')

const show=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const hide=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i=0;i<btnShow.length;i++)
    btnShow[i].addEventListener('click',show);

btnClose.addEventListener('click',hide)
overlay.addEventListener('click',hide)

document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&!modal.classList.contains('hidden')){
        hide();
    }
})

