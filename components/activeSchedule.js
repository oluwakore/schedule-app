import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import activescheduleDes from "../styles/activeschedule.module.scss";

const ActiveSchedule = () => {
  const [schedule, setSchedule] = useState({});
  const [secs, setSecs] = useState();

  useEffect(() => {
    async function fetchSchedule() {
      const res = await axios.get("/api/activeschedule");
      const schedule = res.data;
      const timeToEnd = parseInt(schedule.timeToEnd, 10);
      const elapsedTime = moment().diff(
        moment(schedule.activationTime),
        "seconds"
      );

      const newTimeToEnd = timeToEnd * 60 - elapsedTime;

      if (newTimeToEnd >= 0) {
        schedule.timeToEnd = newTimeToEnd;
        setSecs(newTimeToEnd);
      }

      setSchedule(schedule);
    }

    fetchSchedule();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecs(secs - 1);
    }, 1000);

    if (secs < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [secs]);

  const completeSchedule = () => {
    axios
      .patch("/api/schedule", { ...schedule, status: "complete" })
      .then(() => location.reload())
      .catch(() => alert("Schedule cannot end"));
  };

  const hasSchedule = schedule && schedule.id;
  return (
    <div className={activescheduleDes.container}>
      <h1 className={activescheduleDes.title}>
        {" "}
        {hasSchedule
          ? schedule.title
          : "No active schedule to display yet!"}{" "}
      </h1>
      <div className={activescheduleDes.seconds}>
        {hasSchedule &&
          (secs > 0 ? (
            <h2 className={activescheduleDes.secview}> {secs} </h2>
          ) : (
            <h2>
              <button className="button is-success" onClick={completeSchedule}>
                {" "}
                Click and Done!{" "}
              </button>
            </h2>
          ))}
      </div>
      <div className={activescheduleDes.downbutton}>
        {hasSchedule ? (
          <Link href={`/schedule/${schedule.id}`}>
            <a>Go to schedule</a>
          </Link>
        ) : (
          <Link href={"/"}>
            <a>Go to schedules</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActiveSchedule;
