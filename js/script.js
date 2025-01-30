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
   emailjs.init("DgQXwSHsugOXBknBq"); //  actual EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
   emailjs.init("DgQXwSHsugOXBknBq"); // Initialize EmailJS

   document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Attempt to send the email
      emailjs.sendForm('service_l292xpo', 'template_b6fdzid', this)
          .then(function() {
             console.log('SUCCESS!');
             // Hide error message if visible
             document.getElementById('form-error-message').style.display = 'none';
             // Show success message
             document.getElementById('form-success-message').style.display = 'block';
             // Optionally, hide the success message after a few seconds
             setTimeout(function() {
                document.getElementById('form-success-message').style.display = 'none';
             }, 5000);
          }, function(error) {
             console.log('FAILED...', error);
             // Hide success message if visible
             document.getElementById('form-success-message').style.display = 'none';
             // Show error message
             document.getElementById('form-error-message').style.display = 'block';
             // Optionally, hide the error message after a few seconds
             setTimeout(function() {
                document.getElementById('form-error-message').style.display = 'none';
             }, 5000);
          });

      // Clear form fields after submission
      this.reset();
   });

   AOS.init({
      duration: 800,
      delay: 300
   });
   
});



