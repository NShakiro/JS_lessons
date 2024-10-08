function maxValue(arr=[6,4, 2,3,6,4, 2]){
 let modulo = (10**8 + 7)
 let maxValue = 0
 let newValue
 let newArr = []
 for(i = 0; i <arr.length -1; i++){
    newValue = arr[i]**arr[i+1]
    newArr.push(newValue)

    if(maxValue <= newValue){
        maxValue = newValue
    }
 }

 for(i =0; i<newArr.length; i++){
    if(newArr[i] == maxValue){
        console.log(i)
        break
    }
 }
 console.log(newArr, maxValue)
}

maxValue()