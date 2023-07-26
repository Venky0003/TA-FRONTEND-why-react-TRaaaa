import data from './data.json'

function Articles() {
    return (
      <section className="article">
     <div className="container grid-container">
      {data.map((article) =>(
        <Article key={article.author} info={article}/>
      ))}
     </div>
     </section>
    );
  }


  export function Article(props) {
    return (
      <div className="grid-item">
        <img
        className="article-img"
          src={props.info.urlToImage}
          alt="article-pics"
  
        />
        <h3>{props.info.title}</h3>
      </div>
     
    );
  }

  
  export default Articles