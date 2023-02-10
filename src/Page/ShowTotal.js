import ShowTicketPrice from "../Component/ShowTicketPrice/ShowTicketPrice";
import style from "./ShowTotal.module.css";
const ShowTotal = () => {
  return (
    <div className={style.total}>
      <ShowTicketPrice />
    </div>
  );
};

export default ShowTotal;
