import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post('/api/v1/reviews', {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = '';

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Reviews</h3>
      </div>
      <div className="mt-4 flex">
        <div className="w-1/3">
          <img src={movie?.poster} alt={movie?.title} className="w-full" />
        </div>
        <div className="w-2/3 pl-4">
          <div className="mb-4">
          </div>
          <hr className="my-4 border-t border-gray-300" />
          {reviews?.map((r, index) => (
            <div key={index}>
              <p className="mb-2">{r.body}</p>
              <hr className="my-2 border-t border-gray-300" />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
    </div>
  );
};

export default Reviews;
