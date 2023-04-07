import { useSelector,useDispatch } from "react-redux";
import style from "./ShowTicketPrice.module.css";
import { useHistory } from "react-router-dom";
import { reducerAction } from "../../store/ticketStore";
const ShowTicketPrice = () => {
  const dispatch = useDispatch()
  const ticket = useSelector((store) => store.priceOne);
  const ticketPirce = useSelector((store) => store.priceIncrease);
  const movieName = useSelector((store) => store.movieName);
  const sectionA = useSelector((store) => store.sectionA);
  const sectionB = useSelector((store) => store.sectionB);
  const sectionC = useSelector((store) => store.sectionC);
  const minutes = useSelector((store) => store.minutes);
  const seconds = useSelector((store) => store.seconds);
  const history = useHistory();
  const conformHandler = () => {
    history.replace("/");
    alert("Booking Succesfull...!!");
  };
  const sectionASeats = sectionA.map((seats, index) => {
    return <p key={index}>{seats}</p>;
  });
  const sectionBseats = sectionB.map((seats, index) => {
    return <p key={index}>{seats}</p>;
  });
  const sectionCseats = sectionC.map((seats, index) => {
    return <p key={index}>{seats}</p>;
  });
  const timerhandler = () => {
   dispatch(reducerAction.timerHandler(1))
  };
  return (
    <div className={style.show} onClick = {timerhandler}>
      <div>
        <div>
          <p>Timer</p>
          <p>Minutes : {minutes} Seconds : {seconds}</p>
        </div>
        <h2>Section A Seats</h2>
        <div>
          <p> Seat Number : {sectionASeats}</p>
        </div>

        <h2>Section B Seats </h2>
        <div>
          <p> Seat Number : {sectionBseats}</p>
        </div>

        <h2>Section C Seats</h2>
        <p> Seat Number : {sectionCseats}</p>
        <h3>No Of Ticket</h3>
        {ticket}
      </div>
      <div className={style.movie}>
        <h3>
          No Of Movie : <span>{movieName}</span>
        </h3>
      </div>
      <div>
        <h3>Total Amount</h3>
        {ticketPirce}
      </div>
      <button onClick={conformHandler}>Conform ....!</button>
    </div>
  );
};

export default ShowTicketPrice;
