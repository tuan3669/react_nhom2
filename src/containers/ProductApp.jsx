import { useState } from 'react';
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';

const initial = [
  {
    id: 0,
    text: 'Giày thể thao',
    done: true,
  },
  {
    id: 1,
    text: 'Áo thun thể thao',
    done: false,
  },
  {
    id: 2,
    text: 'Bóng chuyền loại lớn',
    done: false,
  },
];

export default function ProductApp() {
  const [items, setItems] =
    useState(initial);
  function handleAdd(text) {
    console.log(items);
    setItems([
      ...items,
      {
        id:
          items[items.length - 1].id +
          1,
        text: text,
        done: false,
      },
    ]);
  }
  function handleChange(item) {
    setItems(
      items.map((i) => {
        if (i.id === item.id) {
          return item;
        } else {
          return i;
        }
      })
    );
  }
  function handleDelete(itemId) {
    setItems(
      items.filter(
        (i) => i.id !== itemId
      )
    );
  }

  return (
    <>
      <AddProduct
        onAddTask={handleAdd}
      />

      <ListProduct
        items={items}
        onChangeProduct={handleChange}
        onDeleteProduct={handleDelete}
      />
    </>
  );
}
