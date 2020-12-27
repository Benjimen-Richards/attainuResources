import "../Css/Listdisplay.css";
import { Link } from "react-router-dom";
const ListingDisplay = (props) => {
  const renderlist = (data) => {
    console.log(data);
    if (data) {
      return data.map((item) => (
        <div class="col-sm">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={item.thumb}
              alt="/"
              style={{ height: "200px" }}
            />
            <div className="card-body">
              <Link to={`/details/${item._id}`}>
                <h5 className="card-title">{item.name}</h5>
              </Link>
              <p className="card-text">{item.address}</p>
              <p
                style={{
                  position: "absolute",
                  bottom: "0",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <b>Cost:{item.cost} per night</b>
              </p>
            </div>
          </div>
        </div>
      ));
    } else {
      return (
        <img
          src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif"
          style={{
            width: "200px",
            height: "200px",
          }}
          alt="/"
        />
      );
    }
  };
  return (
    <div class="container">
      <div class="row">{renderlist(props.data)}</div>
    </div>
  );
};
export default ListingDisplay;
