import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    // 1. نصنع مصفوفة جديدة باستخدام map
    const nextProducts = products.map(product => {
      // 2. إذا لقينا المنتج اللي ضغطنا عليه
      if (product.id === productId) {
        // نرجع نسخة جديدة من المنتج مع زيادة العدد
        return { ...product, count: product.count + 1 };
      } else {
        // إذا مو هو المنتج المطلوب، نرجعه زي ما هو بدون تعديل
        return product;
      }
    });

    // 3. نحدث الشاشة بالمصفوفة الجديدة
    setProducts(nextProducts);
  }

  return (
    <ul style={{ padding: "20px", direction: "ltr", textAlign: "left" }}>
      {products.map(product => (
        <li key={product.id} style={{ marginBottom: "10px" }}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          {' '}
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }} style={{ marginLeft: "10px" }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
