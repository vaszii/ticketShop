const button = document.querySelector("button");
button.addEventListener("click", createResult);

const type = {
    "adult" : 350,
    "student" : 175,
    "retired" : 100,
    "animal" : 50
}

function createResult(){
    const quantity = document.querySelector(".myContainer div input");
    const ticketType = document.querySelector(".myContainer div:nth-child(2) select");
    const result = document.querySelector(".myContainer div:nth-child(3) input");
    let discount;
    /*
    if (ticketType.value === "adult"){
        result.value = quantity.value*350 + " Ft";
    }
    else{
        result.value = `${quantity.value*175} Ft`;//template literal
    }
    */
    /*Ternary operator: kifejezés ? Ha igaz : Ha hamis */
    
    discount = quantity.value >= 10 ? 0.9 : 1;
    
    /*
    result.value = ticketType.value === "adult" ? `${quantity.value*350 * discount} Ft` : `${quantity.value * 175 * discount} Ft`; 
    */

    if(ticketType.value === "animal" && quantity.value > 1){
        quantity.value = "";
        quantity.focus();
        discount = 1;
        alert("Jó, hogy nem akarsz egy egész állatkertet!")
    }
    //Amikor több állatot írnak be, akkor a quantity.value értéke üres string lesz.
    //Mégis működik a szorzás itt lent! Mert "" --> 0 lesz! Inplicit konverzió!
    result.value = quantity.value * discount * type[ticketType.value];

}