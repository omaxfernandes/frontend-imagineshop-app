import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Main } from "./styles";

import BannerImage from "../../../public/images/banner1.png";

export default function Dashboard({ productList }: any) {
  return (
      <Main>
        <Banner image={BannerImage} width={1140} height={325} />
        <Products products={productList}></Products>
      </Main>
  );
}


