import { useMemo } from "react";

export const useMenu = () => {
  return useMemo(() => {
    let home = {
      key: "shop",
      title: "Shop",
      link: "/",
    };

    let recipes = {
      key: "recipes",
      title: "Recipes",
      link: "/recipes",
    };

    let learn = {
      key: "learn",
      title: "Learn",
      link: "/learn",
    };
    let about = {
      key: "about",
      title: "About",
      link: "/about",
    };
    let blog = {
      key: "blog",
      title: "blog",
      link: "/blog",
    };

    const mainItems = [home, recipes, about, learn, blog];

    return mainItems.filter((el) => Object.keys(el).length > 0);
  }, []);
};
