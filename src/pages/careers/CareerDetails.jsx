import { useParams, useLoaderData } from 'react-router-dom';

function CareerDetails() {
  const { id } = useParams();
  const { title, salary, location } = useLoaderData();

  return (
    <div className="career-details">
      <h2>
        Career Details for <span className="job-title">{title}</span>:
      </h2>
      <p>
        <strong>Starting Salary:</strong> {salary}$ a year
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <h3>Details:</h3>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        dolore non sapiente, quo ullam doloribus neque quibusdam, nostrum
        accusamus iure optio sint vel odit earum ab magni quod. Possimus aliquam
        atque eaque quasi, pariatur laborum tempore labore tenetur
        exercitationem aliquid necessitatibus veritatis numquam blanditiis quo,
        corrupti, hic ipsam perferendis neque nemo? Alias consequatur, dolorem
        cumque fuga facere iste numquam veniam vel quidem soluta nobis dicta.
      </div>
    </div>
  );
}

export default CareerDetails;

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);

  if (!response.ok) {
    throw new Error('Could not find that career.');
  }

  return response.json();
};
