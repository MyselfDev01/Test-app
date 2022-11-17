import React from "react";
import Head from "next/head";

import { ProductCard } from "../components";
import { SubHeader } from "../containers";
import { ContainerLg } from "../styles";
import { useShopMenu } from "../hooks";
import { PagesData } from "../utility";

const Shop = () => {
  const menu = useShopMenu();
  
  const data = PagesData.find((item) => {
    return item?.url === "/";
  });

  return (
    <>
      <Head>
        <title key="title">Shop Now</title>
        <meta key="og:title" property="og:title" content="Shop-Now" />
        <meta
          key="og:url"
          property="og:url"
          content="https://www.example.com"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti eos corporis repellendus tempora libero iste inventore soluta?"
        />
      </Head>
      <SubHeader node={menu} />
      <ContainerLg>
        <ProductCard data={data} />
      </ContainerLg>
    </>
  );
};

export default Shop;
