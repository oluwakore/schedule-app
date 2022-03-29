

import Link from "next/link"
import moment from "moment"
import resourcehiglight from '../styles/resourcehiglight.module.scss'
import ActiveStatus from "./activestatus"


const ResourceHiglight = ({schedules}) => {
  return (
    <div className={resourcehiglight.container}>
      <h1>Recent Schedules</h1>
      <div className={resourcehiglight.line} > i </div>
      {
        schedules.map(schedule =>
          <div key={schedule.id} className={resourcehiglight.cover} >
            <div className={resourcehiglight.topdiv}>
               <h3> {moment(schedule.createdAt).format("LLL")} </h3>  <ActiveStatus status={schedule.status} />
                </div>
           
             <h3 className={resourcehiglight.maintitle}> {schedule.title} </h3>
             <h1> {schedule.description} </h1>
            <Link href={`/schedule/${schedule.id}`}>
             
              <a className={resourcehiglight.details}>
              Details
            </a>
              
            </Link>
          </div> 
          
          )
      }
    </div> 
  )
}

export default ResourceHiglight