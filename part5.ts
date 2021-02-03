function str_len(value:string):number{
    let num : number = value.length;
    return num;
}

function str_len_nospaces(value:String):number{
    let num : number = value.replace(/\s+/, "").length;
    return num;
}

function str_len_both(value:String, spaces:boolean):number{
   let num : number; 
    if(spaces){
        num = value.length;
    } else {  
        num = value.replace(/\s+/, "").length;
      }
      return num;
}

console.log(str_len('test 1'));
console.log(str_len_nospaces('test 1'));
console.log(str_len_both('test 1', true));
console.log(str_len_both('test 1'));