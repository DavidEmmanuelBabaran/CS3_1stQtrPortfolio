for (let i = 1; i <= 10; i++){
    console.log(i);
}

i = 1;
while( i <= 10){
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while(i < 9); 




grades = [90, 88, 99, 98, 97]

sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
}
console.log(sum)

average = (sum / grades.length);
console.log(average);

console.log(Math.min(...grades))

max = -10000
for (let grade of grades) {
    if (grade > max) {
        max = grade
    }
}