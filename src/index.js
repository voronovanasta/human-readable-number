module.exports = function toReadable (number) {
  let dictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
  }

  
      
  for(let key in dictionary){
    
      if(key == number){
        
          return dictionary[key]
      }
  }

  let result = number.toString().split('');
  let firstNumber;
  let secondNumber;
  let thirdNumber;
  let resultArr=[]

  if (result.length==2){
  
     firstNumber= result[0]*10;
    
     secondNumber=result[1];
    
     for(let key in dictionary){
      if(key == firstNumber){
          firstNumber =  dictionary[key]
      }
      if(key == secondNumber){
          secondNumber =  dictionary[key]
      }
  }
  resultArr.push(firstNumber)
  resultArr.push(secondNumber)
  

  return resultArr.join(' ')
  }

  if (result.length==3){
   
      firstNumber=result[0];
      
      resultArr.push(dictionary[firstNumber] + ' hundred')
      

      secondNumber=number - result[0]*100;
      

      if(secondNumber<=20 && secondNumber!=0){
       
          for(let key in dictionary){
              if(key == secondNumber){
                  secondNumber = dictionary[key]
                  resultArr.push(secondNumber)
                  
              }
          }
          
      }

if(secondNumber>20){
        

          secondNumber = result[1]*10;
          
          thirdNumber = result[2];
          

    for(let key in dictionary){
       
       if(key == secondNumber){
           secondNumber =  dictionary[key]
           resultArr.push(secondNumber)
           
       }     
   }
    if(thirdNumber!=0){
        for(let key in dictionary){
       
            if(key == thirdNumber){
                thirdNumber =  dictionary[key]
                resultArr.push(thirdNumber)
                
            }     
        }

    }
}

return resultArr.join(' ')
}


}
