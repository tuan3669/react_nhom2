import React from 'react';
import { Link } from 'react-router-dom';
import SanPham from './SanPham';
import { useParams } from 'react-router-dom';
export default function DanhSachSanPhamNoiBat() {
  let iddm = useParams();
  let dsSPNB = [];
  let tatCaDM = true;
  if ('iddm' in iddm) {
    tatCaDM = false;
    // call api dua vaoid danh muc
    // vi du ở  day ddanhmuc máy lạnh
    dsSPNB = [
      {
        idsp: 'ml1',
        src: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/detailed/865/10054926-may-lanh-daikin-inverter-atkf25xvmv-1.jpg',
        tensp:
          'Daikin Inverter 1 HP ft2321321',
        gia: 230000000,
      },
      {
        idsp: 'ml2',
        src: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/detailed/865/10054926-may-lanh-daikin-inverter-atkf25xvmv-1.jpg',
        tensp:
          'Panasonic Inverter 2 HP ft2321321',
        gia: 530000000,
      },
      {
        idsp: 'ml3',
        src: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/detailed/865/10054926-may-lanh-daikin-inverter-atkf25xvmv-1.jpg',
        tensp:
          'SAM SUNG 3 HP ft2321321',
        gia: 90000000,
      },
    ];
  }

  return (
    <>
      {tatCaDM
        ? 'danh sách tất cả sản phẩm theo danh mục nổi bật'
        : `Sản phẩm theo danh mục ${iddm.iddm}`}

      {dsSPNB.map((sp) => (
        <Link
          to={`/sanpham/chitiet/${sp.idsp}`}
        >
          <SanPham sanpham={sp} />
        </Link>
      ))}
    </>
  );
}
