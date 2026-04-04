const pascal = function(row) {
      if(row===1)
        return [1];
    let pathRow=pascal(row-1);
    let currentRow=[];
    let currenLength=pathRow.length+1
    for(let i=0;i<currenLength;++i){
        if(i==0||i==(currenLength-1))
            currentRow.push(1);
        else
        {
            let leftNum = pathRow[i - 1];
            currentRow.push(leftNum+pathRow[i]);
        }

    }

    return currentRow;
};
  
// Do not edit below this line
module.exports = pascal;
