//1
let box1 = [1,2,3,4,5]
console.log(box1);
//2
let box2 = ["Ваше имя?","Ваша фамилия?"]
console.log(box2);
//3
let arr = ['a', 'b', 'c', 'd']
console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`);
//4
let box3 = ["Яблоко", "Груша", "Апельсин", "Банан"]
console.log(box3.length);
//5
let box4 = ["Яблоко", "Груша", "Апельсин", "Банан"]
console.log(box4[box4.length - 1]);
//6
let box5 = ["a", "b", "c"]
box5[0] = 1;
box5[1] = -2;
box5[2] = -3;
console.log(box5);
//7
let box6 = [ 5, 10, 15, 81]
let i = box6.map((num) => num + 3);
console.log(i);
//8
let box7 = []
for(let i = 1; i<=20; i++) {
    box7.push(i);
}
console.log(box7);
//9
let box8 = []
for(let i = 10; i<= 40; i++) {
    if (i %2 ==0 ) {
        box8.push(i);        
    }
}
console.log(box8);
//10

//11
let box10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
box10.reverse();
console.log(box10);