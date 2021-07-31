
const popUpWindow = () => {
    const modalbg = document.querySelector('.modal-bg');
    const closeModal = document.querySelector('.modal-content > h1');

    window.addEventListener('load', () => {
        modalbg.classList.add('bgactive');
    })
    
    closeModal.addEventListener('click', () => {
        modalbg.classList.remove('bgactive');
    })
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const Nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
     Nav.classList.toggle('nav-active');
     burger.classList.toggle('toggle');
    });
}



const runFunc = () => {
    popUpWindow();
    navSlide();
  
}

runFunc();












// const smoothScroll = (target,duration) => {

//     const targetScroll = document.getElementById(target);
//     // get distance from the top of page to element
//     let targetPosition = targetScroll.getBoundingClientRect().top + window.pageXOffset;

//     // start position = 0;
//     const startPosition = window.pageXOffset;

//     // const distance = targetPosition - startPosition;
//     targetPosition -= startPosition;
//     let startTime = null;

//     function animation(currentTime) {
//         if(startTime === null) 
//         // waktu beberapa saat ketika page di refresh and user click nav, 
//          startTime = currentTime;
//         // Current Time kondisi / waktu dimana berapa lama user menekan navigasi.
//         // StartTime kondisi / waktu dimana user menekan nav dan page di refresh
//         const timeElapse = currentTime - startTime;
//         // const run = ease(timeElapse,startPosition,distance,duration);
//         const run = ease(timeElapse,startPosition,targetPosition,duration);
//         console.log(run);
//         window.scrollTo(0, run);
//         if(timeElapse < duration) requestAnimationFrame(animation);

//     }

//   function ease(t,b,c,d) {

//     t /= 2 / 2;
//     if(t < 1) return c/2*t*t+b;
//     t--;
//     return -c / 2 * (t*(t-2) -1)+b;
//   }

//     requestAnimationFrame(animation);
// }

// const About = document.querySelector('.about');

// About.addEventListener('click', () => {
//     smoothScroll('about', 2000);
// })