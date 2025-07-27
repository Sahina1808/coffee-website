const menuOpenButton=document.querySelector("#menu-open-button")
const menuCloseButton=document.querySelector("#menu-close-button")
const btn=document.querySelector(".button")
const Orderbtn=document.querySelector(".button-order-now")
const Contactbtn=document.querySelector(".button-contact-us")


//hero section

menuOpenButton.addEventListener("click",()=>{

   document.body.classList.toggle("show-mobile-menu")
})
menuCloseButton.addEventListener("click",()=>menuOpenButton.click
())
Orderbtn.addEventListener("click",()=>{
         menuSection.scrollIntoView({behavior:"smooth"})
     
   })
Contactbtn.addEventListener("click",()=>{
      contactSection.scrollIntoView({behavior:"smooth"})
      
   }
)




   

//menu section
const menu=document.querySelector(".menu")
const menuSection=document.querySelector(".menu-section")


   menu.addEventListener("click",()=>{
         menuSection.scrollIntoView({behavior:"smooth"})
     
   }
)

//contact section
const contactUs=document.querySelector(".contact-us")

const contactSection=document.querySelector(".contact")

contactUs.addEventListener("click",()=>{
      contactSection.scrollIntoView({behavior:"smooth"})
      
   }
)
//about section
const about=document.querySelector(".about")
const aboutSection=document.querySelector(".about-section")

about.addEventListener("click",()=>{
      aboutSection.scrollIntoView({behavior:"smooth"})
      
   }
)

const aboutSpan=document.querySelectorAll(".section-metatitle span")

let index=0;
setInterval(()=>{
aboutSpan[index].classList.remove("active")
index = (index + 1) % aboutSpan.length;
aboutSpan[index].classList.add("active")
}, 1000);


const submit=document.getElementById("submitbtn")
const popup = document.querySelector(".popup")
function openPopup() {
    popup.classList.add("openpopup")
}
function closePopup() {
    popup.classList.remove("openpopup")
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (name && email && message) {
        openPopup();
        document.querySelector('form').reset();
    } else {
     closePopup()
     alert("Please fill in all fields before submitting.");       
    }
});
//blog section
const blog=document.querySelector(".blog")
const blogSection = document.querySelector('.blog-section');
blog.addEventListener("click", () => {
    blogSection.scrollIntoView({ behavior: 'smooth' });
})
// Swiper JS for blog section

const swiper = new Swiper('.swiper', {
  loop: true,
  

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


   // Responsive breakpoints
 breakpoints: {
   0: {
       slidesPerView: 1,
       spaceBetween: 20,
    },
    768: {
       slidesPerView: 2,
       spaceBetween: 30,
    },
    1024: {
       slidesPerView: 3,
       spaceBetween: 40,
    }
   }
});


