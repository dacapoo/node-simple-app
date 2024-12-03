const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/track', (req, res) => {
    // Get the real IP address from X-Forwarded-For header or use req.ip
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const timestamp = new Date().toISOString();

    // Log the IP and timestamp
    fs.appendFileSync('clicks.log', `${timestamp} - ${ip}\n`);

    // Redirect to the destination URL
    res.redirect('https://your-landing-page.com');  // Replace with your desired URL
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});