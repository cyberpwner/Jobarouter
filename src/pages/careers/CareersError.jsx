import { useRouteError, Link } from 'react-router-dom';

function CareersError() {
  const { message } = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{message}.</p>
      <p>
        Back to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

export default CareersError;
