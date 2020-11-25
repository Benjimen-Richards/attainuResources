import Userdata from "./Userdata";
import Footer from "./Footer";

const Userdetails = (props) => {
  const userid = props.match.params.id;
  const details = Userdata.filter((user) => user.id === parseInt(userid))[0];
  //   console.log(details[0].name);
  if (details === undefined) {
    props.history.push("/users");
  }
  return (
    <>
      <div key>
        <h1>{details?.id}</h1>
        <h2>{details?.name}</h2>
      </div>
      <Footer name={details?.name} />
    </>
  );
};
export default Userdetails;
