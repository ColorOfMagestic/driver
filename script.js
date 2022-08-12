// sections
const intro = document.querySelector(".intro");
const time = document.querySelector(".time");

// buttons
const go = document.querySelector('[data-btn="intro"]');

const controls = document.querySelectorAll(".btn-control");

// elements
const timeImageWrapper = document.querySelector(".time__image-wrapper");
const timeImage = document.querySelector(".time__image");
const buttons = document.querySelector(".buttons");

// Переключение экранов

go.addEventListener("click", () => {
  addClass(intro, "intro--active");
  addClass(timeImageWrapper, "time__image-wrapper--in");
  addClass(buttons, "buttons--in");
});

// Движение авто вперед
controls.forEach((btn) => {
  btn.addEventListener("click", () => {
    let attr = btn.dataset.btn;

    if(attr=== 'drive') {
      addClass(timeImageWrapper, "time__image-wrapper--out");
    }

    if(attr=== 'day') {
      removeClass(time, 'time--night');
      timeImage.src = 'images/car_1.png';
      removeClass(timeImageWrapper, 'time__image-wrapper--active');
      controls.forEach(btn=> {
        removeClass(btn,'btn-control--dark');
      })

    }
    
    if(attr=== 'night') {
      addClass(time, 'time--night');
      timeImage.src = 'images/car_3.png';
      addClass(timeImageWrapper, 'time__image-wrapper--active');
      controls.forEach(btn=> {
        addClass(btn,'btn-control--dark');
      })
    }
  });
});

// Вспомогательные функции

function addClass(v, cls) {
  v.classList.add(`${cls}`);
}

function removeClass(v, cls) {
  v.classList.remove(`${cls}`);
}
