import { Context } from './Context';
import {
  useContext,
  useState,
} from 'react';
export default function TestContext() {
  const { items, setItems } =
    useContext(Context);
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input
        type='text'
        onChange={handleChange}
      />
      <button
        onClick={() => setItems(input)}
      >
        Click
      </button>
    </>
  );
}
