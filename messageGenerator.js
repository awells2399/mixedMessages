const messages = {
  quotes: [
    "A goal is a dream with a deadline.",
    "A strong foundation at home sets you up for a strong foundation at work.",
    "Anger is never without a reason, but seldom with a good one.",
    "Business is like riding a bicycle. Either you keep moving or you fall down.",
  ],

  sportsFacts: [
    "Pittsburgh is the only city where all the major sports teams have the same colors: Black and gold.",
    "Basketball legend Wilt Chamberlain never fouled out of a game.",
    "The home team must provide the referee with 36 footballs for each National Football League game.",
    "The Dallas Cowboys hired the NFL’s first professional cheerleading squad in 1972.",
    "Golf is the only sport to be played on the moon.",
    "Kite flying is a professional sport in Thailand.",
    "Two days out of 365 days of the year feature no professional sports games (MLB, NBA, NHL, or NFL). The day before and the day after the MLB All-Star Break",
  ],

  randomSayings: [
    "Come to the dark side; we have cookies.",
    "My best friend is better than yours!",
    "Secret admiers are stalkers with stationary.",
    "To the world, you are just one person, but to one person, you are the world.",
    "Some minds are like concrete; thoroughly mixed and permanently set.",
    "Tell the truth and run.",
    "Never go to a doctor whose office plants have died.",
    "Dont't follow me, I'm lost too.",
  ],

  get randomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  },

  get randomSportFact() {
    return this.sportsFacts[
      Math.floor(Math.random() * this.sportsFacts.length)
    ];
  },

  get randomSaying() {
    return this.randomSayings[
      Math.floor(Math.random() * this.randomSayings.length)
    ];
  },
};

const formatter = (string, position) => {
  // 1 = first and so on
  if (position === 1) {
    return string.slice(0, string.length - 1) + " however, ";
  } else if (position === 2) {
    return (
      string.charAt(0).toLowerCase() +
      string.slice(1, string.length - 1) +
      ", and "
    );
  } else {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
};

//Create Message by mixing 1 string from each property in messages
const getMixedMessage = () => {
  let propsChoosen = "012"; //0 = quotes, 1 = sports, 2 = saying
  let mixedMessage = "";
  let ranNum;

  for (let i = 0; i < 3; i++) {
    switch (
      propsChoosen.charAt(Math.floor(Math.random() * propsChoosen.length))
    ) {
      case "0":
        if (i === 0) {
          mixedMessage += formatter(messages.randomQuote, 1);
        } else if (i == 1) {
          mixedMessage += formatter(messages.randomQuote, 2);
        } else {
          mixedMessage += formatter(messages.randomQuote, 3);
        }
        propsChoosen = propsChoosen.replace("0", "");
        console.log(propsChoosen);
        break;

      case "1":
        if (i === 0) {
          mixedMessage += formatter(messages.randomSportFact, 1);
        } else if (i == 1) {
          mixedMessage += formatter(messages.randomSportFact, 2);
        } else {
          mixedMessage += formatter(messages.randomSportFact, 3);
        }
        propsChoosen = propsChoosen.replace("1", "");
        console.log(propsChoosen);
        break;

      case "2":
        if (i === 0) {
          mixedMessage += formatter(messages.randomSaying, 1);
        } else if (i == 1) {
          mixedMessage += formatter(messages.randomSaying, 2);
        } else {
          mixedMessage += formatter(messages.randomSaying, 3);
        }
        propsChoosen = propsChoosen.replace("2", "");
        console.log(propsChoosen);
        break;
    }
  }

  return mixedMessage;
};

console.log(getMixedMessage());
