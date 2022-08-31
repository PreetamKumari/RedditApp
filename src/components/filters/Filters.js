const Filters = ({ allData, updateRedditData }) => {
  function getMaxUpvote() {
    const maxUpVote = allData.filter((item) => {
      return item.data.ups > 1000;
    });
    updateRedditData(maxUpVote);
  }

  function getMaxDownvote() {
    const maxDownVote = allData.filter((item) => {
      return item.data.ups < 100;
    });
    updateRedditData(maxDownVote);
  }

  function clearFilter() {
    updateRedditData(allData);
  }

  return (
    <div>
      <div className="text-center fw-bold fs-4 mb-4"> Filters </div>
      <div className="d-flex justify-content-around">
        <button onClick={getMaxUpvote} className="btn btn-primary gap-4">
          Most Liked
        </button>
        <button onClick={getMaxDownvote} className="btn btn-primary ml-4">
          Most Disliked
        </button>
        <button onClick={clearFilter} className="btn btn-primary ml-4">
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
