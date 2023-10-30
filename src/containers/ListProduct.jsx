import Product from './Product';

export default function ListProduct({
  items,
  onChangeProduct,
  onDeleteProduct,
}) {
  return (
    <ul>
      {items.map((item) => (
        <Product
          key={item.id}
          item={item}
          onChangeProduct={
            onChangeProduct
          }
          onDeleteProduct={
            onDeleteProduct
          }
        />
      ))}
    </ul>
  );
}
