import { createBrowserRouter } from 'react-router-dom';
import DanhSachSanPhamNoiBat from './DanhSachSanPhamNoiBat';
import SanPham from './SanPham';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <DanhSachSanPhamNoiBat />,
      },
      {
        path: 'sanpham/:iddm',
        element: <DanhSachSanPhamNoiBat />,
      },
      {
        path: 'sanpham/chitiet/:idsp',
        element: <SanPham sanpham={null} />
      },
      {
        path: 'dangnhap',
        element: <Team />,
      },
      {
        path: '*',
        element: (
          <div>
            khong tim thay web theo yéu
            cầy
          </div>
        ),
      },
    ],
  },
]);
