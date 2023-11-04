import './App.css';
// import Information from './containers/Information';
// import Menu from './containers/Menu';
// import Button from './containers/Button';
// import Login from './containers/Login';
import ProductApp from './containers/ProductApp';
import { Outlet } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Todos from './containers/Todos';
import { ContextProvider } from './containers/Context';
import TestContext from './containers/TestContext';
import Button from './containers/Button';
function App() {
  const user = {
    username: 'Huynh Anh Tuan',
    address: 'Vinh Long',
    age: 22,
  };
  const isLogin = true;
  return (
    <ContextProvider>
      <div className='App'>
        {/* {isLogin ? (
        <Information user={user} />
      ) : (
        <p>Chưa đăng nhập</p>
      )}

      <Menu />
      <Login />
      <br></br>
    */}
        <Button user={user} />

        {/* Dựng lại bài toán ProductApp theo
      useReducer ở slide 95 */}
        <ProductApp />

        {/* Dựng lại bài toán AddTodo theo
      useReducer ở slide 90 */}
        <Todos />
        <div className='container'>
          <div className='header'>
            {' '}
            <Header />
          </div>

          <TestContext />
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
    </ContextProvider>
  );
}

export default App;
