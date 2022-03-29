const ActiveStatus = ({ status }) => {
  return (
    <div>
      <span className={`schedule-${status}`}>{status}</span>
    </div>
  );
};

export default ActiveStatus;
