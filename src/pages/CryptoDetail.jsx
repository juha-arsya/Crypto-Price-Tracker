import CoinDetail from "../components/CoinDetail";
import Navbar from "../components/Navbar";

const CryptoDetail = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper-container mt-10">
        <CoinDetail />
      </div>
    </>
  );
};

export default CryptoDetail;
