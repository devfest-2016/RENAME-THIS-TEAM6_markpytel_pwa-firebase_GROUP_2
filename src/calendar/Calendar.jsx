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
                  'title': 'Sleep',
                  'allDay': false,
                  'startDate': new Date(2016, 10, 20, 1),
                  'endDate': new Date(2016, 10, 20, 7)
                  }]
    }
  },

  componentWillReceiveProps(nextProps) {
    // let lessons = nextProps.data.userSchedule.lessons
    // let events = [{
    //               'title': 'Sleep',
    //               'allDay': false,
    //               'startDate': new Date(2016, 10, 20, 1),
    //               'endDate': new Date(2016, 10, 20, 7)
    //               }]
    // console.log(nextProps.data)
    // for (let lessonName in lessons) {
    //   let startDigit = lessons[lessonName].lessonTime.split('')[0]
    //   let lesson = {
    //     'allDay': false,
    //     'title': lessons[lessonName].studentName,
    //     'startDate': new Date(2016, 10, 21, startDigit),
    //     'endDate': new Date(2016, 10, 21, startDigit+1),
    //   }
    //   // console.log(lessons[lessonName])
    //   events = events.concat(lesson)
    //   this.setState({myEvents: this.state.myEvents.concat(events)})
    // }
    console.log(this.state.myEvents)
    // CalendarService.getCalendar(({token: nextProps.token}), (data) => {
    //   console.log(data)
    // })
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
