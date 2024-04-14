import { Link, useRouteError } from 'react-router-dom';

function CareersError() {
  const { message } = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
}

export default CareersError;
