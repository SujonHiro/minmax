const arr=[23,43,54,67,77,90,30,2]
var min= arr[0];
var max =arr[0];

for(i=0;i<arr.length;i++){
    if(arr[i]<min){
        min =arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(min);
console.log(max);
