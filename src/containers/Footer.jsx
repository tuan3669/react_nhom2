import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <ul>
        <li>
          <Link to={``}>
            Giới thiệu công ty
          </Link>
        </li>
        <li>
          <Link to={``}>
            Liên hệ và góp ý
          </Link>
        </li>
        <li>
          <Link to={``}>
            Tìm siêu thị
          </Link>
        </li>
        <li>
          <Link to={``}>Bảo hành</Link>
        </li>
      </ul>
    </>
  );
}
