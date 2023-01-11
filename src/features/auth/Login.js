import { useDispatch, useSelector } from 'react-redux';
import { login } from './authSlice';

export function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(login({ email, password }));
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form className="p-4 my-4 w-50" onSubmit={onSubmitHandler}>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" id="email" />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" id="password" />
        </div>
        <div className="my-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Login
            {authState.status === 'loading' && (
              <span
                className="spinner-border spinner-border-sm ms-2"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
