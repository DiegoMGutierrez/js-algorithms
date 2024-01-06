//FUNCIONES DEL EXAMEN DE CERTIFICACION SOBRE "JAVASCRIPT ALGORITHMS AND DATA STRUCTURE" DE FREECODECAMP

function palindrome(str) {
    var noSpecialCharString="";
    var reverseNoSpecialCharString="";
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\| ,.<>\/?]+/
    for(let x of str){
      if(spChars.test(x)==false){
        x=x.toLowerCase();
        noSpecialCharString+=x;
      }
    }
    for(let y=noSpecialCharString.length-1;y>=0;y--){
      reverseNoSpecialCharString+=noSpecialCharString[y];
    }
    if(reverseNoSpecialCharString===noSpecialCharString){
      return true;
    }
    else
      return false;
  }

  function romanize(num) {
    var romanDictionary = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var romanNumber = "";
    for (let i in romanDictionary ) {
      while ( num >= romanDictionary[i] ) {
        romanNumber += i;
        num -= romanDictionary[i];
      }
    }
    return roman;
  }

  function rot13(str) {
    var num =["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R",'S',"T","U","V","W",
    "X","Y","Z"];
    var spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\| ,.<>\/?]+/
    var decoded = "";
    for(let x of str){
      if(spChars.test(x)==false){
        for(let y=0;y<num.length;y++){
          if(x==num[y]){
            if(y+1<=13){
              decoded+=num[y+13];
            }
            else{
              decoded+=num[y-13];
            }
          }
        }
      }
      else{
        decoded+=x;
      }
    }
    return decoded;
  }

  function telephoneCheck(str) {
    var format=/^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/ ;
    return(format.test(str));
  }

  function checkCashRegister(price, cash, cid) {
    var result={
      status:"",
      change:[]
    }
    var cut=0;
    var value={"ONE HUNDRED":100,"TWENTY":20,"TEN":10,"FIVE":5,"ONE":1,"QUARTER":0.25,"DIME":0.10,"NICKEL":0.05,"PENNY":0.01}
    var change=cash-price;
    var sum=0;
    for(let x of cid){
      sum+=x[1];
    }
    if(sum<change){
      result.status="INSUFFICIENT_FUNDS";
    }
    else if(sum==change){
      result.status="CLOSED";
      result.change=cid;
    }
    else{
      for(let x=cid.length-1;x>=0;x--){  
        while(value[cid[x][0]]<=change && cid[x][1]>0 ){
          change-=value[cid[x][0]];
          cid[x][1]-=value[cid[x][0]];
          cut+=value[cid[x][0]];
          change=change.toFixed(2);  
        }
        if(cut>0){
          result.change.push([cid[x][0],cut]);
        }
        cut=0;
      }
      if(change==0){
        result.status="OPEN";
      }
      else{
        result.status="INSUFFICIENT_FUNDS";
        result.change=[];
      }
    }
    return result;
  }
  //BMI calculator
  function bmiCalculator (weight, height) {
    var interpretation="";
    var bmi = Math.round((weight/(height*height))*10)/10; 
    if(bmi<18.5){
      interpretation=`Your BMI is ${bmi}, so you are underweight.`;
    }
    else if(bmi>=18.5 && bmi<=24.9){
      interpretation=`Your BMI is ${bmi}, so you have a normal weight.`;
    }
    else{
      interpretation=`Your BMI is ${bmi}, so you are overweight.`;
    }
    return interpretation;
}

//Leap year calculator
function isLeap(year) {
    if(year%4==0){
      if(year%100==0){
        if(year%400==0){
          return("Leap year.");
        }
        else{
          return("Not leap year.");
        }
      }
      else{
        return("Leap year.")
      }
    }
    else{
      return("Not leap year.");
    }
  }
  //who is buying lunch
  function whosPaying(names) {
    var length=names.length;
    var rndPosition=Math.round(Math.random()*length)
    return(`${names[rndPosition]} is going to buy lunch today!`)
  }

  function fibonacciGenerator (n) {
    var arr =[];
    if(n==0){
      return(arr);
    }
    else if(n==1){
      arr.push(0);
      return(arr);
    }
    else if(n==2){
      arr.push(0);
      arr.push(1);
      return(arr);
    }
    else{
      arr.push(0);
      arr.push(1);
      for(var i=2;i<n;i++){
        arr.push(arr[i-1]+arr[i-2]);
      }
      return(arr);
    }
  }