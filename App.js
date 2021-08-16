const userBirthday = document.getElementById("userBirthday");
const CheckBtn = document.getElementById("btn");
const displayResult = document.getElementById("DisplayResult");
const displayResultBox = document.getElementById("displayresultBox");
let userInputDate, convertIntoNumber;

const check_MMDDYYY_fromate = (dd_mm_yyy_DOB, userRawDOB) => {
  //mmddyy
  const getSwapedDateMonth = userRawDOB.split("-").splice(1, 3).join("");
  const getYear = userRawDOB.split("-").splice(0, 1).join("");
  const swapedUserDOB = getSwapedDateMonth + getYear;
  const mm_dd_yyy_DOB = parseInt(swapedUserDOB);

  if (dd_mm_yyy_DOB !== mm_dd_yyy_DOB) {
    checkPalindrome(mm_dd_yyy_DOB, userRawDOB);
  } else {
    displayResultBox.style.display = "block";
    displayResult.innerHTML = ` Awww! Your birthdate ${userRawDOB} is not palindrome.`;
  }
};

const checkPalindrome = (dd_mm_yyy_DOB, userRawDOB) => {
  let num = dd_mm_yyy_DOB;
  let reverseNum = 0;

  while (num > 0) {
    num = Math.floor(num);

    if (num !== 0) {
      let res = num % 10;

      reverseNum = reverseNum * 10 + res;

      num = num / 10;
    }
  }

  if (dd_mm_yyy_DOB === reverseNum) {
    displayResultBox.style.display = "block";
    displayResult.innerHTML = ` Congo ! Your birthdate ${userRawDOB} is a Palindrome.`;
  } else {
    check_MMDDYYY_fromate(dd_mm_yyy_DOB, userRawDOB);
  }
};

userBirthday.addEventListener("change", (e) => {
  const userInput = e.target.value;
  const convertFormate = userInput.split("-").reverse().join("");
  const toNumber = parseInt(convertFormate);
  userInputDate = userInput;
  convertIntoNumber = toNumber;
});

CheckBtn.addEventListener("click", () => {
  if (userInputDate) {
    checkPalindrome(convertIntoNumber, userInputDate);
  } else {
    alert("Enter Valid Input");
  }
});
