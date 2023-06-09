import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../greetingSlice';

function Greeting() {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.greeting.greeting);
  const loading = useSelector((state) => state.greeting.loading);
  const error = useSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div id="ct">
      <div className="corner" id="left_top" />
      <div className="corner" id="left_bottom" />
      <div className="corner" id="right_top" />
      <div className="corner" id="right_bottom" />
      <span>Random Greeting</span>
      <blockquote>
        <p>
          <i>
            &ldquo;
            {greeting}
            &rdquo;
          </i>
        </p>
      </blockquote>
    </div>
  );
}

export default Greeting;
