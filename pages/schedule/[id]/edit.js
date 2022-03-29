

import Layout from "../../../components/layout";
import ScheduleForm from "../../../components/scheduleForm";
import axios from "axios"


const scheduleEditer = ({schedule}) => {

  const updateSchedule = (formData) => {
    // alert(JSON.stringify(formData))
    axios.patch("/api/schedule", formData)
    .then( () => alert("Schedule has been updated")
    )
    .catch(err => alert(err?.response?.data))
  }

  return(
    <Layout>
      <ScheduleForm  
      preData={schedule}
      onFormSubmit={updateSchedule} />
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

export default scheduleEditer
