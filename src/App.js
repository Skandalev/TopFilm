import React, { useState } from "react";
import "./App.css";
import IFrame from "./components/IFrame";
import MovieRow from "./components/MovieRow";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

  function delete1(i){
    let temp = [...moviesArray]
    temp.splice(i,1)
    setMoviesArray(temp)
    


  }


  const addNewMovie = () => {
    const newMoviearray = [...moviesArray];
    newMoviearray.push({
      movieTitle: titleInput,
      img: imageInput,
      trailer: iframee
    });

    setMoviesArray(newMoviearray);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [isOpenImage,setIsOpenImage] = useState(false);
  const [iframee, setIFrame] = useState("");
  const [moviesArray, setMoviesArray] = useState([
    {
      movieTitle: "Prestige",
      img: "https://cdn.myportfolio.com/74942209-6e3a-43f5-ba0d-513051976e41/4f558d00-817e-4178-a9d1-f123b7c20151_rw_1200.jpg?h=2203f28c45c7ac9e9e1d6c71f5de2266",
      trailer: "ELq7V8vkekI",
    },
    {
      movieTitle: "Inception",
      img: "https://m.media-amazon.com/images/I/912AErFSBHL._AC_SL1500_.jpg",
      trailer: "YoHD9XEInc0",
    },
    {
      movieTitle: "Passanger",
      img: "https://i0.wp.com/thegeekiary.com/wp-content/uploads/2016/12/Passengerposter.jpg?ssl=1",
      trailer: "7BWWWQzTpNU",
    },
  ]);

  return (
    <div className="App">
      <h1>My favorite movies</h1>
      <p>Click on the picture to see the trailer</p>
      <p>on the bottom of the page</p>
      <Button variant="contained" onClick={() => setIsOpen(!isOpen)}> add a new movie</Button>
      {isOpen ? (
        <div>
          <label for="Image">Image:</label>
          <input
            id="Image"
            type="text"
            onChange={(e) => setImageInput(e.target.value)}
          ></input>
          <label for="title">title:</label>
          <input
            id="title"
            type="text"
            onChange={(e) => setTitleInput(e.target.value)}
          ></input>
          <label for="rating">rating:</label>
          <input id="rating" type="text"></input>
          <label for="trailer">trailer:</label>
          <input id="trailer" type="text" placeholder="youtube url"
          onChange={(e) => setIFrame(e.target.value)}></input>
          <button onClick={() => addNewMovie()}>save</button>
        </div>
      ) : (
        <div></div>
      )}

      <table>
     
        {moviesArray.map((movie,i) => {
          return (
          <div>
            <MovieRow movieTitle={movie.movieTitle} src={movie.img} trailer={movie.trailer} setIsOpenImage={setIsOpenImage} isOpenImage={isOpenImage} setIFrame={setIFrame}></MovieRow>
            <Button variant="outlined" color="error" type="button" onClick={()=>delete1(i)}>X</Button>
            </div>
          );
        })}
      </table>


      {/* <IFrame  iframe={iframee} isOpenImage={isOpenImage} moviesArray={moviesArray}></IFrame> */}
      <IFrame  iframe={iframee} isOpenImage={isOpenImage} setIsOpenImage={setIsOpenImage}></IFrame>
     
    </div>
  );
}
export default App;
