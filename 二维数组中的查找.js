function Find(target, array)
{
    var i,j,row,column;
    row=arr.length;
    column=arr[0].length;
    i=row-1;
    j=0;
    while(i>=0&&j<column-1){
        if(arr[i][j]<target){
            j++;
        }else if(arr[i][j]>target){
            i--;;
        }else{
            return true;
        }
    }
    return false;
}
var arr=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
target=5;
console.log(Find(target,arr));