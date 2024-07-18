import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "@/components/Banner";
import BannerImage from "../../../public/images/banner2.png";
import CartIcon from "../../../public/images/shopping-cart-white.png";
import { IProduct } from "@/types";
import {
  Button,
  ImageContainer,
  ProductContainer,
  ProductDescription,
  ProductDetail,
  ProductName,
  ProductPrice,
  ProductSplitPrice,
  Summary,
  SummaryTitle,
} from "./styles";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";

interface ProductsProps {
  product: IProduct;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;
  const api = "http://localhost:3333";
  const result = await fetch(`${api}/products/${productId}`, { cache: 'no-cache' });
  const { data } = await result.json();
  const product: IProduct = data.product;
  product.image = `${api}/images/${product.image}`;
  product.formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);
  product.splitPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price / 10);
  return {
    props: {
      product,
    },
  };
};

export default function ProductId({ product }: ProductsProps) {
  const { addProduct } = useContext(ShoppingCartContext);

  const addProductInShoppingCart = (product: IProduct) => {
    toast.success("Produto adicionado ao carrinho!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    addProduct(product);
  };

  return (
    <>
      <Head>
        <title>ImagineShop - {product.name}</title>
        <meta name="description" content="Product detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductContainer>
        <Banner image={BannerImage} width={1140} height={145} />

        <ProductDetail>
          <ImageContainer>
            <Image
              alt="Product Image"
              src={product.image}
              width={200}
              height={200}
            ></Image>
          </ImageContainer>

          <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
            <ProductSplitPrice>
              10x de {product.splitPrice} sem juros
            </ProductSplitPrice>
            <Button onClick={() => addProductInShoppingCart(product)}>
              <Image
                alt="shopping cart image"
                src={CartIcon}
                width={22}
                height={22}
              ></Image>
              <p>Adicionar ao carrinho</p>
            </Button>
            <ProductDescription>{product.description}</ProductDescription>
          </div>
        </ProductDetail>
        <SummaryTitle>
          <span>Inf</span>ormações do produto
        </SummaryTitle>
        <Summary>{product.summary}</Summary>
      </ProductContainer>
      <ToastContainer />
    </>
  );
}
