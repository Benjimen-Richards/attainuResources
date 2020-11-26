const Mapping = (props) => {
  const userid = props.match.params.id;
  return <h1>{userid}</h1>;
};
export default Mapping;
