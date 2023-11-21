import Markets from "../components/Markets";
import Navbar from "../components/Navbar";

const CryptoHome = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper-container">
        <Markets />
      </div>
    </>
  );
};

export default CryptoHome;
