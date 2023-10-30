import React from 'react';

export default function Information(
  props
) {
  const { user } = props;
  return (
    <div
      style={{
        backgroundColor: 'yellow',
      }}
    >
      xin chào: {user.username}
    </div>
  );
}
