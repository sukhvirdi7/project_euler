var sum = 0
var a = 1
var b = 2
var temp 

while (b < 4e6){
    if(b %  2 == 0){
        sum+= a
        a = temp
    }
}

console.log(sum)