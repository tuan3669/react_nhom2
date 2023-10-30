import React from 'react';
import Item from './Item';

export default function Menu() {
  const list = [
    {
      link: 'link1',
      content: 'content 1',
    },
    {
      link: 'link2',
      content: 'content 2',
    },
    {
      link: 'link3',
      content: 'content 3',
    },
  ];
  return (
    <>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          listStyle: 'none',
        }}
      >
        {list.map((item, index) => (
          <Item
            key={index}
            link={item.link}
            content={item.content}
          />
        ))}
      </ul>
      <div>Thong tin nguoi dung</div>
    </>
  );
}
