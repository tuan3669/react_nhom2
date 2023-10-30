import React, { useState } from 'react';

export default function Login() {
  const [username, setUserName] =
    useState('');
  const [password, setPassword] =
    useState('');
  const [role, setRole] =
    useState(false);
  const [isLogin, setIsLogin] =
    useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    console.log(
      'click dang nhap ',
      isLogin
    );
    console.log(
      'username : ',
      username
    );
    console.log(
      'password : ',
      password
    );
    console.log('role : ', role);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handelSubmit}>
        <div className='form-group'>
          <label htmlFor=''>
            Tài khoản
          </label>
          <input
            type='text'
            onChange={(e) =>
              setUserName(
                e.target.value
              )
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>
            mật khẩu
          </label>
          <input
            type='password'
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='#role'>
            admin
          </label>
          <input
            id='role'
            type='checkbox'
            onChange={(e) => {
              setRole(
                (prevState) =>
                  !prevState
              );
            }}
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
}
