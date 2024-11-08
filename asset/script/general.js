const spaceFromNav = (navbar, element, Margin) => {
    if (Margin == true) {
      navH = $(navbar).outerHeight();
      navH = navH + navH / 2
      $(element).css("margin-top", navH);
    } else {
      navH = $(navbar).outerHeight();
      navH = navH + navH / 4
      $(element).css("top", navH);

    }

  }
   const charLimit = (element, maxlength) => {
    if ($(element).val().length >= maxlength) {
        $(element).val($(element).val().slice(0, maxlength));
    }
}
const scrollToElement = (element) => {
  $('html, body').animate({
    scrollTop: $(element).offset().top - $("nav").outerHeight() - $("nav").outerHeight() / 2
  }, 800);
}

alertType = {
  Danger:"danger",
  Warning:"warning",
}
const showAlert =(alertText,type,alertDom,show) =>{
  if (show === true ){
    $(alertDom).removeClass(`d-none`);
    $(alertDom).addClass(`alert-${type}`);

    $(alertDom).text(alertText);
    scrollToElement(alertDom)
  }else{
    
    $(alertDom).addClass(`d-none alert-${type}`);
  }



} 


// lay out
$('.navbarMobileContainer').on('click', function (event) {
  if (!$(event.target).closest('.navbarMobile').length) {
    $(".navbarMobileContainer").toggleClass("show")
  }
});
$(".hamburger-btn").on("click", function () {
  $(".navbarMobileContainer").addClass("show")
})
$(".closeNavbarBtn").on("click", function () {
  $(".navbarMobileContainer").removeClass("show")

})
// order box
