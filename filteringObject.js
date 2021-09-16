var obj = {
    "first-introduction": {
        "name": "Introduction ",
        "url": "https://www.benzinga.com/money/how-does-the-stock-market-work/",
        "video_url": "",
        "pop_star": false
    },
    "first-what-moves-the-market": {
        "name": "What Moves the Market?",
        "url": "https://www.benzinga.com/money/what-moves-the-stock-market/",
        "video_url": "",
        "pop_star": false
    },
    "first-passive-income": {
        "name": "Passive Income",
        "url": "https://www.thebalance.com/part-one-the-stock-market-doesn-t-care-about-you-3141062",
        "video_url": "",
        "pop_star": false
    }
}


Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );


var filtered = Object.filter(obj, obj => obj.url == ''); 

console.log(filtered);

