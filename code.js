let bet = 0;
let pay = 0; //these are the winnings of a round
let basketNum = [0, 1, 2, 3];
let column1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
let column2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
let column3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
let dozen1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dozen2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let dozen3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
let oddNum = [
  1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
];
let evenNum = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
];
let redNum = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 28, 30, 32, 34, 36,
];
let blackNum = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 29, 31, 33, 35,
];
let half1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let half2 = [
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

let messageEl = document.getElementById("message");

let messageWin = function (pay) {
  messageEl = `Congratulation! You won ${pay} dollars!`;
};

let messageLoss = function () {
  messageEl = `Oh snap! You lost the bet!`;
};

function getChoice() {
  choice = document.getElementById("choice").value;
  alert(choice);
}

function outcome() {
  let ranVal = Math.floor((Math.random() * 37) | 0);

  if (choice === 1) {
    basketNum.includes(ranVal) ? messageWin(11 * bet) : messageLoss();
  } else if (choice === 2) {
    column1.includes(ranVal) ? messageWin(2 * bet) : messageLoss();
  } else if (choice === 3) {
    column2.includes(ranVal) ? messageWin(2 * bet) : messageLoss();
  } else if (choice === 4) {
    column3.includes(ranVal) ? messageWin(2 * bet) : messageLoss();
  } else if (choice === 5) {
    dozen1.includes(ranVal) ? messageWin(2 * bet) : messageLoss();
  } else if (choice === 6) {
    dozen2.includes(ranVal) ? messageWin(2 * bet) : messageLoss();
  } else if (choice === 7) {
    dozen3.includes(ranVal) ? messageWin(2 * bet) : messageLoss();
  } else if (choice === 8) {
    oddNum.includes(ranVal) ? messageWin(bet) : messageLoss();
  } else if (choice === 9) {
    evenNum.includes(ranVal) ? messageWin(bet) : messageLoss();
  } else if (choice === 10) {
    redNum.includes(ranVal) ? messageWin(bet) : messageLoss();
  } else if (choice === 11) {
    blackNum.includes(ranVal) ? messageWin(bet) : messageLoss();
  } else if (choice === 12) {
    half1.includes(ranVal) ? messageWin(bet) : messageLoss();
  } else if (choice === 13) {
    half2.includes(ranVal) ? messageWin(bet) : messageLoss();
  }
}
