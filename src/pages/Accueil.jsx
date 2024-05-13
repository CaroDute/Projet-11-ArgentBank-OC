import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";

function Accueil() {
  return (
    <>
      <Banner
        title={"Features"}
        subtitles={["No Fees.", "No minimum deposit", "High interest rates"]}
        text={"Open a savings account with Argent Bank today!"}
      />
      <FeatureItem
        src="./img/icon-chat.png"
        alt="Chat Icon"
        text="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
        title="You are our #1 priority"
      />
      <FeatureItem
        src="./img/icon-money.png"
        alt="Money Icon"
        text="The more you save with us, the higher your interest rate will be!"
        title="More savings means higher rates"
      />
      <FeatureItem
        src="./img/icon-security.png"
        alt="Security Icon"
        text="We use top of the line encryption to make sure your data and money
        is always safe."
        title="Security you can trust"
      />
    </>
  );
}

export default Accueil;
