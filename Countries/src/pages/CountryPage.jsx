import BackButton from "../components/BackButton";
import CountryInfo from "../components/CountryInfo";
import Header from "../components/Header";

function CountryPage() {
  return (
    <div className="country-page">
      <Header />
      <main className="country-page__main">
        <BackButton />
        <CountryInfo />
      </main>
    </div>
  );
}

export default CountryPage;
