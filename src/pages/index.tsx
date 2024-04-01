import Home from "../components/home.js";
import Featured from "../components/featured.js";
import Collection from "../components/collection.js";
import Offer from "../components/offer.js";
import NewCollection from "../components/newCollection.js";
import Newsletter from "../components/newsletter.js";
import WomenSneakers from "../components/womenSneakers.js";

export default async function HomePage() {
  return (
    <div>
      <Home />
      <Featured />
      <Collection />
      <WomenSneakers />
      <Offer />
      <NewCollection />
      <Newsletter />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
