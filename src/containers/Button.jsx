import React from 'react';

export default function Button({
  user,
}) {
  function handelClick(user, e) {
    console.log('event ', e);
  }

  return (
    <button
      onClick={(e) =>
        handelClick(user, e)
      }
    >
      button
    </button>
  );
}
