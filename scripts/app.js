
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



// цена одного билета
let eventPrice = parseInt($(".event-page__price").text());

// Счетчик количества билетов
$( document ).ready(function() {
  let ticketInc = $("#id-ticket-inc");
  let ticketDec = $("#id-ticket-dec");

  let showPrice = $("#id-ticket-price");
  const price = eventPrice;

  let sum = price;
  

  let currentTicket = $("#id-ticket-count");
  let count = 1;

  ticketInc.on('click', function(e) {
    e.preventDefault();
    count++;
    currentTicket.html(count);
    sum = price * count;
    showPrice.html(sum);
   });

  ticketDec.on('click', function(e) {
    e.preventDefault();
    if (count > 1) {
      count--;
    currentTicket.html(count);
    sum = sum - price;
    showPrice.html(sum);
    }    
   });
});




// заполнение формы информацией со страницы

$(document).ready(function() {
  let nameInForm = $(".ticket-form__event-name");
  let dateInForm = $(".ticket-form__event-date");
  let priceInForm = $("#id-ticket-price");
  let eventName = $(".event-page__title").text();
  let eventDate = $(".event-page__date").text();
  
  // let button = $("#id-open-ticket-form");

  
    // e.preventDefault();
    nameInForm.html(eventName);
    dateInForm.html(eventDate);
    priceInForm.html(eventPrice);
   
});

// кнопка закрыть модальное окно

$(document).ready(function($) {
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
    if ($(e.target).closest('.modal-wrap').length == 0) {
      $(this).fadeOut();          
    }
  });
});
// function closeModal() {
//   // e.preventDefault();
//   let modal = $(".modal");
//   modal.fadeOut();
//   return false;
// }
// function openModal() {
//   let modal = $(".modal");
//   modal.fadeIn();
//   return false;
// }