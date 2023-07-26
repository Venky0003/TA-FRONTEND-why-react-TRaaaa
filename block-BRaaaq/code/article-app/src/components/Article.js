import PropTypes from 'prop-types';
import data from '../data.json';

function Articles() {
  return (
    <section className="article">
      <div className="container grid-container">
        {data.map((article) => (
          <Article key={article.author} {...article} />
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
        src={props.urlToImage}
        alt="article-pics"
      />
      <h3>{props.title}</h3>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage:PropTypes.string.isRequired
};

export default Articles;
