function squareEveryDigit(number) {
    num = number.toString()
    splitNum = num.split('')
    let result = ''

    for(let i = 0; i < splitNum.length; i++){
        let newNumber = Number(splitNum[i])
        let newerNum = Math.pow(newNumber, 2)
        result += newerNum
    }   
    return result
}

console.log(squareEveryDigit(946)) // When running 946, you should see a result of 811636

console.log(squareEveryDigit(34525))