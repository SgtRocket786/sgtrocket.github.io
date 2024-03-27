let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
   document.body.classList.toggle('active');
}

window.onscroll = () =>{
   if(window.innerWidth < 991){
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
   }

   document.querySelectorAll('section').forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
         document.querySelectorAll('.header .navbar a').forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
         });
      }

   });
}

(function(){
   emailjs.init("J6sOOHRSyTSO0YLPa"); // Replace 'your_user_id' with your actual EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_l292xpo', 'template_b6fdzid', 'myForm', 'J6sOOHRSyTSO0YLPa')
          .then(function() {
             console.log('SUCCESS!');
             alert('Your message has been sent successfully!');
          }, function(error) {
             console.log('FAILED...', error);
             alert('Failed to send the message. Please try again later.');
          });
   });
});