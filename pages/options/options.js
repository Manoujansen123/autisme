const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".thema");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  const dark = calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  if (dark) {
    document.body.style.backgroundColor= "#7e0add"
  }
  if(!dark) {
    document.body.style.backgroundColor= "#79DAE8"
  }
  else {
    return;
  }
};