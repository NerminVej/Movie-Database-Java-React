import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <div key={movie.imdbId}>
              <div className="movie-card-container relative">
                <div
                  className="movie-card relative bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${movie.backdrops[0]})`,
                  }}
                >
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="p-4">
                      <div className="movie-poster">
                        <img src={movie.poster} alt={movie.title} />
                      </div>
                      <div className="movie-title mt-2">
                        <h4 className="text-white">{movie.title}</h4>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon text-white text-4xl"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>
                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => reviews(movie.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
