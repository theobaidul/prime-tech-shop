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

  let filteredProducts = products;

  filteredProducts = filteredProducts?.filter(filterByMinPrice);
  filteredProducts = filteredProducts?.filter(filterByMaxPrice);

  if (ratings?.length > 0) {
    filteredProducts = filteredProducts?.filter(filterByRating);
  }

  return filteredProducts?.slice((page - 1) * limit, page * limit);
}
