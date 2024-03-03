// header btn show and hide

function showCancelbtn(){  
  const barbtn = document.querySelector('.bar-btn-container')
  barbtn.style.display ='none'

  const backbtn = document.querySelector('.back-btn')
  backbtn.style.background='#333333'

  const cancelbtn = document.querySelector('.cancel-btn-back')
  cancelbtn.style.display ='block'



  const headerhover = document.querySelector('.headerhover')
  headerhover.style.width ='100%'

}

// hide cancle button
function hideCancelbtn(){  
  const cancelbtn = document.querySelector('.cancel-btn-back')
  cancelbtn.style.display ='none'
  

  const backbtn = document.querySelector('.back-btn')
  backbtn.style.background='#fff'

  const barbtn = document.querySelector('.bar-btn-container')
  barbtn.style.display ='block'

  const headerhover = document.querySelector('.headerhover')
  headerhover.style.width ='0%'
}

// show navbar in header
function showNavbar(){  
  const navbar = document.querySelector('.navbar')
  navbar.style.display ='block'
}

function hideNavbar(){  
  const navbar = document.querySelector('.navbar')
  navbar.style.display ='none'
 
}



// function hideCancelbtn(){  
// const barbtn = document.querySelector('.bar-btn')
// barbtn.style.display ='none'
// }


// var div =document.getElementById('navbarrr');
// var display = 0;
// // show navbar in header
// function showNavbar()
// {  
//     if(display == 1)
//     {
//         div.style.display='block';
//         display = 0;
//     }
//     else
//     {
//         div.style.display='none';
//         display=1;

//     }

// }




// autoplay in home
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      // spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
// slider in home


  



// slider in categories(projects)
var swiper = new Swiper(".slider-expertise", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:1, 
  // loop: true,
    centerSlide:"true",
    grabCursor:"true",
    fade:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});




  // -----------------------------------------------------
  // background service
   // Get the video element
   var video = document.getElementById('myVideo');
    
   // Set playback rate to 0.5 (half speed)
   video.playbackRate = 0.5; // Adjust this value to control the playback speed
