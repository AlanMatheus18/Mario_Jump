const mario = document.querySelector('.mario');

const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() => {

        mario.classList.remove ('jump');

    }, 500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    if(pipePosition <= 120 &&pipePosition > 0 && marioPosition < 90){
       
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
    
        mario.src = '.imgs/dz7i4gsisu721.webp';

    }


},10)


document.addEventListener("keydown", jump)