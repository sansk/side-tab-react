import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div key={uuidv4()} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
