import { useParams } from 'react-router-dom';

export default function SanPham({
  sanpham,
}) {
  let idsp = useParams();
  let chitiet = false;

  if ('idsp' in idsp) {
    chitiet = true;
    sanpham = {
      idsp: idsp.idsp,
      src: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/detailed/865/10054926-may-lanh-daikin-inverter-atkf25xvmv-1.jpg',
      tensp:
        'Daikin Inverter HP 23213213',
      gia: 333333,
      chitiet: 'Thông số sản phẩm',
    };
  }

  return (
    <>
      <div>
        {chitiet &&
          `Chi tiết sản phẩm ${sanpham.idsp}`}
      </div>
      <div>
        <img
          src={sanpham.src}
          alt={sanpham.tensp}
        />
      </div>
      <div>{sanpham.tensp}</div>
      <div>{sanpham.gia}</div>
      <div>
        {chitiet && sanpham.chitiet}
      </div>
    </>
  );
}
