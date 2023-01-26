window.addEventListener('DOMContentLoaded', e => {
   document.querySelector('.header__about-site').style.cssText = `--border-top:${document.querySelector('.header').offsetHeight}px solid white `
   document.querySelector('.main-toscani__swith-on').style.cssText = `--swith-top:${document.querySelector('.main-toscani__swith-on').offsetHeight}px solid #484733 `
   document.querySelector('.main-galery__title').style.cssText = `--galery-top:${document.querySelector('.main-galery__title').offsetHeight}px solid #484733 `
   document.querySelectorAll('.main-galery__item').forEach(el => {
      el.addEventListener('click', function () {
         el.classList.toggle('_active');
         document.querySelector('.main-galery__items').classList.toggle('_active');
         document.querySelector('body').classList.toggle('_hidden');
         el.scrollIntoView(false)
      })
   });
})