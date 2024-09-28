//1
for (let i = 0; i <= 5; i++) {
    console.log(i,"Q1");

}

//2

for (let i = 0; i <= 8; i++) {
    console.log(i*2+2+1,"Q2"); 
}



//3

for (let i = 0; i < 10; i++) {
    console.log(i * 2 + 1,"Q3");
}


//4
function print2DArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] ,"Q4");
        }
    }
}
print2DArray([[1, 2, 3], [4, 5, 6], [7, 8, 9] ]);



//5

function printReverse(arr1) {
    for (let i = arr1.length - 1; i >= 0; i--) {
        console.log(arr1[i],"Q5");
    }
}
printReverse([1, 2, 3, 4, 5]);
