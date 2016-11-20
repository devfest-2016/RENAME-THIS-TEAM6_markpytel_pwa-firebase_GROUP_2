class CalendarService {
  getCalendar(data, callback) {
    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + data.token,
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {
      callback(response)
    })
  }
}

module.exports = new CalendarService();
