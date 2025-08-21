import Image from "next/image";
import Banner from "./components/Banner";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductHighlight />
      {/* <Footer /> */}
    </div>
  );
}
