import React from 'react';

export default function Button({
  user,
  type,
}) {
  function handelClick(user, type) {
    console.log('type ', type);
  }

  return (
    <button
      type={type || 'submit'}
      onClick={(e) =>
        handelClick(
          user,
          type || 'submit'
        )
      }
    >
      nhấn
    </button>
  );
}
