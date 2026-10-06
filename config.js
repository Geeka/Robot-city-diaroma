// Gen AI Robot City — shared settings for index.html, station.html, visitors.html and the greeter.

// Google Apps Script web app (visitor board)
const VISITOR_API = 'https://script.google.com/macros/s/AKfycbw0gF29C6zbmZKDmzY-u0nCFAsp7zfj_u9VLRh-DGJR5X80DvdTyTskiUr5M9etZp5o/exec';

// Robot voice: style can be 'machine', 'deep', 'friendly' or 'squeaky'
const VOICE_SETTINGS = { style: 'machine', voiceName: '', female: true, chirp: true, machineWordByWord: true };
const VOICE_STYLES = {
    machine:  { pitch: 0.3, rate: 0.8,  wordByWord: true  },
    deep:     { pitch: 0.1, rate: 0.75, wordByWord: false },
    friendly: { pitch: 1.1, rate: 0.95, wordByWord: false },
    squeaky:  { pitch: 1.9, rate: 1.1,  wordByWord: false }
};

const DEFAULT_GREETING = 'Welcome {name}!';
const POLL_MS = 4000;          // how often the greeter/station checks for new visitors
const REPLY_TIMEOUT = 15000;   // how long to wait for the visitor board to answer

const ROBOTIC_VOICE_NAMES = /zarvox|trinoids|robot|espeak/i;
const FEMALE_VOICE_NAMES = /female|zira|heera|veena|samantha|karen|moira|tessa|fiona|victoria|allison|ava|susan|zoe|nicky|serena|kate|google us english/i;
