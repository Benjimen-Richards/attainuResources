import Data from "./Data";
const Details = (props) => {
  //   console.log(props);
  const submithandlerr = () => {
    console.log(props);
  };
  const userid = props.match.params.id;
  const details = Data.filter((user) => user.id === parseInt(userid))[0];
  return (
    <div>
      <button onClick={submithandlerr}>submit</button>
      <h1>{details.id}</h1>
    </div>
  );
};
export default Details;
