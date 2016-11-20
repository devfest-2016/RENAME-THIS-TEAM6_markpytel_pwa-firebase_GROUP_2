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
      myEvents: [],
      availableTimes: []
    }
  },

  componentDidMount() {
    let database = firebase.database()
    let ref = database.ref('users/user5/available');
    let availability
    ref.on("value", function(snapshot) {
      let arrayOfKeys = Object.keys(snapshot.val())
      let lastKey = arrayOfKeys[arrayOfKeys.length - 1]
      availability = snapshot.val()[lastKey].available;
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    setTimeout(() => {
      for (let index in availability) {
        let availabilityToBeAdded = {
            title: availability[index].title,
            startDate: new Date(JSON.parse(availability[index].startDate)),
            endDate: new Date(JSON.parse(availability[index].endDate)),
          }
        this.setState({
          myEvents: this.state.myEvents.concat([availabilityToBeAdded])
        })
      }
    }, 1500)
  },

  componentWillReceiveProps(nextProps) {
    let lessons = nextProps.data.userSchedule.lessons
    let events = []
    let date = 20;
    for (let lessonName in lessons) {
      let startDigit = parseInt(lessons[lessonName].lessonTime.split(':')[0])
      let endDigit = startDigit + 1
      let amOrPm = lessons[lessonName].lessonTime.split(':')[1].split('')[2] + lessons[lessonName].lessonTime.split(':')[1].split('')[3]
      let lesson = {
        'allDay': false,
        'title': lessons[lessonName].studentName,
        'startDate': new Date(2016, 10, date, startDigit, 0, 0),
        'endDate': new Date(2016, 10, date, endDigit, 0, 0),
      }
      events = events.concat(lesson)
      date += 1
      this.setState({myEvents: this.state.myEvents.concat(events)})
    }
  },

  setSlots(info) {
    let database = firebase.database()
    let available = {
                      title: 'Available',
                      startDate: JSON.stringify(info.start),
                      endDate: JSON.stringify(info.end)
                    }
    let times = this.state.availableTimes.concat([available])
    this.setState({myEvents:
      this.state.myEvents.concat(
        [{
          'title': 'Available',
          'startDate': info.start,
          'endDate': info.end
        }]
      ),
      availableTimes: this.state.availableTimes.concat([available])
    })
    database.ref('users/user5/available').push({
      available: times
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
        min={new Date(2016, 10, 20, 6, 0, 0)}
        onSelectSlot={(slotInfo) => {
          this.setSlots(slotInfo)
        }}
        onSelectEvent={(event) => {
          alert(
            'Event: ' + event.title + '\n\n'
            + 'From: ' + event.startDate.toLocaleString() + '\n'
            + 'To: ' + event.endDate.toLocaleString()
          )
        }}
      />
    )
  }
})

export default Calendar;
