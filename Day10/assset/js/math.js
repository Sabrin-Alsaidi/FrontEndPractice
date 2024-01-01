function EnhancedSub(x , y , ...argus)
{
    sub=x-y;
    if(argus.length!=0){
        for(let i =0;i<argus.length;i++){
            sub=sub-argus[i];
        }

    }
    return sub;

}

console.log(EnhancedSub(1,2,3,4,5,6,7,8,9));
console.log("-----------------");
let arr=[1,2,3,4,5,6,7,8,9];
console.log(...arr);
console.log(EnhancedSub(...arr));
