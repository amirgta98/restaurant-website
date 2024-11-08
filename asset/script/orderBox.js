
$(".card-type2").each(function (indexInArray, valueOfElement) {
    var plus = $(valueOfElement).find(".nud-container .nud-plus");
    var number = $(valueOfElement).find(".nud-container .nud-num h5");
    var mines = $(valueOfElement).find(".nud-container .nud-mines");

    // افزودن event handler برای دکمه ی plus
    plus.on("click", function () {
      var currentNumber = parseInt(number.text());
      number.text(currentNumber + 1);
    });

    // افزودن event handler برای دکمه ی mines
    mines.on("click", function () {
      var currentNumber = parseInt(number.text());
      if (currentNumber > 1) {
        number.text(currentNumber - 1);
      } else {
        $(valueOfElement).find(".add-to-order .add-to-btn").removeClass("d-none")
        $(valueOfElement).find(".add-to-order .nud-container").addClass("d-none")

      }
    });
  });
  $(".order-container .nud-container").each(function (indexInArray, valueOfElement) {
    var plus = $(valueOfElement).find(".nud-plus");
    var number = $(valueOfElement).find(".nud-num h5");
    var mines = $(valueOfElement).find(".nud-mines");

    // افزودن event handler برای دکمه ی plus
    plus.on("click", function () {
      var currentNumber = parseInt(number.text());
      number.text(currentNumber + 1);
    });

    // افزودن event handler برای دکمه ی mines
    mines.on("click", function () {
      var currentNumber = parseInt(number.text());
      if (currentNumber > 1) {
        number.text(currentNumber - 1);
      } else {
        $(valueOfElement).find(".add-to-order .add-to-btn").removeClass("d-none")
        $(valueOfElement).find(".add-to-order .nud-container").addClass("d-none")

      }
    });
  });
  $(".add-to-order").each(function (indexInArray, valueOfElement) {
    $(valueOfElement).find(".add-to-btn").click(() => {
      $(valueOfElement).find(".add-to-btn").addClass("d-none")
      $(valueOfElement).find(".nud-container").removeClass("d-none")
    })

  });

  if ($(window).width() > 1200) {
    spaceFromNav(".categury-swiper", ".order-container", false)
  }
  const refreshNumberOfItem = (valueOfElement) => {
    var mountOfItem = $(valueOfElement).find("ul li.order-Item:not(.d-none) ").length;
    if (mountOfItem > 0) {
      $(valueOfElement).find("#order-title span").text(`(${mountOfItem})`);
    } else {
      $(valueOfElement).find("#order-title span").text(`(${mountOfItem})`);
      $('.orders-container ul').append('<li class="noItem" > <h6> no product selected </h6></li>');

    }
  }
  $(".orders-container").each((indexInArray, valueOfElement) => {
    // set defult number of order
    refreshNumberOfItem(valueOfElement)
    // delete all order
    $(valueOfElement).find(".deletAllItem").click(() => {
      if ($(valueOfElement).find("ul li.order-Item:not(.d-none) ").length > 0) {
        $("#DeleteAllItem").modal("show")

      }
    })
    $(".DeleteAllItem .do-action-Btn").click(() => {
      $(".DeleteAllItem").modal("hide")
      $(valueOfElement).find("ul li.order-Item ").addClass("d-none")
      refreshNumberOfItem(valueOfElement)
    })
  });
  spaceFromNav(".open-order",".spaceFromOrderBtn",true)


  