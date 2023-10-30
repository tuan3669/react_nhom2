import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Team />,
      },
      {
        path: 'sanpham/:iddm',
        element: <Team />,
      },
      {
        path: 'sanpham/chitiet/:idsp',
        element: <Team />,
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
