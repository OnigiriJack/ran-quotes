const got = require('got')
const fs = require('fs');
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const url = 'https://www4.nhk.or.jp/P424/32/';



let quotesAndAuthor = {};
quotesAndAuthor.data = [];
got(url).then(response => {
    const dom = new JSDOM(response.body)
    dom.window.document.querySelectorAll('p span').forEach(author => {
        if (author.textContent.includes("さん") && author.textContent.length > 25) {
            let tuple = {
                author: "",
                quote: ""
            }
            let quote = author.textContent.split("の言葉");
            tuple["author"] = quote[0];
            tuple["quote"] = quote[1];
            quotesAndAuthor.data.push(tuple)
        }
    });
    fs.writeFile('input.json', JSON.stringify(quotesAndAuthor, null, 2), (err) => {
        if (err) throw err;
        console.log('complete')
    })
}).catch(err => console.log(err))

