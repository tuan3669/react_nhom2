import { useReducer } from 'react';
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
let nextId = 3;
export default function ProductApp() {
  const [items, dispatch] = useReducer(
    productReducer,
    initial
  );

  function handleAdd(text) {
    dispatch({
      type: 'added',
      id: ++nextId,
      text: text,
    });
  }
  function handleChange(item) {
    dispatch({
      type: 'changed',
      item: item,
    });
  }
  function handleDelete(itemId) {
    dispatch({
      type: 'deleted',
      id: itemId,
    });
  }

  function productReducer(
    items,
    action
  ) {
    if (action.type === 'added') {
      console.log('add', action.id);
      console.log('sstate', items);
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    } else if (
      action.type === 'changed'
    ) {
      return items.map((i) => {
        if (i.id === action.item.id) {
          return action.item;
        } else {
          return i;
        }
      });
    } else if (
      action.type === 'deleted'
    ) {
      return items.filter(
        (i) => i.id !== action.id
      );
    } else {
      throw Error(
        'Unknown action: ' + action.type
      );
    }
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
