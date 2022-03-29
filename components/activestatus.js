



const ActiveStatus = ({status}) => {


  // const changeStatus = () => {
  //   if (status === "inactive") {
  //     return <h1 className={resourcehiglight.inactive}> {status} </h1>
  //   }
  //   if (status === "active") {
  //     return <h1  className={resourcehiglight.active} > {status} </h1>
  //   }
  //   if (status === "complete") {
  //     return <h1 className={resourcehiglight.complete} > {status} </h1>
  //   }
  // }

return (
  <div>
 
    <span  className={`schedule-${status}`}>{status}</span>
     
  </div>
)



}

export default ActiveStatus