import MOVIE_DATA from "../store/LocalMovie";
import { useDispatch } from "react-redux";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { reducerAction } from "../store/ticketStore";
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookMoviehandler = (MovieName) => {
    dispatch(reducerAction.addMovie(MovieName))
    history.push("/allmovieseat");
  };
  const movieList = MOVIE_DATA.map((ele,index) => {
    console.log(ele)
    return (
      <div className="movies" key={index}>
       
        <div>
        <img src={ele.Poster} alt = "post"/>
          <div>
            <p>
              <span>Released-Date :</span> {ele["Released"]}
            </p>
            <p>
              <span>Year : </span> {ele["Year"]}
            </p>
            <p>
              <span>Ratting : </span> {ele["imdbRating"]+"/10"}
            </p>
          </div>
          <button onClick={ () => bookMoviehandler(ele["Title"])}>Book Ticket</button>
        </div>
      </div>
    );
  });

  return <div className="movie">{movieList}</div>;
};

export default Home;
