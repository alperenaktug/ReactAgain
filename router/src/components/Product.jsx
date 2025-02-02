import PropTypes from "prop-types";

function Product({ product }) {
  const { id, name, price } = product;

  return (
    <div style={{ marginBottom: "50px" }}>
      <div>Ürün Detayları</div>
      <h3>isim : {name}</h3>
      <h3>Fiyat : {price}</h3>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
