const countdown = (i: number) => {
  console.log(i);
  if (i <= 1) {
    return
  } else {
    countdown(i-1);
  }
};

countdown(9);
