import React from "react";
import Head from "next/head";

import { ProductCard } from "../../components";
import { SubHeader } from "../../containers";
import { ContainerLg } from "../../styles";
import { useAboutMenu } from "../../hooks";
import { PagesData } from "../../utility";

const AboutUs = () => {
  const menu = useAboutMenu();
  const data = PagesData.find((item) => {
    return item?.url === "/about";
  });

  return (
    <>
      <Head>
        <title key="title">About Us</title>
        <meta key="og:title" property="og:title" content="About-us" />
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

export default AboutUs;
