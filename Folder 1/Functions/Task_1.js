//1
function stringToArray (){
    let str = "Orange Academy";
    let split = str.split(" ");
    return split;
}
console.log(stringToArray());
//2
function hiddinNumber (phoneNumber){
    const hiddin = "*******";
    const visibilty = phoneNumber.slice(7);
    return hiddin + visibilty;
}
console.log(hiddinNumber("0790274961"));
//3
function hideEmail(email) {
    let [local, domain] = email.split("@");
    return local.slice(0, 6) + '…@' + domain;
}
console.log(hideEmail("orange_academy@orange.jo")); 
//4
function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstWord("coding academy by orange")); 
//5
function capitalizeEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//6
function flipNumber (Number){
    let num = Number.toString();
    let flip = '';
    for(let i = num.length - 1;i>=0;i--){
        flip+= num[i];
    }
return flip;
}
console.log(flipNumber(1234));
//7
function swaps (numOne , numTwo){
   numThree = numOne;
   numOne = numTwo;
   numTwo =numThree;
   return [numOne , numThree];
}
console.log(swaps(4,2));
//8
function removeCharacterAt(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}
console.log(removeCharacterAt("Orange", 3)); 
//9
function mergeWithoutFirstCharacter(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}
console.log(mergeWithoutFirstCharacter("lora", "inge"));
//10
function isCharInFirstOrLastPosition(char, str) {
    return str.startsWith(char) || str.endsWith(char);
}
console.log(isCharInFirstOrLastPosition("o", "orange")); 
console.log(isCharInFirstOrLastPosition("z", "orange")); 
//11
function wordsToArray(str) {
    return str.split(" ");
}
console.log(wordsToArray("Coding Academy by Orange")); 
//12
function sortCharacters(str) {
    return str.split("").sort().join("");
}
console.log(sortCharacters("Orange"));
