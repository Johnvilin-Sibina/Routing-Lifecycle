import NewsCard from "./NewsCard" 
function Politics() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Politics</h1>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </div>
      </div>
    </div>
  );
}

export default Politics;
