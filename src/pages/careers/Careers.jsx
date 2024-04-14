import { useLoaderData, Link } from 'react-router-dom';

function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map(({ id, title, location }) => (
        <Link to={id} key={id}>
          <p>{title}</p>
          <p>Based in {location}</p>
        </Link>
      ))}
    </div>
  );
}

export default Careers;

// loader function

export const careersLoader = async () => {
  const response = await fetch('http://localhost:4000/careers');

  if (!response.ok) {
    throw new Error('Could not fetch the careers');
  }

  // no need to await it, the loader resolves it
  return response.json();
};
