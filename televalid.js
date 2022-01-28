function telephoneCheck(str) {

    let pat1=/\^d{3}/;
    let text="555";
    console.log("a"+pat1.test(text));
    return true;

  }
  
  console.log("a");
  telephoneCheck("555-555-5555");