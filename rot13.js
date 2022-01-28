function rot13(str) {
    let newStr=[];
    for(let i=0;i<str.length;i++){
      let pattern=/\w/;
      if(pattern.test(str[i])){
        console.log(str[i]);
        let pos=(str[i].toUpperCase()).charCodeAt(0)+13;
        let index=(pos<=90 ? pos: pos-90+64)
        let a=String.fromCharCode(index)
        console.log(a);
        newStr.push(a);
      }else{

        newStr.push(str[i]);

      }
    }
    console.log(newStr.join(""))
    return newStr;
  }
  
  rot13(" DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.UR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. YBIR?");