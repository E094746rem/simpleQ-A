// this one will make the for question to answer at the same time
// const questions = document.querySelectorAll(".question");
// console.log(questions);

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
