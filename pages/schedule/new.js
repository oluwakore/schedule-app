
import Layout from "../../components/layout"

import axios from "axios"
import ScheduleForm from "../../components/scheduleForm"
import { useRouter } from 'next/router'



const scheduleCreate = () => {

const router = useRouter()

const createSchedule = (formData) => {
  axios.post("/api/schedule", formData)
  .then(() => router.push("/") )
  .catch(err => alert(err?.response?.data))
}

 
  return (
    <div>
      <Layout>
      <ScheduleForm onFormSubmit={createSchedule} />
      </Layout>      
    </div>
  )
} 

export default scheduleCreate