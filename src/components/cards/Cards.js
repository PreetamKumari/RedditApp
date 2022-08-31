import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ redditData, page }) => {
  let display;
  if (!redditData) {
    display = "No Data Found";
  } else {
    display = redditData.map((item) => {
      let { id, thumbnail, title } = item.data;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4"
        >
          <div className={styles.cards}>
            <img
              className={`${styles.img} img-fluid`}
              src={thumbnail}
              alt="not found"
            ></img>
            <div className="content w-75 mx-auto">
              <div className="mb-4 text-justify">{title}</div>
            </div>
          </div>
        </Link>
      );
    });
  }
  return <>{display}</>;
};

export default Cards;
