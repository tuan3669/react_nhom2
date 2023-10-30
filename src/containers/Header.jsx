import React from 'react';
import { Link } from 'react-router-dom';
import DanhMucNoiBat from './DanhMucNoiBat';

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to={``}>
            Tất cả danh mục
          </Link>
        </li>
        {/* danh muc noi bat */}
        <DanhMucNoiBat />
        <li>
          <Link to={``}>Đăng nhập</Link>
        </li>
      </ul>
    </>
  );
}
