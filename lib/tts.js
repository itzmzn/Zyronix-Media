/* 
WhatsApp: https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I
Github: https://github.com/mznking
YouTube: https://youtube.com/@mznking
*/

const { join } = require('path');
const gtts = require('node-gtts');
const { readFileSync, unlinkSync } = require('fs');

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(__dirname, '..Assets/trash', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

module.exports = { tts }