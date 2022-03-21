const quotes = [
    {
        quote: "하늘은 스스로 돕는자를 돕는다",
        author: "하늘지기"
    },
    {
        quote: "행복은 가까이 있다.",
        author: "행복지기"
    },
    {
        quote: "살고자하는자는 죽는다",
        author: "이순신"
    },
    {
        quote: "죽고자하면 산다",
        author: "이순신"
    },
    {
        quote: "소신에게는 아직 12척의 배가 있다",
        author: "이순신"
    },
    {
        quote: "사랑은 언제나 오래 참는다",
        author: "성경"
    },
    {
        quote: "태초에 천지가 창조되다",
        author: "성경"
    },
    {
        quote: "나를 따르라",
        author: "장군"
    },
    {
        quote: "동트기전새벽이 가장어둡다",
        author: "일기예보"
    },
    {
        quote: "최선을 다해라.",
        author: "게으름뱅이"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function getDayGoodsay() {
    console.log(quote);
    console.log(author);
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

getDayGoodsay();
 
