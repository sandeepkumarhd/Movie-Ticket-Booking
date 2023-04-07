import style from "./BookTicketOne.module.css";
import { reducerAction } from "../../../store/ticketStore";
import { useDispatch} from "react-redux";
const BookTicketOne = () => {
  const dispetch = useDispatch();

  const ticketHandler = (event) => {
    event.preventDefault();
    if (event.target.disabled === false) {
      event.target.className = style.disabled;
      event.target.disabled = true;
      
    }
    let seatNumber = +event.target.innerText;
    dispetch(reducerAction.sectionA(seatNumber));
    dispetch(reducerAction.increment());
    dispetch(reducerAction.increseby(500));
  };

  return (
    <div className={style.firstSection}>
      <div>
        <h1>Section A Rs.500</h1>
      </div>

      <section>
        {Array.from({ length: 25 }, (_, number) => (
          <button onClick={ticketHandler} key={number}>
            {number + 1}
          </button>
        ))}
      </section>
    </div>
  );
};
export default BookTicketOne;
