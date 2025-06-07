const output = document.querySelector(".output");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const search = document.querySelector("#search");
const para = document.querySelector("p");

let message = "";

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

//for loops
for(cat of cats){
    message += `${cat} \n`;
}

//maps
const mapCats = cats.map(cat => cat.toUpperCase());
message += `map cats: ${mapCats} \n`;

//filter
const filteredCats = cats.filter(cat => cat.startsWith("L"));
message += `filtered cats: ${filteredCats} \n`;

//standard for loop
let text1 = "";
for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        text1 += `${i} x ${j} = ${i * j} \t`;
    }
    text1 += `\n`;
}
message += `${text1} \n`;

//break
const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];

search.addEventListener("click", (event) => {
    event.preventDefault();
    const inputName = input.value.toLowerCase();
    input.value = "";
    input.focus();

    let found = false;
    for(const contact of contacts){
        const splitContact = contact.split(":");
        if(splitContact[0].toLowerCase() === inputName){
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]} \n`;
            found = true;
            break;
        }
    }
    if(!found){
        para.textContent = "Contact not found";
    }
});

//continue
const input2 = document.querySelector("#input2");
const click2 = document.querySelector("#click2");
const para2 = document.querySelector(".para2");

click2.addEventListener("click", (event) => {
    event.preventDefault();
    const num = parseInt(input2.value);
    input2.value = "";
    input2.focus();
   
    for(let i=1; i<=num; i++){
        //Below is my idea.
        /*
        const strNum = String(Math.sqrt(i)).split(".");
        const num2 = Math.floor(Number(strNum[1]) * 10);
        if((num2 > 0) ){
            continue;
        }
        para2.textContent += `${i}  `;
        */
       //gemini suggested
       const sqRoot = Math.sqrt(i);
       if(Number.isInteger(sqRoot)){
            para2.textContent += `${i}  `;
       }
    }
});

//while
const div3 = document.querySelector(".container3");
const para3 = document.querySelector(".para3");
const btn3 = document.querySelector(".btn3");
para3.style.whiteSpace = "pre-wrap";

btn3.addEventListener("click", (event) => {
    event.preventDefault();
    para3.textContent = `Countdown starts now! \n`;

    let ctr=10;
    do{
        const para4 = document.createElement("p");
        para4.style.whiteSpace = "pre-wrap";
        if(ctr === 10){
            para4.textContent = `COUNTDOWN 10 \n`;
        }else if(ctr === 0){
            para4.textContent = `Blast off! \n`
        }else {
            para4.textContent = `${ctr} \n`
        }
        ctr--;
        
        div3.appendChild(para4);
    }while(ctr >= 0);
});

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let counter = 0;
let admitted = [];
let refused = [];
while(counter < people.length){
    if(people[counter] === "Lola" || people[counter] === "Phil"){
        refused.push(people[counter]);
    }else {
        admitted.push(people[counter]);
    }
    counter++;
}
message += `admitted: ${admitted}
refused: ${refused} \n`;

let n = 0;
let txtCtr = ""
//continue
for(; n<100; n++){
    if(n % 2 == 0){
        continue;
    }
    txtCtr += `${n} `;
}
message += `${txtCtr} \n`;

//test
let txtCtr2 = "++i: ";
function testing1(){
    let i=0;
    while(++i < 5){
        txtCtr2 += `${i}    `
    }
    message += `${txtCtr2} \n\n`;
    txtCtr2 = "j++: ";
    let j=0;
    while(j++ < 5){
        txtCtr2 += `${j}    `;
    }
    message += `${txtCtr2} \n\n`;
    txtCtr2 = "for k++: ";
    for(let k=0; k < 5; k++){
        txtCtr2 += `${k}    `;
    }
    message += `${txtCtr2} \n\n`;
    txtCtr2 = "for ++m";
    for(let m=0; m<5; ++m){
        txtCtr2 += `${m}    `;
    }
    message += `${txtCtr2} \n\n`;

}
testing1();

submit.addEventListener("click", () => {
    output.textContent = message;
});

const input5 = document.querySelector("#theN");
const submit5 = document.querySelector("#submit5");
const para5 = document.querySelector(".para5");

//label
submit5.addEventListener("click", (event) => {
    event.preventDefault();

    const num = parseInt(input5.value);
    let textCtr3 = `Prime Numbers ${num}: `;

    outerLoop: for(let i=2; i<num; i++){
        for(let j=2; j < i; j++){
            if(i % j === 0){
                continue outerLoop;
            }
        }
        textCtr3 += `${i}   `;        
    }
    para5.textContent += `${textCtr3} \n`;
});