"use strict";

const password = document.querySelector("#password");
const userInfo = document.querySelector(".user");
const error = document.querySelector(".error");

const word = document.querySelector("#word");
const winGreeting = document.querySelector("h3");

// hm1
password.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "hm.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      if (password.value === data.password) {
        userInfo.innerHTML += `<h2>Hello ${data.firstname}!</h2><p>Phone: ${data.phone}</p>`;
        error.textContent = "correct";
      } else {
        error.textContent = "wrong password";
      }
    } else {
      usd.value = "error";
    }
  });
});

// hm2
word.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "hm2.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      if (word.value === data.secretWord) {
        winGreeting.textContent = "Ура!";
      } else {
        winGreeting.textContent = "Пробуй еще";
      }
    } else {
      usd.value = "error";
    }
  });
});

// const button = document.querySelector(".simple_button");
// const modalka = document.querySelector(".modal");
// const buttonX = document.querySelector(".close_modal");
// button.addEventListener("click", showModal);
// buttonX.addEventListener("click", closeModal);
// function showModal() {
//   modalka.classList.remove("hide");

//   modalka.classList.add("show");
// }
// function closeModal() {
//   modalka.classList.remove("show");
//   modalka.classList.add("hide");
// }

// const box = document.querySelector(".box");
// // const height = box.clientHeight;
// // const width = box.clientWidth;
// // const height = box.offsetHeight;
// // const width = box.offsetWidth;
// const height = box.scrollHeight;
// const width = box.scrollWidth;

// "use strict";

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const myRectangle = new Rectangle(12, 15, 25);

// const area = myRectangle.calculateArea();

// class RectangleJunior extends Rectangle {
//   constructor(height, width, length) {
//     super(height, width);
//     this.length = length;
//   }
//   calcSomething() {
//     return this.length * this.width;
//   }
// }

// const myMiniRec = new RectangleJunior(10, 10, 15);
// console.log(myMiniRec.calculateArea());
// console.log(myMiniRec.calcSomething());
