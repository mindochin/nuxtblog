export default (value, type) => {
  const date = new Date(value)
  let todate = ''
  switch (type) {
    case 'medium':
      todate = date.toLocaleString((window.navigator.language || navigator.userLanguage), { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
      break

    case 'shortDate':
      todate = date.toLocaleDateString()
      break

    case 'shortTime':
      todate = date.toLocaleTimeString()
      break

    case 'longDate':
      todate = date.toLocaleDateString((window.navigator.language || navigator.userLanguage), { year: 'numeric', month: 'long', day: 'numeric' })
      break

    default:
      todate = date.toLocaleString()
  }
  return todate
}
// 'short': equivalent to 'M/d/yy, h:mm a' (6/15/15, 9:03 AM).
// 'medium': equivalent to 'MMM d, y, h:mm:ss a' (Jun 15, 2015, 9:03:01 AM).
// 'long': equivalent to 'MMMM d, y, h:mm:ss a z' (June 15, 2015 at 9:03:01 AM GMT+1).
// 'full': equivalent to 'EEEE, MMMM d, y, h:mm:ss a zzzz' (Monday, June 15, 2015 at 9:03:01 AM GMT+01:00).
// 'shortDate': equivalent to 'M/d/yy' (6/15/15).
// 'mediumDate': equivalent to 'MMM d, y' (Jun 15, 2015).
// 'longDate': equivalent to 'MMMM d, y' (June 15, 2015).
// 'fullDate': equivalent to 'EEEE, MMMM d, y' (Monday, June 15, 2015).
// 'shortTime': equivalent to 'h:mm a' (9:03 AM).
// 'mediumTime': equivalent to 'h:mm:ss a' (9:03:01 AM).
// 'longTime': equivalent to 'h:mm:ss a z' (9:03:01 AM GMT+1).
// 'fullTime': equivalent to 'h:mm:ss a zzzz' (9:03:01 AM GMT+01:00).
