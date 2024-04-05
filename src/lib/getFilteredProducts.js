export default function getFilteredProducts(products, filters) {
  const { page, limit, categories, brands, ratings, minPrice, maxPrice } =
    filters || {};
  const filterByMinPrice = (product) => {
    return product?.price >= minPrice;
  };
  const filterByMaxPrice = (product) => {
    return product?.price <= maxPrice;
  };
  const filterByRating = (product) => {
    let matched = false;
    for (const rating of ratings) {
      if (product?.rating >= rating && product?.rating < rating + 1) {
        matched = true;
        break;
      }
    }
    return matched;
  };
  const filterByCategory = (product) => {
    return categories?.includes(product?.category);
  };
  const filterByBrand = (product) => {
    return brands?.includes(product?.brand);
  };

  let filteredProducts = products;

  filteredProducts = filteredProducts
    ?.filter(filterByMinPrice)
    ?.filter(filterByMaxPrice);

  if (ratings?.length > 0) {
    filteredProducts = filteredProducts?.filter(filterByRating);
  }
  if (categories?.length > 0) {
    filteredProducts = filteredProducts?.filter(filterByCategory);
  }
  if (brands?.length > 0) {
    filteredProducts = filteredProducts?.filter(filterByBrand);
  }

  return {
    count: filteredProducts?.length || 0,
    products: filteredProducts?.slice((page - 1) * limit, page * limit),
  };
}
