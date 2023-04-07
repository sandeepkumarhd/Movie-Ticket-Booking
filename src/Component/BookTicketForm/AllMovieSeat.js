import BookTicketOne from "./SeatSections/BookTicketOne";
import BookTicketThree from "./SeatSections/BookTicketThree";
import BookTicketTwo from "./SeatSections/BookTicketTwo";
import Home from "../../Page/Home";
import classes from "./AllMovieSeat.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const AllMovieSeat = () => {
  const numberOfSeat = useSelector((store) => store.priceOne);
  const totalPrice = useSelector((store) => store.priceIncrease);
  const history = useHistory();
  let IsPrice = false;
  if (numberOfSeat > 0 && totalPrice > 0) {
    IsPrice = true;
  }
  const bookHandler = () => {
    history.replace("/showtotal");
  };
  return (
    <div className={classes.section}>
      <div>
        <BookTicketOne />
        <BookTicketTwo />
        <BookTicketThree />
      </div>

      {IsPrice && (
        <div>
          <div className={classes.seats}>
            <h3>Number Of Seat : {numberOfSeat}</h3>
            <h3>Total Price : {totalPrice}</h3>
          </div>
          <button className={classes.booking} onClick={bookHandler}>
            Book Now..!
          </button>
        </div>
      )}
    </div>
  );
};
export default AllMovieSeat;
