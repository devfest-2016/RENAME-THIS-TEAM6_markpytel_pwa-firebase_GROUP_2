import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux';

import CalendarService from '../services/CalendarService';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
  getInitialState() {
    return this.state = {
      myEvents: [{
                  'title': 'All Day Event',
                  'allDay': true,
                  'startDate': new Date(2016, 11, 19),
                  'endDate': new Date(2016, 11, 19)
                },
              ],
    }
  },

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    CalendarService.getCalendar(({token: nextProps.token}), (data) => {
      console.log(data)
    })
  },

  setSlots(info) {
    this.setState({myEvents: 
      this.state.myEvents.concat([{
        'title': 'Available',
        'startDate': info.start,
        'endDate': info.end
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
