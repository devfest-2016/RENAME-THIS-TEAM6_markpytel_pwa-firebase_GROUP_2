import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import * as firebase from 'firebase'
import { connect } from 'react-redux';

import CalendarService from '../services/CalendarService';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
  getInitialState() {
    return this.state = {
      myEvents: [{
                  'title': 'Sleep',
                  'allDay': false,
                  'startDate': new Date(2016, 10, 20, 1),
                  'endDate': new Date(2016, 10, 20, 7)
                  }]
    }
  },

  componentWillReceiveProps(nextProps) {
    let lessons = nextProps.data.userSchedule.lessons
    let events = []
    let date = 20
    for (let lessonName in lessons) {
      let startDigit = parseInt(lessons[lessonName].lessonTime.split('')[0])
      let endDigit = parseInt(startDigit) + 1
      let lesson = {
        'allDay': false,
        'title': lessons[lessonName].studentName,
        'startDate': new Date(2016, 10, date, startDigit + 12, 0, 0),
        'endDate': new Date(2016, 10, date, endDigit + 12, 0, 0),
      }
      events = events.concat(lesson)
      date += 1
      this.setState({myEvents: this.state.myEvents.concat(events)})
    }
    // CalendarService.getCalendar(({token: nextProps.token}), (data) => {
    //   console.log(data)
    // })
  },

  setSlots(info) {
    let database = firebase.database()
    let available = {
                      title: 'Available',
                      startDate: JSON.stringify(info.start),
                      endDate: JSON.stringify(info.end)
                    }
    this.setState({myEvents: 
      this.state.myEvents.concat(
        [{
          'title': 'Available',
          'startDate': info.start,
          'endDate': info.end
        }]
      )
    })
    database.ref('users/user5').push({
        schedule: available
      });
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
