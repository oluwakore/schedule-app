
import axios from "axios";

export default async function activeSchedule(req, res) {
const axiosRes = await axios.get(`${process.env.API_URL}/activeschedule`)
const schedule = axiosRes.data

return res.send(schedule)
}
