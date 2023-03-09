function* numgen () {
    let num = 1
    while(true){
        yield num++
    }
}

const numGen = numgen()

console.log(numGen.next())
console.log(numGen.next())
console.log(numGen.next())
console.log('ololololo')
console.log(numGen.next())
console.log(numGen.next())
console.log(numGen.next())
