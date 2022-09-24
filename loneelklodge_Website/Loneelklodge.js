

  //this will add the ability to fade the page onload
  document.body.classList.add('fade-out');

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});

//popup features for contact form
function openForm() {
  document.getElementById('ContactForm').style.display="block";
}

function closeForm() {
  document.getElementById("ContactForm").style.display='none';
}

//Slideshow functions for fading in and out
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
},5000);