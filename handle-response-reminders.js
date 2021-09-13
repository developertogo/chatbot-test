/**
 * Response hook to pre-process response before calling unit testing scripts (botiumscripts)
 */
module.exports = ({ botMsg }) => {
  // return "HELP" when handling the help reminder
  // what is returned is what we match with in the convo text (botiumscript) file
  if (botMsg.messageText.includes('I am a reminder bot')) {
    botMsg.messageText = 'HELP'
    return botMsg
  }

  // return if not dealing with a list of reminders in the queue
  if (!botMsg.messageText.includes('<table')) {
    return botMsg
  }

  // return "id: <id>, text: <text of action>" when handling list of reminders in the queue
  // what is returned is what we match with in the convo text (botiumscript) file
  let actual = ''
  const regex = RegExp('<td>(.*?)</td>', 'gi')

  let arr
  let i = 0, j = 0
  while ((arr = regex.exec(botMsg.sourceData)) !== null) {
    arr[0] = arr[0].replace('<td>', '').replace('</td>', '')
    if (i != 0 && i % 3 === 0) {
      actual += '; '
    }
    if (i === 0+j) {
      actual += `id: ${arr[0]}, text: `
    } else if (i === 2+j) {
      actual += arr[0]
      j = 3
    }
    i++
  }
  botMsg.messageText = actual

  return botMsg
}
