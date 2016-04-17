/*!
 * Teo.JS streamer extension
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 3/30/16
 */

"use strict";

const mime = require("mime"),
    streamer = require("./lib/streamer");

module.exports = {
    extension(appContext, config = {}) {  // streamer extension should be as a separate argument not with app's config(!)
        let config = Object.assign({
            // download file instead of streaming
            forceDownload: false,
            // max age for Cache-Control
            maxAge: 3600,
            cors: false,
            // (limit) server bandwidth (bytes/second). See https://www.npmjs.com/package/throttle
            throttle: false
        }, config);

        appContext.middleware(function* (next) {
            if (this.req.headers.range) {
                let contentType = mime.lookup(this.extension || this.req.headers.accept || "html");
                streamer(this.req, this.res, this.config, path.normalize(path.join(this.config.get("appDir"), this.pathname)), contentType);
            }
            else {
                yield next;
            }
        });
    }
};