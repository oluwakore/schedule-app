

import Layout from "../../../components/layout"
import Link from "next/link" 
import axios from "axios"
import moment from "moment"
import details from "../../../styles/details.module.scss"
import ActiveStatus from "../../../components/activestatus"



const scheduleDetail = ({schedule}) => {



  const activateSchedule = () => {
    axios.patch("/api/schedule", {...schedule, status: "active"})
    .then(() => location.reload() )
    .catch(() => alert("Schedule cannot activate"))
  }

  return(
    <Layout>
      <div key={schedule.id} className={details.container}>
        <div className={details.header} >
        <h3> {moment(schedule.createdAt).format("LLL")} </h3>  <ActiveStatus status={schedule.status} />
        </div>
        <h1> {schedule.title} </h1>
        <h2> {schedule.description} </h2>
        { schedule.status === "inactive" &&
        <div className={details.buttonplace}>
        <Link href={`/schedule/${schedule.id}/edit`}> 
        <a className="button is-warning">
          Update schedule
        </a>
        </Link>
        <button className="button is-success ml-1" 
        onClick={activateSchedule}
        > Run Schedule </button>
        </div>
        }
      </div>
    </Layout>

  ) 

  
}


export async function getServerSideProps({params}) {
    const response = await fetch(`${process.env.API_URL}/schedules/` + params.id)

    const dataDetail = await response.json()
 
  return{
    props: {
      schedule: dataDetail 
    }
  }
}

export default scheduleDetail