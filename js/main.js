document.addEventListener('DOMContentLoaded',function(){
  // year
  const y = new Date().getFullYear();
  const year = document.getElementById('year');
  if(year) year.textContent = y;

  // nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click',()=>{
      siteNav.classList.toggle('open');
      const expanded = siteNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // simple client-side form handling (no backend)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name||!email||!message){
        alert('Please complete all fields.');
        return;
      }
      alert('Thanks, ' + name + '! This template does not send messages — wire up a backend or service.');
      form.reset();
    });
  }
});
