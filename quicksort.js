
function quickSort(ar,start,end){
    if(start<end){

    const pIndex  = partition(ar,start,end);
    quickSort(ar,start,pIndex-1);
    quickSort(ar,pIndex+1,end);
    }
}

function partition(arr,start,end){
    const pivot = arr[end];
    let pIndex = start;
    for(let i=start;i<end;i++){
        if(arr[i]<=pivot){
            let temp = arr[i];
            arr[i]=arr[pIndex];
            arr[pIndex] = temp;
            pIndex++;
        }
    }
    let temp  = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = temp;
    return pIndex;
}
function testQuickSort(){
    const arr = [21,34,0,1,5,2,3,4,10,9,8,15,6];
    quickSort(arr,0,12);
    console.log(arr);
}

testQuickSort();