import React from 'react';
import ProductMini from './ProductMini';
import './UI.css';
const ProductsGrid = () => {
  const field_row = [...new Array(8).keys()];
  const field_col = [...new Array(4).keys()];
  return (
    <div>
      <div className="wrapper">
        {field_row.map((row) => (
          <div className="field--row" key={row}>
            {field_col.map((col) => (
              <ProductMini key={`${row} ${col}`}></ProductMini>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
