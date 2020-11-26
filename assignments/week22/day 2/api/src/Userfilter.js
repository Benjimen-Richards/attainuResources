import Userdata from "./Userdata";

const Userfilter = (props) => {
  const userid = props.match.params.id;
  const details = Userdata.filter((user) => user.id === parseInt(userid))[0];
  return (
    <>
      <h1>{details.id}</h1>
      <h1>{details.name}</h1>
    </>
  );
};
export default Userfilter;
