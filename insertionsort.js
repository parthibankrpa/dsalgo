let arr = [7,2,4,1,5,3];
function insertionSort(){
   // console.log(arr);
    for(let i=1;i<=arr.length-1;i++){
        let value = arr[i];
        let hole = i;
        while(hole>0 && value < arr[hole-1]){
            console.log(hole,arr[hole-1],arr[hole])
            arr[hole] = arr[hole-1];            
            hole = hole-1;
            console.log(hole,value,arr[hole])
        }

        arr[hole] = value;
        console.log(arr);
    }
    console.log(arr);
}

insertionSort();
