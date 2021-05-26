// Connect to Twitter via API
const Twitter = require('twitter');
const Sheet = require('./sheet');

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
    console.log(quotes[0].quote);

    // Send the tweet
    // client.post('statuses/update', { status: 'I Love Twitter' }, function (error, tweet, response) {
    
    //     if (error) throw error;
    
    //     console.log(tweet);  // Tweet body.
    
    //     console.log(response);  // Raw response object.
    
    // });
    
    // Remove the quote from spreadsheet

})()

