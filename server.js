const express = require('express');
const app = express();
const port = 3000;

app.get('/check', (req, res) => {
    // Get the real IP address from X-Forwarded-For header or use req.ip
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const timestamp = new Date().toISOString();

    // Log the tracking details
    console.log(`${timestamp} - IP: ${ip}`);

    // Send a 1x1 transparent PNG as a response
    const pixel = Buffer.from(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgcB4kfECXcAAAAASUVORK5CYII=',
        'base64'
    );

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': pixel.length,
    });

    res.end(pixel);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});