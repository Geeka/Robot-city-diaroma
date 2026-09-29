// ============================================
// GREETER SYSTEM CONFIGURATION
// Shared by: Greeter Phone, Index, Station
// ============================================

// Google Apps Script Deployment URL
const VISITOR_API = 'https://script.google.com/macros/s/AKfycbwLHMAkVKMJX4UYJcTzS0oX1Z2plHMYtv9WA-drsIKhx0WHO6J2bt6N_OI9lDWXPMlJ/exec';

// ============================================
// VOICE & SPEECH SETTINGS
// ============================================
const VOICE_SETTINGS = {
  style: 'machine',        // 'machine' (word by word), 'energetic' (phrases), 'natural' (smooth)
  female: true,            // true = prefer female voices, false = default voice
  pitch: 1.15,             // 0.1 to 2.0
  rate: 1.15,              // 0.5 to 2.0
  chirp: true              // true = robot chirp sound before greeting
};

// ============================================
// GREETING MESSAGE
// Use {name} placeholder for visitor name
// ============================================
const DEFAULT_GREETING = 'Welcome {name}!';

// ============================================
// TIMING SETTINGS (milliseconds)
// ============================================
const POLL_MS = 4000;              // Check for new visitors every 4 seconds
const REPLY_TIMEOUT = 15000;       // Wait up to 15 seconds for Google Apps Script to reply
const SETTINGS_REFRESH_MS = 60000; // Refresh settings from spreadsheet every 60 seconds

// ============================================
// VOICE RECOGNITION PATTERNS
// ============================================
const ROBOTIC_VOICE_NAMES = /zarvox|trinoids|robot|espeak/i;
const FEMALE_VOICE_NAMES = /female|zira|heera|veena|samantha|karen|moira|tessa|fiona|victoria|allison|ava|susan|zoe|nicky|serena|kate|google us english/i;
