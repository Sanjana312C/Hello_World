const express = require('express');
const app = express()

app.get('/howareyou', (req, res) => res.send('I am fine, Thank you , How are you doing?'));

app.listen(3000, () => {
    console.log('My API is running on port 3000!');
})
