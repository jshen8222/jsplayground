function checkCashRegister(price, cash, cid) {
    //console.log(price);
    //console.log(cash);
   // console.log(cid)
    
    let change=cash-price;
    let sum=0;
       let changeValue=cid.map((i)=>([i[0],i[1],]));
       //changeValue=cid.sort((first,second)=>(second[1]-first[1]));
       // console.log(cid);
       console.log(changeValue);
        changeValue.forEach(myFunction);
       // console.log(sum);
        //console.log(cid.map((i)=>(i[1])));
        function myFunction(item) { 
            sum += item[1];
          }
  //  console.log(sum);
   // console.log(price);
   // console.log(cash);
   // console.log(cid)
   console.log(change);
    if(sum<change){
        let result= {status: "INSUFFICIENT_FUNDS", change: []};
        console.log(result);
        return result;
    }else{
        
        if(change==sum){
          let result={status: "CLOSED", change : cid};
          console.log(result);
          return result;
        }else{

          let arr=change.toString().split(".");
         
            let arrChange=[];
            console.log(arr);
          let bill=arr[0];
          let coin=arr[1];
          if(bill>100){

          }else{
              console.log(cid[7][1]);
              if(bill>cid[7][1]){
                arrChange.push(cid[7]);
                console.log(arrChange);
                bill=bill-cid[7][1];
                console.log(bill);
                if(bill>cid[6][1]){
                    arrChange.push(cid[6]);
                    console.log(arrChange);
                    bill=bill-cid[6][1];
                    console.log(bill)
                }else{

                }
                if(bill>cid[5][1]){
                    arrChange.push(cid[5]);
                    console.log(arrChange);
                    bill=bill-cid[5][1];
                    console.log(bill)
                }else{
                    let fiv=Math.trunc(bill/5);
                    let r=bill % 5;
                    console.log(fiv+"and"+r)
                    arrChange.push([cid[5][0],fiv*5]);
                    if(r!=0){
                        arrChange.push([cid[4][0],r]);
                    }
                    console.log(arrChange);

                }
              }
              let twent=Math.trunc(bill/20);
              let r=bill % 20;
              //arrChange.push([cid[]])
              if(r>10){

              }else{

              }
          }
          
          
            if(arr[1].length==1){
              coin=arr[1]+"0";
              console.log(coin)
          }else{
              coin=arr[1];
          };
          //find quarter number
          let coinSum=cid[0][1]+cid[1][1]+cid[2][1]+cid[3][1];
          if(coin/100>coinSum){
            let result= {status: "INSUFFICIENT_FUNDS", change: []};
            console.log(result);
            return result;
          }
          
          let q=Math.trunc(coin/25);
         
          let r=coin % 25;
          console.log(q+"AND"+r)
          if(r==0){
              arrChange.push([cid[3][0],0.25*q])
              console.log(arrChange);
          }else{
            arrChange.push([cid[3][0],0.25*q]);
            coin=r;
            let dim=Math.trunc(coin/10);
            let dr=coin % 10;
            console.log(coin+"and"+dr);
            if(dr>5){

            }else{
                arrChange.push([cid[2][0],0.1*dim])
                arrChange.push([cid[0][0],0.01*dr])
                console.log(arrChange);
            }
          }
          
                        
          let result={status: "OPEN", change : arrChange};
          console.log(result);
          return result;


        }

    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 