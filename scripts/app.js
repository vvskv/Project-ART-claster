const hamburger = $(".hamburger");
hamburger.click( ()=> {
  hamburger.toggleClass('is-active');
});


const mailingForm = $('.mailing__form');
if($(document).width() <= 480) {
  mailingForm.attr('placeholder', 'Введите ваш e-mail');
}

// Кнопка "Показать еще" на странице событий
function showMore() {
  let events = document.querySelector('#events-show');
  let warehouse = document.querySelector('#events-warehouse');
  let button = document.querySelector('#show-more');
  let filterCheck = document.querySelector('#check-all');

  let warehouseArray = [...warehouse.children];
  let countDownloadEvents = 0;
  
  

  let numberOfColumnEvents = getComputedStyle(events).getPropertyValue("grid-template-columns").split(' ').length;

  if(! filterCheck.checked) {
      countDownloadEvents = warehouseArray.length;
    } else {
      countDownloadEvents = numberOfColumnEvents * 2;
    }
  
  for (var i = 0; i < warehouseArray.length && i < countDownloadEvents; i++) {
    events.insertAdjacentElement('beforeEnd', warehouseArray[i]);
    if(warehouseArray.length === i+1) {
      button.classList.add("secondary-button--no-content");
    }
  }  
}

// Кнопка "вернуться наверх"
function returnOnTop() {
   window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

$(document).keydown(function(e) {
    if (e.keyCode === 8) {
      history.back();
    }
});


// Добавление формы покупки билетов, заполнение формы информацией со страницы

$(document).ready( ()=> {
  $(".modal__buy-ticket").load("form-buy-ticket.html", ()=> {

    // Цена одного билета
    const eventPrice = parseInt($(".event-page__price").text());

    // Заполнение формы
    $(".ticket-form__event-name").html($(".event-page__title").text());
    $(".ticket-form__event-date").html($(".event-page__date").text());
    $("#id-ticket-price").html(eventPrice);  
    
    const showPrice = $("#id-ticket-price");
    const currentTicket = $("#id-ticket-count");

    let sum = eventPrice;    
    let count = 1;

    // кнопка увеличения количества билетов
    $("#id-ticket-inc").click( ()=> {
      count++;
      currentTicket.html(count);
      sum = eventPrice * count;
      showPrice.html(sum);
      return false;
    });

    // кнопка уменьшения количества билетов
    $("#id-ticket-dec").click((e)=> {
      e.preventDefault();
      if(count>1) {
        count--;
        currentTicket.html(count);
        sum-=eventPrice;
        showPrice.html(sum);
      }
    }); 
    // Открытие и закрытие модального окна
  $('.open-modal').click(function() {    
    $('.modal').fadeIn();
    return false;
  }); 
  
  $('.close-modal').click(function() {
    $(this).parents('.modal').fadeOut();
    return false;
  });   
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').fadeOut();
    }
  });
  
  $('.modal').click(function(e) {
    if ($(e.target).closest('.modal__wrap').length == 0) {
      $(this).fadeOut();          
    }
  });
  
  });
})


$(document).ready( ()=> {
  $(".modal-rent").load("form-rent.html", ()=> {

    $('.open-modal').click(function() {    
    $('.modal').fadeIn();
    return false;
  }); 
  
  $('.close-modal').click(function() {
    $(this).parents('.modal').fadeOut();
    return false;
  });   
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').fadeOut();
    }
  });
  
  $('.modal').click(function(e) {
    if ($(e.target).closest('.modal__wrap').length == 0) {
      $(this).fadeOut();          
    }
  });

  });
})