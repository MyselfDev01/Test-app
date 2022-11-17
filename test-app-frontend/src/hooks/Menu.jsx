import { useMemo } from "react";

export const useRecipesMenu = () => {
  return useMemo(() => {
    let categories = {
      key: "categories",
      title: "Categories",
    };

    let collections = {
      key: "collections",
      title: "Collections",
    };
    let resources = {
      key: "resources",
      title: "Resources",
    };

    const mainItems = [categories, collections, resources];

    return mainItems.filter((el) => Object.keys(el).length > 0);
  }, []);
};

export const useShopMenu = () => {
  return useMemo(() => {
    let categories = {
      key: "categories",
      title: "Product 1",
    };

    let collections = {
      key: "collections",
      title: "Product 2",
    };
    let resources = {
      key: "resources",
      title: "Product 3",
    };

    const mainItems = [categories, collections, resources];

    return mainItems.filter((el) => Object.keys(el).length > 0);
  }, []);
};

export const useAboutMenu = () => {
  return useMemo(() => {
    let company = {
      key: "company",
      title: "About Company",
    };

    let faq = {
      key: "faq",
      title: "FAQ",
    };

    const mainItems = [company, faq];

    return mainItems.filter((el) => Object.keys(el).length > 0);
  }, []);
};

export const useLearnMenu = () => {
  return useMemo(() => {
    let learnRecipes = {
      key: "learn-recipes",
      title: "Learn Recipes",
    };

    const mainItems = [learnRecipes];

    return mainItems.filter((el) => Object.keys(el).length > 0);
  }, []);
};

export const useBlogMenu = () => {
  return useMemo(() => {
    let dailyBlog = {
      key: "daily-blog",
      title: "Daily blog",
    };

    let categories = {
      key: "categories",
      title: "Categories",
    };

    const mainItems = [categories, dailyBlog];

    return mainItems.filter((el) => Object.keys(el).length > 0);
  }, []);
};
