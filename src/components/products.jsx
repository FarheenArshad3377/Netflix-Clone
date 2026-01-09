import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModelView from "./ModelView";
import { Link } from "react-router-dom";

// All movie lists in one file
const trendingMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    poster: "1.png",
    category: "Trending",
    age: "18+",
    duration: "2h 32m",
    rating: 9.0,
    type: "movie",
  },
  {
    id: 2,
    title: "Inception",
    poster: "2.png",
    category: "Trending",
    age: "16+",
    duration: "2h 28m",
    rating: 8.8,
    type: "movie",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "3.png",
    category: "Trending",
    age: "13+",
    duration: "2h 49m",
    rating: 8.6,
    type: "movie",
  },
  {
    id: 4,
    title: "Joker",
    poster: "4.png",
    category: "Trending",
    age: "18+",
    duration: "2h 2m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    poster: "5.png",
    category: "Trending",
    age: "13+",
    duration: "3h 1m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    poster: "6.png",
    category: "Trending",
    age: "13+",
    duration: "2h 28m",
    rating: 8.3,
    type: "movie",
  },
  {
    id: 7,
    title: "The Batman",
    poster: "7.png",
    category: "Trending",
    age: "16+",
    duration: "2h 56m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 8,
    title: "Doctor Strange",
    poster: "8.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.5,
    type: "movie",
  },
  {
    id: 9,
    title: "Black Panther",
    poster: "9.png",
    category: "Trending",
    age: "13+",
    duration: "2h 14m",
    rating: 7.3,
    type: "movie",
  },
  {
    id: 10,
    title: "Iron Man",
    poster: "10.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 11,
    title: "Thor: Ragnarok",
    poster: "11.png",
    category: "Trending",
    age: "13+",
    duration: "2h 10m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 12,
    title: "Captain America",
    poster: "12.png",
    category: "Trending",
    age: "13+",
    duration: "2h 4m",
    rating: 7.8,
    type: "movie",
  },
  {
    id: 13,
    title: "Justice League",
    poster: "13.png",
    category: "Trending",
    age: "13+",
    duration: "2h",
    rating: 6.1,
    type: "movie",
  },
  {
    id: 14,
    title: "Aquaman",
    poster: "14.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 6.9,
    type: "movie",
  },
  {
    id: 15,
    title: "Wonder Woman",
    poster: "15.png",
    category: "Trending",
    age: "13+",
    duration: "2h 21m",
    rating: 7.4,
    type: "movie",
  },
  {
    id: 16,
    title: "Man of Steel",
    poster: "16.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 7.1,
    type: "movie",
  },
  {
    id: 17,
    title: "Deadpool",
    poster: "17.png",
    category: "Trending",
    age: "18+",
    duration: "1h 48m",
    rating: 8.0,
    type: "movie",
  },
  {
    id: 18,
    title: "Logan",
    poster: "18.png",
    category: "Trending",
    age: "18+",
    duration: "2h 17m",
    rating: 8.1,
    type: "movie",
  },
  {
    id: 19,
    title: "Venom",
    poster: "19.png",
    category: "Trending",
    age: "16+",
    duration: "1h 52m",
    rating: 6.6,
    type: "movie",
  },
  {
    id: 20,
    title: "Avatar",
    poster: "20.png",
    category: "Trending",
    age: "13+",
    duration: "2h 42m",
    rating: 7.8,
    type: "movie",
  },
];
const bollywoodMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    poster: "b1.png",
    category: "Trending",
    age: "18+",
    duration: "2h 32m",
    rating: 9.0,
    type: "movie",
  },
  {
    id: 2,
    title: "Inception",
    poster: "b2.png",
    category: "Trending",
    age: "16+",
    duration: "2h 28m",
    rating: 8.8,
    type: "movie",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "b3.png",
    category: "Trending",
    age: "13+",
    duration: "2h 49m",
    rating: 8.6,
    type: "movie",
  },
  {
    id: 4,
    title: "Joker",
    poster: "b4.png",
    category: "Trending",
    age: "18+",
    duration: "2h 2m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    poster: "b5.png",
    category: "Trending",
    age: "13+",
    duration: "3h 1m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    poster: "b6.png",
    category: "Trending",
    age: "13+",
    duration: "2h 28m",
    rating: 8.3,
    type: "movie",
  },
  {
    id: 7,
    title: "The Batman",
    poster: "b7.png",
    category: "Trending",
    age: "16+",
    duration: "2h 56m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 8,
    title: "Doctor Strange",
    poster: "b8.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.5,
    type: "movie",
  },
  {
    id: 9,
    title: "Black Panther",
    poster: "b9.png",
    category: "Trending",
    age: "13+",
    duration: "2h 14m",
    rating: 7.3,
    type: "movie",
  },
  {
    id: 10,
    title: "Iron Man",
    poster: "b10.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 11,
    title: "Thor: Ragnarok",
    poster: "b11.png",
    category: "Trending",
    age: "13+",
    duration: "2h 10m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 12,
    title: "Captain America",
    poster: "b12.png",
    category: "Trending",
    age: "13+",
    duration: "2h 4m",
    rating: 7.8,
    type: "movie",
  },
  {
    id: 13,
    title: "Justice League",
    poster: "b13.png",
    category: "Trending",
    age: "13+",
    duration: "2h",
    rating: 6.1,
    type: "movie",
  },
  {
    id: 14,
    title: "Aquaman",
    poster: "b14.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 6.9,
    type: "movie",
  },
  {
    id: 15,
    title: "Wonder Woman",
    poster: "b15.png",
    category: "Trending",
    age: "13+",
    duration: "2h 21m",
    rating: 7.4,
    type: "movie",
  },
  {
    id: 16,
    title: "Man of Steel",
    poster: "b16.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 7.1,
    type: "movie",
  },
  {
    id: 17,
    title: "Deadpool",
    poster: "b17.png",
    category: "Trending",
    age: "18+",
    duration: "1h 48m",
    rating: 8.0,
    type: "movie",
  },
  {
    id: 18,
    title: "Logan",
    poster: "b18.png",
    category: "Trending",
    age: "18+",
    duration: "2h 17m",
    rating: 8.1,
    type: "movie",
  },
  {
    id: 19,
    title: "Venom",
    poster: "b19.png",
    category: "Trending",
    age: "16+",
    duration: "1h 52m",
    rating: 6.6,
    type: "movie",
  },
  {
    id: 20,
    title: "Avatar",
    poster: "b20.png",
    category: "Trending",
    age: "13+",
    duration: "2h 42m",
    rating: 7.8,
    type: "movie",
  },
];
const hollywoodMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    poster: "h1.png",
    category: "Trending",
    age: "18+",
    duration: "2h 32m",
    rating: 9.0,
    type: "movie",
  },
  {
    id: 2,
    title: "Inception",
    poster: "h2.png",
    category: "Trending",
    age: "16+",
    duration: "2h 28m",
    rating: 8.8,
    type: "movie",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "h3.png",
    category: "Trending",
    age: "13+",
    duration: "2h 49m",
    rating: 8.6,
    type: "movie",
  },
  {
    id: 4,
    title: "Joker",
    poster: "h4.png",
    category: "Trending",
    age: "18+",
    duration: "2h 2m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    poster: "h5.png",
    category: "Trending",
    age: "13+",
    duration: "3h 1m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    poster: "h6.png",
    category: "Trending",
    age: "13+",
    duration: "2h 28m",
    rating: 8.3,
    type: "movie",
  },
  {
    id: 7,
    title: "The Batman",
    poster: "h7.png",
    category: "Trending",
    age: "16+",
    duration: "2h 56m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 8,
    title: "Doctor Strange",
    poster: "h8.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.5,
    type: "movie",
  },
  {
    id: 9,
    title: "Black Panther",
    poster: "h9.png",
    category: "Trending",
    age: "13+",
    duration: "2h 14m",
    rating: 7.3,
    type: "movie",
  },
  {
    id: 10,
    title: "Iron Man",
    poster: "h10.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 11,
    title: "Thor: Ragnarok",
    poster: "h11.png",
    category: "Trending",
    age: "13+",
    duration: "2h 10m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 12,
    title: "Captain America",
    poster: "h12.png",
    category: "Trending",
    age: "13+",
    duration: "2h 4m",
    rating: 7.8,
    type: "movie",
  },
  {
    id: 13,
    title: "Justice League",
    poster: "h13.png",
    category: "Trending",
    age: "13+",
    duration: "2h",
    rating: 6.1,
    type: "movie",
  },
  {
    id: 14,
    title: "Aquaman",
    poster: "h14.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 6.9,
    type: "movie",
  },
  {
    id: 15,
    title: "Wonder Woman",
    poster: "h15.png",
    category: "Trending",
    age: "13+",
    duration: "2h 21m",
    rating: 7.4,
    type: "movie",
  },
  {
    id: 16,
    title: "Man of Steel",
    poster: "h16.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 7.1,
    type: "movie",
  },
  {
    id: 17,
    title: "Deadpool",
    poster: "h17.png",
    category: "Trending",
    age: "18+",
    duration: "1h 48m",
    rating: 8.0,
    type: "movie",
  },
  {
    id: 18,
    title: "Logan",
    poster: "h18.png",
    category: "Trending",
    age: "18+",
    duration: "2h 17m",
    rating: 8.1,
    type: "movie",
  },
  {
    id: 19,
    title: "Venom",
    poster: "h19.png",
    category: "Trending",
    age: "16+",
    duration: "1h 52m",
    rating: 6.6,
    type: "movie",
  },
  {
    id: 20,
    title: "Avatar",
    poster: "h20.png",
    category: "Trending",
    age: "13+",
    duration: "2h 42m",
    rating: 7.8,
    type: "movie",
  },
];
const recentlyAdded = [
  {
    id: 1,
    title: "The Dark Knight",
    poster: "r1.png",
    category: "Trending",
    age: "18+",
    duration: "2h 32m",
    rating: 9.0,
    type: "movie",
  },
  {
    id: 2,
    title: "Inception",
    poster: "r2.png",
    category: "Trending",
    age: "16+",
    duration: "2h 28m",
    rating: 8.8,
    type: "movie",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "r3.png",
    category: "Trending",
    age: "13+",
    duration: "2h 49m",
    rating: 8.6,
    type: "movie",
  },
  {
    id: 4,
    title: "Joker",
    poster: "r4.png",
    category: "Trending",
    age: "18+",
    duration: "2h 2m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    poster: "r5.png",
    category: "Trending",
    age: "13+",
    duration: "3h 1m",
    rating: 8.4,
    type: "movie",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    poster: "r6.png",
    category: "Trending",
    age: "13+",
    duration: "2h 28m",
    rating: 8.3,
    type: "movie",
  },
  {
    id: 7,
    title: "The Batman",
    poster: "r7.png",
    category: "Trending",
    age: "16+",
    duration: "2h 56m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 8,
    title: "Doctor Strange",
    poster: "r8.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.5,
    type: "movie",
  },
  {
    id: 9,
    title: "Black Panther",
    poster: "r9.png",
    category: "Trending",
    age: "13+",
    duration: "2h 14m",
    rating: 7.3,
    type: "movie",
  },
  {
    id: 10,
    title: "Iron Man",
    poster: "r10.png",
    category: "Trending",
    age: "13+",
    duration: "2h 6m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 11,
    title: "Thor: Ragnarok",
    poster: "r11.png",
    category: "Trending",
    age: "13+",
    duration: "2h 10m",
    rating: 7.9,
    type: "movie",
  },
  {
    id: 12,
    title: "Captain America",
    poster: "r12.png",
    category: "Trending",
    age: "13+",
    duration: "2h 4m",
    rating: 7.8,
    type: "movie",
  },
  {
    id: 13,
    title: "Justice League",
    poster: "r13.png",
    category: "Trending",
    age: "13+",
    duration: "2h",
    rating: 6.1,
    type: "movie",
  },
  {
    id: 14,
    title: "Aquaman",
    poster: "r14.png",
    category: "Trending",
    age: "13+",
    duration: "2h 23m",
    rating: 6.9,
    type: "movie",
  },
];
const koreanaAdded = [
  {
    id: 1,
    title: "Parasite",
    poster: "k1.png",
    category: "Korean",
    age: "18+",
    duration: "2h 12m",
    rating: 8.6,
    type: "movie",
  },
  {
    id: 2,
    title: "Train to Busan",
    poster: "k2.png",
    category: "Korean",
    age: "18+",
    duration: "1h 58m",
    rating: 7.6,
    type: "movie",
  },
  {
    id: 3,
    title: "Squid Game",
    poster: "k3.png",
    category: "Korean",
    age: "18+",
    duration: "9 Episodes",
    rating: 8.0,
    type: "series",
  },
  {
    id: 4,
    title: "All of Us Are Dead",
    poster: "k4.png",
    category: "Korean",
    age: "18+",
    duration: "12 Episodes",
    rating: 7.5,
    type: "series",
  },
  {
    id: 5,
    title: "Crash Landing on You",
    poster: "k5.png",
    category: "Korean",
    age: "13+",
    duration: "16 Episodes",
    rating: 8.7,
    type: "series",
  },
  {
    id: 6,
    title: "Vincenzo",
    poster: "k6.png",
    category: "Korean",
    age: "16+",
    duration: "20 Episodes",
    rating: 8.4,
    type: "series",
  },
  {
    id: 7,
    title: "Goblin",
    poster: "k7.png",
    category: "Korean",
    age: "13+",
    duration: "16 Episodes",
    rating: 8.6,
    type: "series",
  },
  {
    id: 8,
    title: "Itaewon Class",
    poster: "k8.png",
    category: "Korean",
    age: "13+",
    duration: "16 Episodes",
    rating: 8.2,
    type: "series",
  },
  {
    id: 9,
    title: "The Glory",
    poster: "k9.png",
    category: "Korean",
    age: "18+",
    duration: "16 Episodes",
    rating: 8.1,
    type: "series",
  },
  {
    id: 10,
    title: "My Name",
    poster: "k10.png",
    category: "Korean",
    age: "18+",
    duration: "8 Episodes",
    rating: 7.8,
    type: "series",
  },
];

