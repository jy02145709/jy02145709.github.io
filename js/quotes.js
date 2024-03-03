const quotes = [
  {
    quote: "어제의 최선은 오늘의 최악보다 나을 수 있다.",
    author: "John Wooden",
  },
  {
    quote: "당신이 무엇을 믿든, 그것이 될 수 있습니다.",
    author: "Oprah Winfrey",
  },
  {
    quote: "성공의 비결은 실패의 겁니다",
    author: "Benjamin Franklin",
  },
  {
    quote: "노력은 결코 헛되지 않습니다.",
    author: "Aesop",
  },
  {
    quote: "언젠가 시작하라. 어제 시작했다면 오늘은 이미 늦었다.",
    author: "John Wooden",
  },
  {
    quote:
      "당신이 가진 시간을 낭비하지 마세요. 그것은 인생이 구성된 유일한 것입니다.",
    author: "Benjamin Franklin",
  },
  {
    quote: "행복은 자신을 발견하는 것이 아니라 자신을 만드는 것입니다.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "노력하는 사람이 실패하지 않는다. 실패하는 사람이 허락하지 않는다.",
    author: "Woody Allen",
  },
  {
    quote: "가장 큰 영광은 결코 넘어지지 않고 다시 일어서는 데 있습니다.",
    author: "Confucius",
  },
  {
    quote: "우리의 삶은 우리의 생각에 의해 결정된다.",
    author: "Marcus Aurelius",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
