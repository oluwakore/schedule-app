
import { useState } from "react"
import schedule from "../styles/schedule.module.scss"

const initialData = {
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToEnd: 30
}

const scheduleForm = ({ onFormSubmit,preData }) => {
  const [form, setForm] = useState( preData || initialData)

  const handleChange = (e) => {
    setForm({ 
      ...form, [e.target.name]: e.target.value })
   }
   
   const formReset = () => {
     setForm(initialData)
   }


   const submitForm = () => {
     onFormSubmit(form)
   }

  return (
    <div className={schedule.container} >
          <h3 className={schedule.head_title}>Add a New Schedule</h3>
        <form>
          <div>
        <div className={schedule.form_spacer}>
          <h2 className={schedule.input_title}>Title</h2>
          <input name="title" onChange={handleChange} value={form.title} type="text" placeholder="Add a title for your schedule" />
        </div>
        <div className={schedule.form_spacer}>
          <h2 className={schedule.input_title}>Description</h2>
          <input  name="description" onChange={handleChange} value={form.description} type="text" placeholder="Give a brief description of your schedule" />
        </div>
        <div className={schedule.form_spacer}>
          <h2 className={schedule.input_title}>Link</h2>
          <input  name="link" onChange={handleChange} value={form.link} type="text" placeholder="https://link.io" />
        </div>
        <div className={schedule.form_spacer}>
        <h2 className={schedule.input_title}>Priority</h2>
                <div className="control">
              <div className="select">
            <select  name="priority" onChange={handleChange} value={form.priority}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
         
        </div>
        <div className={schedule.form_spacer}>
          <h2 className={schedule.input_title}>Time to complete</h2>
          <input  name="timeToEnd" onChange={handleChange} value={form.timeToEnd} type="number" placeholder="set the time required (in minutes)" />
          <h1 style={{ fontSize: "0.7em" }}>Time is in minutes</h1>
        </div>
          </div>
          <div className={schedule.button_container}>
        <div> <button type="button" className={schedule.button_one} onClick={submitForm} >Submit</button> </div>
        <div> <button type="button" onClick={formReset}  className={schedule.button_two}>Reset</button> </div> 
          </div>
        </form>
      </div>
  )
}

export default scheduleForm