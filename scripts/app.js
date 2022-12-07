
// Кнопка "Показать еще" на странице событий
function showMore() {
  let events = document.querySelector('#events-show');
  let warehouse = document.querySelector('#events-warehouse');
  let button = document.querySelector('#show-more');
  let filterCheck = document.querySelector('#check-all');

  let warehouseArray = [...warehouse.children];
  let countDownloadEvents = 0;
  
  

  let numberOfColumnEvents = getComputedStyle(events).getPropertyValue("grid-template-columns").split(' ').length;
  // alert(numberOfColumnEvents);

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

function returnOnTop() {
   window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
