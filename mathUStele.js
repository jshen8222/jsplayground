function telephoneCheck(str) {
/*555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555*/
    let pat1=/^1?\W?\d{3}-\d{3}-\d{4}$/;
    let pat2=/^1?\W?\(\d{3}\)\d{3}-\d{4}$/;
    let pat3=/^1 \(\d{3}\) \d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/;
    let pat4=/^1 \d{3} \d{3} \d{4}$|^\d{3} \d{3} \d{4}$/;
    let pat5=/^1\d{10}$|^\d{10}$/;
    let pat6=/^1 \d{3} \d{3} \d{4}$|\d{3} \d{3} \d{4}$/;
  
  if(pat1.test(str)|pat2.test(str)|pat3.test(str)|pat4.test(str)|pat5.test(str)
    |pat6.test(str)){
        
        return true
    }else{
        return false
    }
   
  }

  

  telephoneCheck("1 555 555 5555");