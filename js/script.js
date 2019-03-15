let myStr = "";

for(let i=1; i<=10; i++) {
    for(let j=1; j<=10; j++) {
        myStr += i*j + " ";
    }
    console.log(myStr);
    myStr = "";
}