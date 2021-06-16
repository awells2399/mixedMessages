const messages = {
    quotes: ['A goal is a dream with a deadline',
    'A strong foundation at home sets you up for a strong foundation at work.',
    'Anger is never without a reason, but seldom with a good one.',
    'Business is like riding a bicycle. Either you keep moving or you fall down.'],

    sportsFacts: ['Pittsburgh is the only city where all the major sports teams have the same colors: Black and gold.',
    'Basketball legend Wilt Chamberlain never fouled out of a game.',
    'The home team must provide the referee with 36 footballs for each National Football League game.'],

    randomSayings: ['Come to the dark side; we have cookies.',
    'My best friend is better than yours!',
    'Secret admiers are stalkers with stationary.']
};

//Create Message by mixing 1 string from each property in messages
const getMixedMessage = () => {
    
    let propsChoosen = '';
    let mixedMessage ='';
    let ranPropIndex; 

    //randomize the order of the property being picked each time (0 = quotes, 1 = sports, 2 = sayings.)
    for(let i = 0; i < 3; i++){
        if(Math.floor(Math.random() * 3) === 0 && !propsChoosen.includes('0')){
            if(i === 0){
                mixedMessage += messages.quotes[Math.floor(Math.random() * messages.quotes.length)];
                propsChoosen += '0';
            }else if(i === 1){
                let formatedString = messages.quotes[Math.floor(Math.random() * messages.quotes.length)]
                formatedString = formatedString.charAt(0).toLowerCase() + formatedString.slice(1);
                mixedMessage += ', ' + formatedString;
                propsChoosen += '0';
            }else{
                let formatedString = messages.quotes[Math.floor(Math.random() * messages.quotes.length)]
                formatedString = formatedString.charAt(0).toLowerCase() + formatedString.slice(1);
                mixedMessage += ', and ' + formatedString;
            }
        }else if(Math.floor(Math.random() * 3) === 1 && !propsChoosen.includes('1')){
            if(i === 0){
                mixedMessage += messages.sportsFacts[Math.floor(Math.random() * messages.sportsFacts.length)];
                propsChoosen += '1';
            }else if(i === 1){
                let formatedString = messages.sportsFacts[Math.floor(Math.random() * messages.sportsFacts.length)]
                formatedString = formatedString.charAt(0).toLowerCase() + formatedString.slice(1);
                mixedMessage += ', ' + formatedString;
                propsChoosen += '1';
            }else{
                let formatedString = messages.sportsFacts[Math.floor(Math.random() * messages.sportsFacts.length)]
                formatedString = formatedString.charAt(0).toLowerCase() + formatedString.slice(1);
                mixedMessage += ', and ' + formatedString;
            }
        }else{
            if(i === 0){
                mixedMessage += messages.randomSayings[Math.floor(Math.random() * messages.randomSayings.length)];
                propsChoosen += '2';
            }else if(i === 1){
                let formatedString = messages.randomSayings[Math.floor(Math.random() * messages.randomSayings.length)]
                formatedString = formatedString.charAt(0).toLowerCase() + formatedString.slice(1);
                mixedMessage += ', ' + formatedString;
                propsChoosen += '2';
            }else{
                let formatedString = messages.randomSayings[Math.floor(Math.random() * messages.randomSayings.length)]
                formatedString = formatedString.charAt(0).toLowerCase() + formatedString.slice(1);
                mixedMessage += ', and ' + formatedString;
            }
        }
    };
};