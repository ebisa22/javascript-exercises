const permutations = function(array) {
     if(array.length==0)
      return [[]];
       const results=[];
       const backTrack=function(index){
         if(index==array.length-1){
            results.push(array.slice());
            return;
         }
         for(let j=index;j<array.length;++j){
            [array[j],array[index]]=[array[index],array[j]];
            backTrack(index+1);
            [array[index],array[j]]=[array[j],array[index]];
         }
       }
       backTrack(0);

       return results;
      
      };
  
// Do not edit below this line
module.exports = permutations;
