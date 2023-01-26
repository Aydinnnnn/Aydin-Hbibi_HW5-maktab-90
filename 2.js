"use strick";
let sum = [];
const countStep = {
  funIncrease() {
    sum += 1;
    return this;
  },
  funDecrease() {
    sum -= 1;
    return this;
  },
  funRest() {
    sum = 0;
    return this;
  },
};
countStep.funRest();
countStep.funIncrease();
countStep.funIncrease();
countStep.funIncrease();
countStep.funIncrease();

console.log(sum);
