import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ping } from '../features/auth/authSlice';

export function Home() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Home</h1>
          {authState.status === 'loading' && (
            <div className="alert alert-info">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
