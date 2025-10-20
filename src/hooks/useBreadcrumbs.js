// src/hooks/useBreadcrumbs.js
export const useBreadcrumbs = ({ categoryMap = {}, category, subcategory, productName }) => {
  const crumbs = [
    { name: "Каталог", path: "/catalog" }
  ];

  if (category) {
    crumbs.push({
      name: categoryMap[category] || category,
      path: `/catalog/${category}`
    });
  }

  if (subcategory) {
    crumbs.push({
      name: categoryMap[subcategory] || subcategory,
      path: `/catalog/${category}/${subcategory}`
    });
  }

  if (productName) {
    crumbs.push({
      name: productName,
      path: null // останній елемент не клікабельний
    });
  }

  return crumbs;
};
