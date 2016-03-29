// Need to set up jsdom versions of document and window objects that would normally be provided
// by the web browser. (Because we're testing just with jsdom, not running tests in an actual web
// browser with a library like Karma.
// jsdom is a pure JS DOM implementation that runs in Node.

import jsdom from 'jsdom';

// Create jsdom versions of document and window objects
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Then put them on the global object so React discovers them.
global.document = doc;
global.window = win;

// Take all properties that jsdom window object contains, e.g. navigator, and hoist them on to the Node.js global object.
// So properties provided by window can be used wihtout the window. prefix. Some code inside React needs this.
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
          global[key] = window[key];
            }
});
