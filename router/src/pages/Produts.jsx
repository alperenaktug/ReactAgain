import Product from "../components/Product";

const products = [
  {
    id: 1,
    name: "Telefon",
    price: 20000,
  },
  {
    id: 2,
    name: "Buzdolabı",
    price: 30000,
  },
  {
    id: 3,
    name: "Bilgisayar",
    price: 50000,
  },
];

function Produts() {
  return (
    <div>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Produts;
