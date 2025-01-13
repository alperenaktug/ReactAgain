import React from "react";
import PropTypes from "prop-types";

function Products(props) {
  const { productName, price } = props; // {productName : "Ayakkabı " , price : 3200}
  // Bu işlemin adı javascript distructing işlemi kodu daha anlaşılır olarak kullanılmasını sağlar .
  console.log(props);
  return (
    <div>
      <div>Ürün Bilgileri</div>
      <hr />
      <div>
        <div>isim : {productName}</div>
        <div>Fiyat : {price} TL</div>
      </div>
    </div>
  );
}
Products.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
