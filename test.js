setTime = () => {
  setTimeout(() => {
    console.log("Timeout!");
  }, 4000);
};

loopHandler = async () => {
  for (var t = 0; t < 10; t++) {
    console.log(t + 1);
    await setTime();
    console.log(t);
  }
};

loopHandler();
console.log("Out of the loop!");
console.log("Out of the loop!");
console.log("Out of the loop!");
