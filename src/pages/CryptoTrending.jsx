import Trending from "../components/Trending";
import Navbar from "../components/Navbar";

const CryptoTrending = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper-container">
        <Trending />
      </div>
    </>
  );
};

export default CryptoTrending;
