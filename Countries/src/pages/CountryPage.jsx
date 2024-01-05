import BackButton from "../components/BackButton";
import CountryInfo from "../components/CountryInfo";
import Header from "../components/Header";

function CountryPage() {
  return (
    <div className="country-page">
      <Header />
      <BackButton />
      <CountryInfo />
    </div>
  );
}

export default CountryPage;
