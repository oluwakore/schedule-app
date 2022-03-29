import Link from "next/link";
import moment from "moment";
import resourcehiglight from "../styles/resourcehiglight.module.scss";
import resourcelist from "../styles/resourcelist.module.scss";
import ActiveStatus from "./activestatus";

const ResourceList = ({ schedules }) => {
  return (
    <>
      <div className={resourcelist.topcontainer}>
        <h1> All Schedules</h1>
        <span>i</span>
      </div>
      <div className={resourcelist.container}>
        {schedules.map((schedule) => (
          <div key={schedule.id} className={resourcelist.subcontainer}>
            <div className={resourcelist.headtitle}>
              <h3> {moment(schedule.createdAt).format("LLL")} </h3>
              <ActiveStatus status={schedule.status} />
            </div>

            <h3 className={resourcelist.maintitle}> {schedule.title} </h3>
            <h1> {schedule.description} </h1>
            <Link href={`/schedule/${schedule.id}`}>
              <a className={resourcelist.details}>Details</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResourceList;
