const firstQue = document.querySelector("#student-que");
const firstQue2 = document.querySelector("#student-2-que");
const yesoption = document.querySelector("#yesopt");
firstQue.addEventListener("click", function () {
    const yesNo = document.querySelector("#yesNo");
    yesNo.classList.toggle("hidden");
    yesNo.classList.toggle("block");
});
firstQue2.addEventListener("click", function () {
    const yesNo = document.querySelector("#yesNo");
    yesNo.classList.toggle("hidden");
    yesNo.classList.toggle("block");
});
yesoption.addEventListener("click", function () {
    const edu = document.querySelector("#education");
    edu.classList.toggle("hidden");
    edu.classList.toggle("block");
});