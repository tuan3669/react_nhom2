import React from 'react';

export default function Item({
  link,
  content,
}) {
  return (
    <li>
      <a href={link}>
        Nội dung liên kết {content}
      </a>
    </li>
  );
}
