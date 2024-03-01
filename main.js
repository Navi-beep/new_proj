function cats(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

function catsTwo(beans){
    const thing = beans.split(" ")

    const whereIsIt = thing.indexOf('is');

    if(whereIsIt !== -1 ){
        thing.splice(whereIsIt + 1, 0, 'not');

    }

    const result = thing.join(' ');

    return result 
}


function catsThree(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}


function birdo(arr){
    let newArr = []
    for(let i =0; i <arr.length; i++){
        newArr.push(arr[i]+ 2)
    } 
    return newArr
}

console.log(birdo([1,2,3,4,5,6,7,8,9]))


document.getElementById("cheese").innerHTML = catsTwo('this is way too many beans for my cup of coffee dang it, what in the heck')
