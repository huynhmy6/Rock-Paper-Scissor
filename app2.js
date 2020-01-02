let game = () => {
    let pScore = 0;
    let cScore = 0;

    // game starting

    let startGame = () => {
        let playButton = document.querySelector(".intro button");
        let match = document.querySelector(".match");
        let introScreen = document.querySelector("intro");

        playButton = addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    }

    // intro faded, match screen enabled

    let playMatch = () => {
        let options = document.querySelector(".options button");
        let computerHand = document.querySelector(".computer-hand");
        let playerHand = document.querySelector("player-hand");
        let hands = document.querySelector(".hands img");


        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        // Computer options
        let computerOptions = ["rock", "paper", "scissor"];

        options.forEach(option => {
            option.addEventListener("click", () => {
                let computerNumber = Math.floor(Math.random() * 2);
                let computerChoice = computerOptions[computerNumber];
            });
        });

        setTimeout(() => {
            playerHand = `./assets.${this.textContent}.png`;
            computerHand = `./assets.${computerChoice}.png`;
        }, 2000);


    }
