var textWrapper = document.querySelector('.banner__title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
  .add({
    targets: ".banner__title .letter",
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 50 * (i+1)
  }).add({
    targets: ".banner__title",
    opacity: 0,
    duration: 10,
    easing: "easeOutExpo",
    delay: 200
  }).add({
        targets: ".banner__title",
        opacity: 1,
        duration: 10,
        easing: "easeOutExpo",
        delay: 200
      });



      function checkScroll() {
        var element_regintro = document.querySelector('.reg-intro');
        var element_regbenefit = document.querySelector('.reg-benefits');
        var title = document.querySelector('.reg-intro__title');
        var content = document.querySelector('.reg-intro__content');
        var btn_findout = document.querySelector('.btn-findout');
        var textTitleBenefit = document.querySelector('.reg-benefits__content-title')
        var textBenefit = document.querySelectorAll('.reg-benefits_wrap')
  
        var rect = element_regintro.getBoundingClientRect();
        var rect_benefit = element_regbenefit.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          title.classList.add('fade-in');
          content.classList.add('fade-in');
          btn_findout.classList.add('fade-in');
        }
  
        if(rect_benefit.top <= windowHeight && rect_benefit.bottom >= 0) {
          textTitleBenefit.classList.add('fade-in');
          textBenefit.forEach((item => {
            item.classList.add('fade-in');
          }));
        }
      }
  
      // Add scroll event listener
      window.addEventListener('scroll', checkScroll);
  
      // Initial check in case the element is already in view
      checkScroll();
