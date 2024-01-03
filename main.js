function cats(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

document.getElementById("cheese").innerHTML = cats([1,2,3,4,5,6,7,8,9,10])
