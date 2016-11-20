import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import CalendarService from '../services/CalendarService';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
  render() {
    const myEvents = [
      {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2016, 11, 19),
        'end': new Date(2016, 11, 19)
      },
    ]
    return (
      <BigCalendar
        events={myEvents}
        startAccessor='startDate'
        endAccessor='endDate'
      />
    )
  }
})

export default Calendar;
