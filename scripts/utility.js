//
const nextButton = document.getElementById("next-btn");
const phoneNumber = document.getElementById("phone-no");
const seatButtons = document.getElementsByClassName("seat-button");
const bookedSeatCount = document.getElementById("booked-seat-count");
const buyTicketButton = document.getElementById("buy-ticket-button");
const buyTicketSection = document.getElementById("buy-ticket-section");
const couponBox = document.getElementById("coupon-box");
const couponApplyBtn = document.getElementById("coupon-apply-btn");
const continueButton = document.getElementById("continue-btn");
const firstPage = document.getElementById('first-page');
const firstPageFooter = document.getElementById('first-page-footer');
const nextPage = document.getElementById('next-page');

// variables
let seatCount = 0;

// initially
nextButton.disabled = true;

// function to toggle nextButton disabled status
function toggleNext() {
    if (phoneNumber.value !== null && seatCount !== 0) {
        nextButton.disabled = false;
    } else nextButton.disabled = true;
}

nextButton.addEventListener("click", () => {
    console.log("Next button clicked");
});

function handleSeatButtonClick(target) {
    target.classList.add("bg-green-500");
}


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

// print total ticket price
function updateTotalTicketPrice() {
    const totalPrice = document.getElementById("total-price-section");
    totalPrice.innerText = seatCount * 550;
}

function updateRemainingSeatCount() {
    const remainingSeatCount = document.getElementById("remaining-seat-count");
    remainingSeatCount.innerText = 40 - seatCount;
}

function updateGrandTotal(grandTotal) {
    const grandTotalPrice = document.getElementById("grand-total");
    grandTotalPrice.innerText = grandTotal;
}

//function to add seat into list
function addSeatToList(seatName) {
    var newElement = document.createElement('div');
    newElement.setAttribute("id", seatName);
    newElement.classList.add('grid', 'grid-cols-3', 'mb-5', 'text-md', "font-base");
    const newElementInnerContent = `
        <h3>${seatName}</h3>
        <h3>Economic</h3>
        <h3>550</h3>
    `;
    newElement.innerHTML = newElementInnerContent;
    const addBillSection = document.getElementById('add-bill-section');
    addBillSection.appendChild(newElement);
    // console.log(newElement)
}

// function to remove seat from list
function removeSeatFromList(seatName) {
    const removeElement = document.getElementById(seatName);
    const parentElement = removeElement.parentNode;
    parentElement.removeChild(removeElement);
}

// hide coupon-div child elements
function updateCouponDiv(discount, couponName) {
    const couponBox = document.getElementById('coupon-box');
    couponBox.classList.add('hidden');
    const couponApplyBtn = document.getElementById('coupon-apply-btn');
    couponApplyBtn.classList.add('hidden');
    // document.getElementById('coupon-box').classList.add('hidden');
    // document.getElementById('coupon-apply-btn').classList.add('hidden');
    addDiscountStatement(discount, couponName)
}

// function addDiscountStatement
function addDiscountStatement(discount, couponName) {
    const couponDiv = document.getElementById('coupon-div');
    var newDiv = document.createElement('div');
    newDiv.classList.add('grid', 'grid-cols-3', 'mb-5', 'text-md', 'text-green-500', 'font-base', 'w-full', 'mt-2');

    // fix the content inside newDiv
    var discountStatement = document.createElement('p');
    discountStatement.classList.add("col-span-2")
    discountStatement.innerText = `Discount [${couponName}]: `;
    var discountPrice = document.createElement('p');
    discountPrice.innerText = `- BDT ${discount}`;

    // append children to newDiv
    newDiv.appendChild(discountStatement);
    newDiv.appendChild(discountPrice);

    // append newDiv to couponDiv
    couponDiv.appendChild(newDiv);
}

// Event handler fon apply-coupon-btn
function handleApplyCouponButtonClick() {
    if (couponBox.value === 'NEW15') {
        updateGrandTotal(seatCount * 550 - seatCount * 550 * 0.15);
        //couponFeedback.innerText = 'Discount by coupon "NEW15": TK ' +  (seatCount*550*0.15).toString
        couponApplyBtn.disabled = true;
        updateCouponDiv(seatCount * 550 * 0.15, 'NEW15');
    }
    else if (couponBox.value === 'Couple 20') {
        updateGrandTotal(seatCount * 550 - seatCount * 550 * 0.2);
        //couponFeedback.innerText = 'Discount by coupon "Couple 20": TK ' +  (seatCount*550*0.2).toString;
        couponApplyBtn.disabled = true;
        updateCouponDiv(seatCount * 550 * 0.2, 'Couple 20');
    }
    else {
        var couponFeedback = document.getElementById('coupon-feedback');
        couponFeedback.innerText = 'The keyword you entered is not a valid coupon code!';
    }
}

// Event handler fon next-btn
function handleNextButtonClick() {
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
}

// Event handler for continue button
function handleContinueButtonClick() {
    firstPage.classList.remove('hidden');
    firstPageFooter.classList.remove('hidden');
    nextPage.classList.add('hidden');
}

