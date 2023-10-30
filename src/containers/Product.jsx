import React, { useState } from 'react';

export default function Product({
  item,
  onChangeProduct,
  onDeleteProduct,
}) {
  const [isEditing, setEditing] =
    useState(false);
  return (
    <li key={item.id}>
      <input
        type='checkbox'
        checked={item.done}
        onChange={(e) =>
          onChangeProduct({
            ...item,
            done: e.target.checked,
          })
        }
      />
      {isEditing ? (
        <>
          <input
            type='text'
            value={item.text}
            onChange={(e) =>
              onChangeProduct({
                ...item,
                text: e.target.value,
              })
            }
          />
          <button
            onClick={() =>
              setEditing(false)
            }
          >
            Save
          </button>
        </>
      ) : (
        <>
          {item.text}
          <button
            onClick={() =>
              setEditing(true)
            }
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={() =>
          onDeleteProduct(item.id)
        }
      >
        Delete
      </button>
    </li>
  );
}
