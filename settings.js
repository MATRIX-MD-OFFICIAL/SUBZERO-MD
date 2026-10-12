import 'dotenv/config';

const settings = {
  /* ============== DATABASE ============== */
  // Set ONE database URL here - the bot auto-detects type
  // mongodb:// or mongodb+srv://  -> MongoDB
  // postgres:// or postgresql:// -> PostgreSQL
  // mysql:// or mysql2://        -> MySQL
  // Leave empty to use local JSON storage
  DATABASE_URL: process.env.DATABASE_URL || '',

  /* ============== BOT IDENTITY ============== */
  botName: process.env.BOT_NAME || 'MATRIX-MD',
  botOwner: process.env.BOT_OWNER || 'MATRIX-MD-OFFICIAL',
  ownerNumber: process.env.OWNER_NUMBER || '2348115002660',
  ownerName: process.env.OWNER_NAME || 'MATRIX-MD-OFFICIAL',
  author: process.env.AUTHOR || 'MATRIX-MD-OFFICIAL',
  packname: process.env.PACKNAME || 'MATRIX-MD',
  description: process.env.DESCRIPTION || 'MATRIX-MD - High Performance WhatsApp Bot',

  /* ============== BOT SETTINGS ============== */
  prefix: process.env.PREFIXES || process.env.PREFIX || '.',
  mode: process.env.MODE || 'public',
  timezone: process.env.TIMEZONE || 'Africa/Lagos',
  sessionName: process.env.SESSION_ID || '',

  /* ============== FEATURES ============== */
  welcome: process.env.WELCOME || 'false',
  antilink: process.env.ANTI_LINK || 'false',
  antibadword: process.env.ANTI_BAD_WORD || 'false',
  autoread: process.env.AUTO_READ || 'false',
  autostatusview: process.env.AUTO_STATUS_VIEW || 'false',
  autolike: process.env.AUTO_LIKE || 'false',
  autoreact: process.env.AUTO_REACT || 'false',

  /* ============== API KEYS ============== */
  removeBgKey: process.env.REMOVE_BG_KEY || '',
};

export default settings;
