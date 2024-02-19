// 
const nextButton = document.getElementById('next-btn');
const phoneNumber = document.getElementById('phone-no');
const seatButtons = document.getElementsByClassName('seat-button');
const bookedSeatCount = document.getElementById('booked-seat-count');
const buyTicketButton = document.getElementById('buy-ticket-button');
const buyTicketSection = document.getElementById('buy-ticket-section')
const couponBox = document.getElementById('coupon-box');
const couponApplyBtn = document.getElementById('coupon-apply-btn');
const continueButton = document.getElementById('continue-btn');



// variables 
let seatCount = 0;

// initially
nextButton.disabled = true;

// function to toggle nextButton disabled status
function toggleNext() {
    if (phoneNumber.value !== null && seatCount !== 0) {
        nextButton.disabled = false;
    }
    else
        nextButton.disabled = true;
}


nextButton.addEventListener('click', () => {
    console.log('Next button clicked');
})


function handleSeatButtonClick(target) {
    target.classList.add('bg-green-500');
}



// print total ticket price 
function updateTotalTicketPrice() {
    const totalPrice = document.getElementById('total-price-section');
    totalPrice.innerText = seatCount * 550;
}

function updateRemainingSeatCount() {
    const remainingSeatCount = document.getElementById('remaining-seat-count');
    remainingSeatCount.innerText = (40 - seatCount);
}


function updateGrandTotal(grandTotal) {
    const grandTotalPrice = document.getElementById('grand-total');
    grandTotalPrice.innerText = grandTotal;
}



