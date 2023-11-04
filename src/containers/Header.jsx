import React, {
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import DanhMucNoiBat from './DanhMucNoiBat';
import { Context } from './Context';

export default function Header() {
  const { items, setItems } =
    useContext(Context);
  return (
    <>
      {items
        ? items
        : 'Chưa có dữ liệu'}
      <ul>
        <li>
          <Link to={``}>
            Tất cả danh mục
          </Link>
        </li>
        {/* danh muc noi bat */}
        <DanhMucNoiBat />
        <li>
          <Link to={`/dangnhap`}>
            Đăng nhập
          </Link>
        </li>
      </ul>
    </>
  );
}
