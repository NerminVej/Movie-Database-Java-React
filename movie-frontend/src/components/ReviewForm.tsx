const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <form>
      <div className="mb-3">
        <label
          htmlFor="review"
          className="block text-sm font-medium text-gray-700"
        >
          {labelText}
        </label>
        <textarea
          ref={revText}
          id="review"
          rows={3}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          defaultValue={defaultValue}
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
