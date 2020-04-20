let codeGenerator=(input)=>{
    let result = [];

    for(let x=1; x <= input; x++){

        if(((x % 2) === 0) && ((x % 3) === 0) && ((x % 5) === 0)){
        result.push('yu-gi-oh')
        }
        else if(((x % 2) === 0) && ((x % 3) === 0)){
            result.push('yu-gi')
        }
       else if(((x % 2) === 0) && ((x % 5) === 0)){
        result.push('yu-oh')
        }
       else if(((x % 3) === 0) && ((x % 5) === 0)){
        result.push('gi-oh')
        }
        else if((x % 2) === 0){
            result.push('yu')
        }
        else if((x % 3) === 0){
            result.push('gi')
        }
        else if((x % 5) === 0){
            result.push('oh')
        }
        else {
            result.push(x)
        }
    }
    console.log(result)
    return result;
}
codeGenerator(100);
codeGenerator(7);