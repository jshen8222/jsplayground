function convertToRoman(num) {
    let arr=num.toString().split("");
    console.log(arr);
    if(arr.length==1){
        let a=convertSingle(arr[0]);
        console.log(a);
        return a;

    }else if(arr.length==2){
        if (arr[1]=="0"){
            let a =convertX(arr[0])
            console.log(a);
            return convertX(arr[0])
        }else{
        let a = convertX(arr[0])+convertSingle(arr[1]);
        console.log(a);
        return a;}
        
    }else if(arr.length==3){

        let a = convertC(arr[0])
        let b =(convertX(arr[1])==null? "" : convertX(arr[1]))
        let c=(convertSingle(arr[2])==null? "" : convertSingle(arr[2]))
         
        console.log(a+b+c);
        return a;
        
    }else{
        let b =( convertC(arr[1])==null? "":convertC(arr[1]));
        let c =(convertX(arr[2])==null? "" : convertX(arr[2]));
        let d=(convertSingle(arr[3])==null? "" : convertSingle(arr[3]))
        let a = convertM(arr[0]);
        console.log(a+b+c+d);
        return a;
    }
   
   }

function convertSingle(x){
    switch(x){
        case "1": return "I";
        break;
        case "2": return "II";
        break;
        case "3": return "III";
        break;
        case "4": return "IV";
        break;
        case "5": return "V";
        break;
        case "6": return "VI";
        break;
        case "7": return "VII";
        break;
        case "8": return "VIII";
        break;
        case "9": return "IX";
        break;
        default:"";
        
    }

}
function convertX(x){
    switch(x){
        case "1": return "X";
        break;
        case "2": return "XX";
        break;
        case "3": return "XXX";
        break;
        case "4": return "XL";
        break;
        case "5": return "L";
        break;
        case "6": return "LX";
        break;
        case "7": return "LXX";
        break;
        case "8": return "LXXX";
        break;
        case "9": return "XC";
        break;
        default:"";
    }

    }
function convertC(c){
    switch(c){
        case "1": return "C";
        break;
        case "2": return "CC";
        break;
        case "3": return "CCC";
        break;
        case "4": return "CD";
        break;
        case "5": return "D";
        break;
        case "6": return "DC";
        break;
        case "7": return "DCC";
        break;
        case "8": return "DCCC";
        break;
        case "9": return "CM";
        break;
        default:"";
}
}
function convertM(m){
    switch(m){
        case "1": return "M";
        break;
        case "2": return "MM";
        break;
        case "3": return "MMM";
        break;
        case "4": return "MMM";
       break;
        default:"";
    }
}

//convertToRoman(6);
  // convertToRoman(36);
   convertToRoman(3999);
  // convertToRoman(3236);
