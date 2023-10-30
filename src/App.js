import './App.css';
// import Information from './containers/Information';
// import Menu from './containers/Menu';
// import Button from './containers/Button';
// import Login from './containers/Login';
// import ProductApp from './containers/ProductApp';
import { Outlet } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
function App() {
  const user = {
    username: 'Huynh Anh Tuan',
    address: 'Vinh Long',
    age: 22,
  };
  const isLogin = true;
  return (
    <div className='App'>
      {/* {isLogin ? (
        <Information user={user} />
      ) : (
        <p>Chưa đăng nhập</p>
      )}

      <Menu />
      <Button user />
      <Login />
      <br></br>
      <ProductApp /> */}
      <div className='container'>
        <div className='header'>
          {' '}
          <Header />
        </div>
        <div className='outlet'>
          {' '}
          <Outlet />
        </div>
        <div className='footer'>
          {' '}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
