const puppeteer = require('puppeteer')

async function run(){
    const browser = await puppeteer.launch({headless: "new"})
    const page = await browser.newPage();
    await page.goto('https://www.azlyrics.com/lyrics/taylorswift/style.html')

    const text = await page.evaluate(() => document.body.innerText)
    let AlmostLyrics = text.slice(text.indexOf('on Amazon Music Unlimited (ad)'), text.indexOf(' Submit Corrections'))
    let lyrics = AlmostLyrics.slice(AlmostLyrics.indexOf('\n'))
    lyrics = lyrics.slice(lyrics.indexOf('\n\n') + 3)
    while(lyrics[lyrics.length-1] == '\n'){
        lyrics = lyrics.slice(0, lyrics.length-1)
    }
    
    const lyricsArray = lyrics.split(("\n"))
    lyricsArray.push('Created by RL')
    console.log(lyricsArray)
    


    await browser.close()
}

run()