let Motivation = document.getElementById('motivateb');
        let MotivationSpace = document.getElementById('Motivation')
        let quote = ["The Pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty <br> ~ Winston ChurchHill",
        "it is not whether you get knocked down, it is whether you get up <br> ~ Vince Lombardi",
    "You are never too old to set another goal or to dream a new dream <br> ~ C.S Lewis", "You don't have to be great to start, but you have to start to be great <br> ~ Zig Ziglar",
"A clear vision backed by definite plans gives you a tremendous feeling of confidence and personal Power. <br> Brian Tracy"]
        Motivation.addEventListener('click', getTheQuote);

        function getTheQuote() {
            let quoteNo = Math.floor(Math.random() * quote.length);
            MotivationSpace.innerHTML = quote[quoteNo]
        }


        