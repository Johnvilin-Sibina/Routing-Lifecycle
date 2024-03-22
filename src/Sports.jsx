import NewsCard from "./NewsCard"
function Sports() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <h1>Sports</h1>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

export default Sports;
