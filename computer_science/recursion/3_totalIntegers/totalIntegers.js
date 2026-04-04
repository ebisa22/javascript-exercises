const totalIntegers = function(arr) {
        if(typeof arr!=="object")
                return undefined;
        let count=0;
        if(Array.isArray(arr))
        arr.forEach(value => {
               if(Number.isInteger(value))
                count++;
               else if(Array.isArray(value))
                count+=totalIntegers(value);
               else if(value!==null&&typeof value=="object")
                count+=totalIntegers(value);
        });
        else if (arr!==null&&typeof arr=="object")
                for(let prop in arr){
                    if(Number.isInteger((arr[prop])))
                        count++;
                     else if((typeof arr[prop]==="object") && arr[prop]!==null)
                        count+=totalIntegers(arr[prop]);
                     
                }
         
        return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
