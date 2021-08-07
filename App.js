const userBirthday = document.getElementById("userBirthday");

const check_MMDDYYY_fromate = (dd_mm_yyy_DOB, userRawDOB) => {
  //mmddyy
  const getSwapedDateMonth = userRawDOB.split("-").splice(1, 3).join("");
  const getYear = userRawDOB.split("-").splice(0, 1).join("");
  const swapedUserDOB = getSwapedDateMonth + getYear;
  const mm_dd_yyy_DOB = parseInt(swapedUserDOB);

  if (dd_mm_yyy_DOB !== mm_dd_yyy_DOB) {
    checkPalindrome(mm_dd_yyy_DOB, userRawDOB);
  } else {
    console.log("not palind");
    console.log(userRawDOB);
  }
};

const checkPalindrome = (dd_mm_yyy_DOB, userRawDOB) => {
  console.log(dd_mm_yyy_DOB);
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
    console.log("Your Birthday is a Palindrome");
    console.log(userRawDOB);
  } else {
    check_MMDDYYY_fromate(dd_mm_yyy_DOB, userRawDOB);
  }
};

userBirthday.addEventListener("change", (e) => {
  const userInput = e.target.value;
  const convertFormate = userInput.split("-").reverse().join("");
  const toNumber = parseInt(convertFormate);
  checkPalindrome(toNumber, userInput);
});
