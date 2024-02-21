
// implementing 'buy tickets' button using scrollIntoView()
document.addEventListener("DOMContentLoaded", function () {

    buyTicketButton.addEventListener('click', function () {
        // Scroll to the target element
        buyTicketSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// phoneNumber.addEventListener('keyup', function handleEvent() {
//     // toggle the next button
//     if (phoneNumber.value !== null && seatCount !== 0) {
//         toggleNext();
//     }
//     else if (phoneNumber.value === null) {
//         toggleNext();
//     }
// })


// change seat color and other counts related to seat if selected
function handleSeatButtonClick(event) {
    let seatButton = event.target;
    const seatName = seatButton.innerText;
    // booking a seat
    if (seatButton.classList.contains('bg-gray-100') && seatCount < 4) {
        seatButton.classList.remove('bg-gray-100', 'text-black');
        seatButton.classList.add('bg-green-500', 'text-white');
        seatCount = seatCount + 1;
        addSeatToList(seatName);
    }
    // releasing a seat
    else if (seatButton.classList.contains('bg-green-500')) {
        seatButton.classList.remove('bg-green-500', 'text-white');
        seatButton.classList.add('bg-gray-100', 'text-black');
        seatCount = seatCount - 1;
        removeSeatFromList(seatName);
    }
    // toggle the next button
    if (phoneNumber.value !== null && seatCount !== 0) {
        toggleNext();
    }
    bookedSeatCount.innerText = seatCount;
    updateTotalTicketPrice();
    updateGrandTotal(550 * seatCount);
    updateRemainingSeatCount();
}

// add event to all seat buttons
for (let i = 0; i < seatButtons.length; ++i) {
    seatButtons[i].addEventListener('click', handleSeatButtonClick);
}

// coupon apply section
couponApplyBtn.addEventListener('click', function () {
    if (couponBox.value === 'NEW15') {
        updateGrandTotal(seatCount * 550 - seatCount * 550 * 0.15);
        //couponFeedback.innerText = 'Discount by coupon "NEW15": TK ' +  (seatCount*550*0.15).toString
        couponApplyBtn.disabled = true;
    }
    else if (couponBox.value === 'Couple20') {
        updateGrandTotal(seatCount * 550 - seatCount * 550 * 0.2);
        //couponFeedback.innerText = 'Discount by coupon "Couple20": TK ' +  (seatCount*550*0.2).toString;
        couponApplyBtn.disabled = true;
    }
    else {
        var couponFeedback = document.getElementById('coupon-feedback');
        couponFeedback.innerText = 'The keyword you entered is not a valid coupon code!';
    }
})

// next button click handling
nextButton.addEventListener('click', function () {
    const firstPage = document.getElementById('first-page');
    const firstPageFooter = document.getElementById('first-page-footer');
    var nextPage = document.getElementById('next-page');
    if (phoneNumber.value === '') {
        alert('Enter phone number to confirm tickets!')
    }
    if(seatCount === 0){
        alert('Select a seat to continue booking.')
    }
    if (phoneNumber.value !== '' && seatCount !== 0) {
        firstPage.classList.add('hidden');
        firstPageFooter.classList.add('hidden');
        nextPage.classList.remove('hidden');
    }
})
