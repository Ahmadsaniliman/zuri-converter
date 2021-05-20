function convert(fahr){
    let cels = 0;
   if(isNaN(fahr)){
         if(Array.isArray(fahr)){
                 return `[${fahr}] is not a valid number but a/an array`
             }
      else if((typeof fahr)  == 'object'){
                 return `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}`
             } else {
                 return `${fahr} is not a valid number but a/an ${typeof fahr}`
             }
   } else {
     cels = (fahr - 32) * 5/9;
         return cels.toFixed(4);
   }
 }