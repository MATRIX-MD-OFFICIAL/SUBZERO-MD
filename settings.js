import 'dotenv/config';

const settings = {
/* ================= DATABASE ================= */

// Set ONE database URL here — the bot auto-detects the type from the prefix:
//   mongodb:// or mongodb+srv://  → MongoDB
//   postgres:// or postgresql://  → PostgreSQL
//   mysql:// or mysql2://         → MySQL
// Leave empty to use local JSON storage (no DB required).
DATABASE_URL: process.env.DATABASE_URL || '',
    
/* ================= BOT IDENTITY ================= */

botName: process.env.BOT_NAME || 'MATRIX-MD',
botOwner: process.env.BOT_OWNER || 'MATRIX-MD-OFFICIAL',
ownerNumber: process.env.OWNER_NUMBER || '2348115002660',
author: process.env.AUTHOR || 'MATRIX-MD-OFFICIAL',
packname: process.env.PACKNAME || 'MATRIX-MD',
description: process.env.DESCRIPTION || 'Multi-device WhatsApp bot Made by MATRIX-MD-OFFICIAL',

/* ================= SESSION ================= */

sessionId: process.env.SESSION_ID || '',
pairingNumber: process.env.PAIRING_NUMBER || '',
CDN: 'https://media.mrfrankofc.gleeze.com'

};

// Sync DATABASE_URL back to process.env so all modules pick it up
// (works whether the value was in .env or hardcoded above)
if (settings.DATABASE_URL && !process.env.DATABASE_URL) {
    process.env.DATABASE_URL = settings.DATABASE_URL;
}

export default settings;
