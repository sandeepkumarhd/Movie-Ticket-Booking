import style from "./BookTicketTwo.module.css";
import { reducerAction } from "../../../store/ticketStore";
import { useDispatch, useSelector } from "react-redux";
const BookTicketTwo = () => {
  const dispetch = useDispatch();
  const ticketHandlerTwo = (event) => {
    event.preventDefault();
    if (event.target.disabled === false) {
      event.target.className = style.disabled;
      event.target.disabled = true;
    }
    dispetch(reducerAction.sectionB(+event.target.innerText));
    dispetch(reducerAction.increment());
    dispetch(reducerAction.increseby(250));
  };
  return (
    <div className={style.secondSection}>
      <h1>Section B Rs.250</h1>
      <section>
        {Array.from({ length: 23 }, (_, number) => (
          <button onClick={ticketHandlerTwo} key={number}>
            {number + 1}
          </button>
        ))}
      </section>
    </div>
  );
};
export default BookTicketTwo;
