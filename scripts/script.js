
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
couponApplyBtn.addEventListener('click', handleApplyCouponButtonClick);

// next button click handling
nextButton.addEventListener('click', handleNextButtonClick);

// Continue button click handling
continueButton.addEventListener('click', handleContinueButtonClick);
