function incrementFactory() {

  let num = 0;

  function increment() {
  num = num + 1;
  console.log(num);
  }
  
  return increment;

}

const countUp = incrementFactory();

countUp();
countUp();
countUp();
countUp();
countUp();

num = 0;

countUp();