// Function to chunk movies into slides
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
const Products = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [id, setId] = useState();
  const [popData, setPopupData] = useState(false);

  const renderCarousel = (movies, title) => {
    const slides = chunkArray(movies, 5); // 5 cards per slide
    return (
      <>
        {popData && (
          <ModelView movie={selectedMovie} setPopData={setPopupData} />
        )}
        <h2 className="trending-heading">{title}</h2>
        <div
          id={`carousel-${title}`}
          className="carousel slide p-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex gap-3 justify-content-center">
                  {slide.map((movie) => (
                    <div
                      className="card movie-card"
                      key={movie.id}
                      onClick={() => {
                        setSelectedMovie(movie);
                        setPopupData(true); // modal open
                      }}
                    >
                      <img src={movie.poster} alt={movie.title} />
                      {/* Hover Overlay */}
                      <div className="movie-overlay">
                        <button
                          className="play-btn-card"
                          onClick={() => {
                            setSelectedMovie(movie);
                            setPopupData(true);
                          }}
                        >
                          <FaPlay />
                        </button>

                        <h6 className="movie-title">{movie.title}</h6>

                        <div className="movie-meta">
                          <span className="age">{movie.age}</span>
                          <span>{movie.duration}</span>
                          <span>⭐ {movie.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carousel-${title}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carousel-${title}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="products">
      {renderCarousel(trendingMovies, "Trending")}
      {renderCarousel(bollywoodMovies, "Bollywood")}
      {renderCarousel(recentlyAdded, "Recently")}
      {renderCarousel(hollywoodMovies, "Hollywood")}
      {renderCarousel(koreanaAdded, "Korean")}
    </div>
  );
};

export default Products;
