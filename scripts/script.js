
// implementing 'buy tickets' button using scrollIntoView()
document.addEventListener("DOMContentLoaded", function () {

    buyTicketButton.addEventListener('click', function () {
        // Scroll to the target element
        buyTicketSection.scrollIntoView({ behavior: 'smooth' });
    });
});

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
        updateCouponDiv(seatCount * 550 * 0.15, 'NEW15');
    }
    else if (couponBox.value === 'Couple20') {
        updateGrandTotal(seatCount * 550 - seatCount * 550 * 0.2);
        //couponFeedback.innerText = 'Discount by coupon "Couple20": TK ' +  (seatCount*550*0.2).toString;
        couponApplyBtn.disabled = true;
        updateCouponDiv(seatCount * 550 * 0.2, 'Couple20');
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
    if (seatCount === 0) {
        alert('Select a seat to continue booking.')
    }
    if (phoneNumber.value !== '' && seatCount !== 0) {
        firstPage.classList.add('hidden');
        firstPageFooter.classList.add('hidden');
        nextPage.classList.remove('hidden');
    }
})



