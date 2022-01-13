import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      className="mx-auto text-center text-lg"
    />
  );
}

export default Spinner;
