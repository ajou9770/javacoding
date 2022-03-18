const quotes = [
    {
        quote : "The way to get started is to quit talkin and begin doing.",
        author : "Walt Disney",
    },
    {
        quote : "하늘은 스스로 돕는자를 돕는다.",
        author : "하늘지기1",
    },
    {
        quote : "살고자하면 죽고 죽고자 하면 산다 ",
        author : "김순신",
    },
    {
        quote : "내가 곧 진리요 생명이다 ",
        author : "Jesus",
    },
    {
        quote : "태초에 천지가 창조되다 ",
        author : "창세기",
    },
    {
        quote : " 사람은 다 죽는다 ",
        author : "성경말씀",
    },
    {
        quote : "신은 죽었다",
        author : "니체",
    },
    {
        quote : "니체는 죽었다 ",
        author : "-신-",
    },
    {
        quote : " 사람이 답이다. ",
        author : "-아무게-",
    },
    {
        quote : "감사합니다의 다른말 뭐이런걸 다 ",
        author : "-코미디-",
    },
    {
        quote : " 동트기전 새벽이 가장 어둡다 ",
        author : "-누구지?-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;