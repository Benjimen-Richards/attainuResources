import { Link } from "react-router-dom";
import "../Css/Card.css";
const Card = (props) => {
  console.log(props);
  const rendercard = (data) => {
    if (data) {
      return data.map((item) => (
        <div class="col-sm">
          <Link className="link" to={`/hoteltype/${item.trip}`}>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={item.image} alt="/" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      ));
    }
  };

  return (
    <div class="container">
      <div class="row">{rendercard(props.data)}</div>
    </div>
  );
};
export default Card;
