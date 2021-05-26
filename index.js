// Connect to Twitter via API
const express = require('express');
const Twitter = require('twitter');
const Sheet = require('./sheet');
const cron = require('node-cron');

const app = express();

(async () => {

    const client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    });

    // Pull next quote from spreadsheet
    const sheet = new Sheet();
    await sheet.load();

    const quotes = await sheet.getRows();
    const status = quotes[0].quote;

    // Send the tweet
    client.post('statuses/update', { status }, (error, tweet, response) => {
        if (error) throw error;
        console.log(tweet);  // Tweet body.
    });

    // Remove the quote from spreadsheet
    await quotes[0].delete();

    console.log('Tweeted', quotes[0].quote);

})();


let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

cron.schedule('* * * * * *', () => {
    testArr.pop();
    console.log('Popped!', testArr.length);
    if (testArr.length === 0) {
        // stop();
        console.log('Empty');
    }
});

app.listen(4000, () => {
    console.log(`Server running...`);
});

