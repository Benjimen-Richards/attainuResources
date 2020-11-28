const Personalinfo = (props) => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="content">
            <h3>{props.text}</h3>
            <hr />
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Personalinfo;
