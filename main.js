

const firstClassPlusButton = document.querySelector(".first-class-plus");
const firstClassMinusButton = document.querySelector(".first-class-minus");
const economyPlusButton = document.querySelector(".economy-plus");
const economyMinusButton = document.querySelector(".economy-minus");
const bookButton = document.querySelector(".book-button");
let economyPrice = 0; let firstClassPrice = 0;  //THIS VARIABLES ARE FOR CALCULATING TOTAL,SUB-TOTAL,TAX

firstClassPlusButton.addEventListener("click", () => {
    firstClassButtonController(true);

});
firstClassMinusButton.addEventListener("click", () => {
    firstClassButtonController(false);
});

economyPlusButton.addEventListener("click", () => {
    economyButtonController(true);


});
economyMinusButton.addEventListener("click", () => {
    economyButtonController(false);

});

/////////////BUTTON CONTROLER FUNCTION FOR ECONOMY TICKET////////////////
function economyButtonController(isIncrease) {
    const economyQuantity = document.querySelector(".economy-class-quantity").value;
    const economyTicketPrice = 100;
    const update = changeHandler(economyQuantity, economyTicketPrice, isIncrease);
    economyPrice = update.increasedPrice;
    document.querySelector(".economy-sit-quantity").innerHTML = update.increasedQuantiy;    //for bonus section
    document.querySelector(".economy-class-quantity").value = update.increasedQuantiy;
    outputTotal();
};
/////////////BUTTON CONTROLER FUNCTION FOR FIRST CLASS TICKET////////////////
function firstClassButtonController(isIncrease) {
    const firstClassQuantity = document.querySelector(".first-class-quantity").value;
    const firstClassTicketPrice = 150;
    const update = changeHandler(firstClassQuantity, firstClassTicketPrice, isIncrease);
    firstClassPrice = update.increasedPrice;
    document.querySelector(".first-class-sit-quantity").innerHTML = update.increasedQuantiy;    //for bonus section
    document.querySelector(".first-class-quantity").value = update.increasedQuantiy;
    outputTotal();
};

/////////CALCULATION OUTPUT AREA////////////////
function outputTotal() {
    document.querySelector(".sub-total").innerHTML = calculate().subTotal;
    document.querySelector(".tax").innerHTML = calculate().tax;
    document.querySelector(".total").innerHTML = calculate().total;
    document.querySelector(".fianl-sub").innerHTML = calculate().subTotal;
    document.querySelector(".fianl-tax").innerHTML = calculate().tax;
    document.querySelector(".fianl-total").innerHTML = calculate().total;
};


///////////////////BONUS AREA///////////////////

bookButton.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".journey-from").innerHTML = document.querySelector(".fly-from").value;
    document.querySelector(".journey-to").innerHTML = document.querySelector(".fly-to").value;
    document.querySelector(".journey-date").innerHTML = document.querySelector(".departure-date").value;
    document.querySelector(".return-date").innerHTML = document.querySelector(".return").value;
    document.querySelector(".first-page").style.display = "none";
    document.querySelector(".booking-success-area").style.display = "block";

});



//////////////////Plus Minus Handler/////////////
function changeHandler(quantity, ticketPrice, isIncrease) {
    let newQuantity = 0;
    if (isIncrease === true) {
        newQuantity = parseInt(quantity) + 1;
    } else if (isIncrease === false) {
        if (quantity > 0) {
            newQuantity = parseInt(quantity) - 1;
        } else {
            newQuantity = 0;
        };
    };
    const newTicketPrice = ticketPrice * newQuantity;

    return {
        increasedQuantiy: newQuantity,
        increasedPrice: newTicketPrice

    };
};

function calculate() {
    const subTotal = economyPrice + firstClassPrice;
    const tax = subTotal * .01;
    const total = subTotal + tax;
    return {
        subTotal: subTotal,
        tax: tax,
        total: total
    };
};


