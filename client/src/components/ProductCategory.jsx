import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "./ProductCard";

export default function ProductCategory() {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (cat) => cat.path.toLowerCase() === category
  );

  const filteredProducts = products.filter((product) => {
    return product.category.toLowerCase() === category;
  });

  return (
    <div className="mt-16">
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:grid-cols-5 md:gap-6 mt-6">
          {filteredProducts.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[70vh] font-medium text-primary text-2xl">
          No products found for this category.
        </div>
      )}
    </div>
  );
}
