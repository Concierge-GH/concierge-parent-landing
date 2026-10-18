/**
 * ConciergeGh — Partner Program waitlist collector
 * ------------------------------------------------------------------
 * Receives form submissions from the website and appends each one as a
 * row in this Google Sheet. Free, unlimited, no third-party service.
 *
 * SETUP (one time, ~5 minutes):
 *   1. Create a Google Sheet:  https://sheets.new
 *   2. In that sheet:  Extensions ▸ Apps Script
 *   3. Delete any sample code, paste ALL of this file, and click Save.
 *   4. Click  Deploy ▸ New deployment.
 *        - Select type (gear icon) ▸ Web app
 *        - Execute as:            Me
 *        - Who has access:        Anyone
 *        - Deploy, then Authorize access (approve the permissions).
 *   5. Copy the "Web app" URL (it ends in /exec).
 *   6. Send me that URL (or paste it into index.html, replacing
 *      REPLACE_WITH_YOUR_SCRIPT_ID in the waitlist form's action).
 *
 * To test later without the website: Run ▸ testAppend (writes a sample row).
 */

function doPost(e) {
  try {
    var params = (e && e.parameter) ? e.parameter : {};

    // Simple spam honeypot — the website sends a hidden "_gotcha" field that
    // real people leave empty. If it's filled, silently ignore.
    if (params._gotcha) {
      return _json({ ok: true, skipped: 'honeypot' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Waitlist') || ss.insertSheet('Waitlist');

    // Write a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Phone (WhatsApp)', 'Email', 'Interest']);
    }

    sheet.appendRow([
      new Date(),
      params.name  || '',
      params.phone || '',
      params.email || '',
      params.interest || 'Partner Program waitlist'
    ]);

    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  }
}

// A friendly message if someone opens the URL directly in a browser.
function doGet() {
  return _json({ ok: true, message: 'ConciergeGh waitlist endpoint is live.' });
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: run this once from the editor to confirm rows are written.
function testAppend() {
  doPost({ parameter: { name: 'Test Person', phone: '+233200000000', email: 'test@example.com' } });
}
