import img from "./../../../assets/images/work-in-progress.png";
import stl from "./../MainContent.module.css";

const WorkInProgress = () => {
  return (
    <div className={stl.wip}>
      <img src={img} alt="" />
    </div>
  );
};

export default WorkInProgress;
