import React from 'react'
import moment from 'moment'

export default class PunchCard extends React.Component {
  render () {
    let card = [], 
      week = [],
      currentDate = moment(),
      indexDate = moment().subtract(1, 'year').subtract(1, 'day'),
      weekDays = [ 'Mon', 'Wed', 'Fri'] 

    // add inactive punch days
    for (let index = 0; index < parseInt(indexDate.format('d')); index++ ) {
      week.push(<div className='punch-day inactive'></div>)      
    }

    while (indexDate.format('MM-DD-YYYY') !== currentDate.format('MM-DD-YYYY')) {
      let day = indexDate.format('d'),
        title = indexDate.format('DD MMM YYYY')

      week.push(<div title={ title } className='punch-day'></div>)

      if (day === '6') {
        card.push(<div className='punch-week'>{ week }</div>)
        week = []
      }

      indexDate.add(1, 'day')
    }
    
    // add last week
    card.push(<div className='punch-week'>{ week }</div>)

    return (
      <div className="punch-card">
        <div className="punch-display-days">
          {
            weekDays.map((weekDay) => (<div className="punch-display-day"> {weekDay} </div>))
          }
        </div>
        <div className="punch-card-weeks">
          { card }
        </div>    
      </div>
    )
  } 
}
