function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("text-input").value;
  const resultDiv = document.getElementById("result");

  if (!input.trim()) {
    alert("Please input a value");
    return;
  }

  const resultText = isPalindrome(input)
    ? `${input} is a palindrome`
    : `${input} is not a palindrome`;

  resultDiv.textContent = resultText;
});
