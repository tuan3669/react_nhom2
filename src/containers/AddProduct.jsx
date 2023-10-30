import { useState } from 'react';

export default function AddProduct({
  onAddTask,
}) {
  const [input, setInput] =
    useState('');
  return (
    <>
      Thêm sản phẩm mới:{' '}
      <input
        type='text'
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />
      <button
        onClick={() => {
          onAddTask(input);
          setInput('');
        }}
      >
        Add
      </button>
    </>
  );
}
