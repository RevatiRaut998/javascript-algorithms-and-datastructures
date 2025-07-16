const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    alert("Please provide a phone number");
    return;
  }

  const validRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  if (validRegex.test(value)) {
    result.textContent = `Valid US number: ${value}`;
  } else {
    result.textContent = `Invalid US number: ${value}`;
  }
});

clearBtn.addEventListener("click", () => {
  result.textContent = "";
});