import { useDispatch } from 'react-redux';
import { register } from './authSlice';

export function Register() {
  const dispatch = useDispatch();
  // const authState = useSelector((state) => state.auth);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.register_email.value;
    const password = e.target.register_password.value;
    const username = 'user';
    dispatch(register({ email, password, username}));
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form className="p-4 my-4 w-50" onSubmit={onSubmitHandler}>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" id="register_email" />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" id="register_password" />
        </div>
        <div className="my-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
