import { createBrowserRouter } from 'react-router-dom';
import DanhSachSanPhamNoiBat from './DanhSachSanPhamNoiBat';
import SanPham from './SanPham';
import App from '../App';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <DanhSachSanPhamNoiBat />
        ),
      },
      {
        path: 'sanpham/:iddm',
        element: (
          <DanhSachSanPhamNoiBat />
        ),
      },
      {
        path: 'sanpham/chitiet/:idsp',
        element: (
          <SanPham sanpham={null} />
        ),
      },
      {
        path: 'dangnhap',
        element: <Login />,
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
export default router;
