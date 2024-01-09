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


document.getElementById("cheese").innerHTML = catsTwo('this is way too many beans for my cup of coffee')
