// swich

const input = document.querySelector(".inp");
const btn = document.querySelector(".inpBtn");
const content = document.querySelector(".content");

function searchDayName() {
  let inputValue = input.value;
  let nameDay = null;
  switch (inputValue) {
    case "1":
      nameDay = "Понедельник";
      break;
    case "2":
      nameDay = "Вторник";
      break;
    case "3":
      nameDay = "Cреда";
      break;
    case "4":
      nameDay = "Четверг";
      break;
    case "5":
      nameDay = "Пятница";
      break;
    case "6":
      nameDay = "Суббота";
      break;
    case "7":
      nameDay = "Воскресенье";
      break;
    default:
      nameDay = "Такое название дня не существует";
  }
  content.innerHTML += `<div class = 'box'>${nameDay}</div>`;

  setTimeout(() => {
    content.innerHTML = ""
  }, 2000);
}

btn.addEventListener("click", searchDayName);
