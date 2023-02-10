import style from "./BookTicketThree.module.css";
import { reducerAction } from "../../../store/ticketStore";
import { useDispatch } from "react-redux";

const BookTicketThree = () => {
  const dispetch = useDispatch();
  const ticketHandlerThree = (event) => {
    event.preventDefault();
    if (event.target.disabled === false) {
      event.target.className = style.disabled;
      event.target.disabled = true;
    }
    dispetch(reducerAction.sectionC(+event.target.innerText));
    dispetch(reducerAction.increment());
    dispetch(reducerAction.increseby(150));
  };

  return (
    <div className={style.thirdSection}>
      <h1>Section C Rs.150</h1>
      <section>
        {Array.from({ length: 22 }, (_, number) => (
          <button onClick={ticketHandlerThree} key={number}>
            {number + 1}
          </button>
        ))}
      </section>
    </div>
  );
};

export default BookTicketThree;
