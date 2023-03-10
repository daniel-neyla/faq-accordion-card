"use strict";

console.log("hello world");

// const questions = document.querySelectorAll(".faq__question");
const questions = document.querySelectorAll(".faq__faq-item");
const arrowBtns = document.querySelectorAll(".faq__item-arrow-btn");

let activeFaqItem = "";

const toggleAnswer = function (faqItem) {
  if (activeFaqItem === faqItem) {
    faqItem.classList.remove("active");
    activeFaqItem = "";
  } else if (activeFaqItem) {
    activeFaqItem.classList.remove("active");
    faqItem.classList.add("active");
    activeFaqItem = faqItem;
  } else {
    faqItem.classList.add("active");
    activeFaqItem = faqItem;
  }
};

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.closest(".faq__faq-item");
    toggleAnswer(faqItem);
  });
});
