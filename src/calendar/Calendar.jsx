import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import CalendarService from '../services/CalendarService';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
  getInitialState() {
    return this.state = {
     myEvents: [{
                  'title': 'All Day Event',
                  'allDay': true,
                  'start': new Date(2016, 11, 19),
                  'end': new Date(2016, 11, 19)
                },
              ],
    }
  },

  setSlots(info) {
    this.setState({myEvents: 
      this.state.myEvents.concat([{
        'title': 'Available',
        'start': info.start,
        'end': info.end
      }])
    })
  },

  render() {
    return (
      <BigCalendar
        events={this.state.myEvents}
        startAccessor='startDate'
        endAccessor='endDate'
        timeslots={1}
        defaultView='week'
        selectable={true}
        onSelectSlot={(slotInfo) => {
          this.setSlots(slotInfo)
        }}
      />
    )
  }
})

export default Calendar;
