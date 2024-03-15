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


function pairElement(str) {
    let newStrand = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "G") {
        newStrand.push([str[i], "C"]);
      }
      if (str[i] == "C") {
        newStrand.push([str[i], "G"]);
      }
      if (str[i] == "A") {
        newStrand.push([str[i], "T"]);
      }
      if (str[i] == "T") {
        newStrand.push([str[i], "A"]);
      }
    }
    console.log(newStrand);
    return newStrand;
  }
  
  //document.getElementById("DNA").innerHTML = pairElement("GCG");
  
  
  function pairElement2(str) {
    // Function to match each character with the base pair
    const matchWithBasePair = function(char) {
      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
    console.log(pairs)
    return pairs;
  }
  
  function sumPrimes(num) {
  
    function isPrime(num) {
      const sqrt = Math.sqrt(num);
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0)
          return false;
      }
      return true;
    }
  
  
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
  
  document.getElementById("what").innerHTML = sumPrimes(977);
  
  


  document.getElementById("DNA2").innerHTML = pairElement2("GCG");
  

document.getElementById("cheese").innerHTML = catsTwo('this is way too many beans for my cup of coffee dang it, what in the heck')
