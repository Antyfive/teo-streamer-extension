# teo-streamer-extension
[Teo.JS](https://github.com/Antyfive/teo.js) streamer extension. You can use this extension for streaming of videos, music files etc.

# Settings
Here is an object of default settings: 
```javascript
{
    // download file instead of streaming it
    forceDownload: false,
    // max age for Cache-Control header
    maxAge: 3600,
    // Allow CORS flag
    cors: false,
    // (limit) server bandwidth (bytes/second). See https://www.npmjs.com/package/throttle
    throttle: false
}
```
## How To Use It
* Install extension
* Add the following object to your Teo.JS app configuration file:
```javascript
extensions: [
    // e.g.
    {
        name: "streamer",                     // name in registry of extensions
        module: "teo-streamer-extension"      // npm module
        config: {                             // extension's configuration. Will be passed to the extension, as a second argument
           // download file instead of streaming it
            forceDownload: false,
            // max age for Cache-Control header
            maxAge: 3600,
            // Allow CORS flag
            cors: false,
            // (limit) server bandwidth (bytes/second). See https://www.npmjs.com/package/throttle
            throttle: false
        }
    }
]
```
