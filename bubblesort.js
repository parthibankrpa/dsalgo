let arr = [5,3,1,7,4,9,21,15,-1,0,-2];

function bubbleSort(arr){
    for(k=0;k<arr.length-1;k++){
        for(let i=0;i<=arr.length -2;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }                
        }
        console.log(arr);  
    }

    }

console.log(arr);
bubbleSort(arr);
console.log(arr);