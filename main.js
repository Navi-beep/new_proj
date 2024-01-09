function cats(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

function catsTwo(beans){
    let thing = beans.split(" ")
    console.log(thing)
    let newBeans = []
    for(let i = 0; i < thing.length; i++){
        if(thing[i] === 'is'){
            newBeans.push('not')
        }
        newBeans.push(thing[i])
    }
    return newBeans
}


document.getElementById("cheese").innerHTML = catsTwo('this is way too many beans for my cup of coffee')
