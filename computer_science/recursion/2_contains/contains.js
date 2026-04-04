const contains = function(object,value) {
      for(let prop in object){
        if(Number.isNaN(value)){
            return true;
        }
        if(object[prop]===value)
            return true;
        if((object[prop]!==null)&&(!Array.isArray(object[prop]))&&(typeof object[prop]=="object")){
           let result=contains(object[prop],value);
             if(result)
                return true;
        }
      }
      return false
};
  
// Do not edit below this line
module.exports = contains;
