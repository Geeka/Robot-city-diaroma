// ============================================
// GREETER SYSTEM CONFIGURATION
// Shared by: Greeter Phone, Index, Station
// ============================================
// NOTE: Uses "var" (not "const") so the per-page fallback blocks
// (if typeof X === 'undefined') never trigger a "already declared"
// error when this file loads successfully. var + var is safe.

// Google Apps Script Deployment URL
var VISITOR_API = 'https://script.google.com/macros/s/AKfycbwLHMAkVKMJX4UYJcTzS0oX1Z2plHMYtv9WA-drsIKhx0WHO6J2bt6N_OI9lDWXPMlJ/exec';

// ============================================
// VOICE & SPEECH SETTINGS  (single source of truth)
// The Station AND the Greeter both read these, so they sound identical.
// To change the voice everywhere, edit this block only.
// ============================================
var VOICE_SETTINGS = {
  style: 'machine',        // machine | deep | friendly | squeaky  (pitch/rate come from VOICE_STYLES below)
  voiceName: '',           // '' = auto (most robotic available). Set to an EXACT installed voice
                           //      name (e.g. 'Microsoft Zira - English (United States)') to force it.
  female: true,            // when auto-picking: prefer a female voice
  chirp: true,             // robot chirp sound before greeting
  machineWordByWord: true  // For index/story: speak word. by. word. (vs phrases)
};

// Pitch/rate for each style — shared by Station and Greeter so both match exactly.
var VOICE_STYLES = {
  machine:  { pitch: 0.3, rate: 0.8,  wordByWord: true  },
  deep:     { pitch: 0.1, rate: 0.75, wordByWord: false },
  friendly: { pitch: 1.1, rate: 0.95, wordByWord: false },
  squeaky:  { pitch: 1.9, rate: 1.1,  wordByWord: false }
};

// ============================================
// GREETING MESSAGE
// Use {name} placeholder for visitor name
// ============================================
var DEFAULT_GREETING = 'Welcome {name}!';

// ============================================
// TIMING SETTINGS (milliseconds)
// ============================================
var POLL_MS = 4000;              // Check for new visitors every 4 seconds
var REPLY_TIMEOUT = 15000;       // Wait up to 15 seconds for Google Apps Script to reply
var SETTINGS_REFRESH_MS = 60000; // Refresh settings from spreadsheet every 60 seconds

// ============================================
// VOICE RECOGNITION PATTERNS
// ============================================
var ROBOTIC_VOICE_NAMES = /zarvox|trinoids|robot|espeak/i;
var FEMALE_VOICE_NAMES = /female|zira|heera|veena|samantha|karen|moira|tessa|fiona|victoria|allison|ava|susan|zoe|nicky|serena|kate|google us english/i;
