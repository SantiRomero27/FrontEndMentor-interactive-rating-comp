// Opinion card function
function addOpinionCard(container) {
    // Create the card
    const opinionCard = document.createElement("div");
    opinionCard.classList.add("main-card", "opinion-card");

    // Add content
    opinionCard.innerHTML = `
    <div class="opinion-card__star-container">
        <img src="../images/icon-star.svg" alt="star image" />
    </div>
    <article class="opinion-card__article">
        <span class="opinion-card__article__title">How did we do?</span>
        <p class="opinion-card__article__paragraph">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
        </p>
    </article>
    <div class="opinion-card__rating-container">
        <div class="opinion-card__rating-container__number-container">
            <span
                class="opinion-card__rating-container__number-container__number"
                >1</span
            >
        </div>
        <div class="opinion-card__rating-container__number-container">
            <span
                class="opinion-card__rating-container__number-container__number"
                >2</span
            >
        </div>
        <div class="opinion-card__rating-container__number-container">
            <span
                class="opinion-card__rating-container__number-container__number"
                >3</span
            >
        </div>
        <div class="opinion-card__rating-container__number-container">
            <span
                class="opinion-card__rating-container__number-container__number"
                >4</span
            >
        </div>
        <div class="opinion-card__rating-container__number-container">
            <span
                class="opinion-card__rating-container__number-container__number"
                >5</span
            >
        </div>
    </div>
    <button class="opinion-card__button">SUBMIT</button>
    `;

    // Aux values
    const numberElList = opinionCard.querySelectorAll(
        ".opinion-card__rating-container__number-container"
    );
    const buttonEl = opinionCard.querySelector(".opinion-card__button");

    // Append to the root element
    container.appendChild(opinionCard);

    return {
        numberElList,
        buttonEl,
        opinionCard,
    };
}

// Thanks card function
function addThanksCard(container, resultNumber) {
    // Create the card
    const thanksCard = document.createElement("div");
    thanksCard.classList.add("main-card", "thanks-card");

    // Add content
    thanksCard.innerHTML = `
        <img
        src="../images/illustration-thank-you.svg"
        aria-hidden="true"
        class="thanks-card__image"
        />
        <span class="thanks-card__result">You selected ${resultNumber} out of 5</span>
        <article class="thanks-card__article">
            <span class="thanks-card__article__title">Thank you!</span>
            <p class="thanks-card__article__text">
                We appreciate you taking the time to give a rating. If
                you ever need more support, don't hesitate to get in
                touch!
            </p>
        </article>`;

    // Append
    container.appendChild(thanksCard);
}

// Main function
(function () {
    // Aux value
    let resultValue;

    // Get the root
    const rootEl = document.querySelector("#root");

    // First, add the opinion card, and get the important elements from it
    const { numberElList, buttonEl, opinionCard } = addOpinionCard(rootEl);

    // Number selection event
    numberElList.forEach((numberCont) => {
        numberCont.addEventListener("click", () => {
            // Once a number is clicked, delete the selected tag from every other
            for (const secNumCont of numberElList) {
                secNumCont.classList.remove("selected");
            }

            // Add the selected tag
            numberCont.classList.add("selected");

            // Get the selected value
            resultValue = numberCont.children[0].textContent;
        });
    });

    // Submit button event
    buttonEl.addEventListener("click", () => {
        // If there's no selected value, just alert
        if (!resultValue) {
            alert("You have not selected any value!");

            return;
        }

        // Dismount the current card and mount the thanks card
        opinionCard.remove();
        addThanksCard(rootEl, resultValue);
    });
})();
