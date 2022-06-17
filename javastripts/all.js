const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');

toggleMenuBtn.addEventListener('click',(e)=>{
    body.classList.toggle('sidebar-toggle');
})