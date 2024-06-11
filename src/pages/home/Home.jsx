import { ProductCard } from "../../components/productCard/ProductCard";

export const Home = () => {
  const products = [
    {
      title: "Smartphone",
      price: 699.99,
      description:
        "A high-end smartphone with a crystal-clear display and powerful processor.",
    },
    {
      title: "Laptop",
      price: 1299.99,
      description: "A sleek laptop with 16GB RAM, 512GB SSD, and a 4K display.",
    },
  ];

  return (
    <div>
      <ProductCard
        title={products[0].title}
        description={products[0].description}
        price={products[0].price}
      />
      <ProductCard
        title={products[1].title}
        description={products[1].description}
        price={products[1].price}
      />
    </div>
  );
};
