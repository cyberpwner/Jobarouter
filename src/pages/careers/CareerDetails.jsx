import { useId } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

function CareerDetails() {
  const { id } = useParams();
  const { title, salary, location } = useLoaderData();
  const randomId = useId();

  return (
    <div className="career-details" id={`${randomId}${id}`}>
      <h2>Career details for: {title}</h2>
      <p>
        <em>Starting salary:</em> {salary}$ a year
      </p>
      <p>
        <em>Based in:</em> {location}
      </p>
      <div className="details">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aliquid
        distinctio quas dignissimos suscipit, beatae unde quidem expedita
        repellendus quasi possimus eum nobis ullam deleniti non eos quod quam
        sit veniam exercitationem commodi nisi debitis a impedit. Sit architecto
        ipsum laboriosam? Eos minima ab ipsum eum nesciunt sapiente voluptatum
        in. Quaerat distinctio quidem ullam nobis nemo quam doloribus dolore
        consectetur maiores neque, molestiae facilis asperiores.
      </div>
    </div>
  );
}

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);

  if (!response.ok) {
    throw new Error('Could not find that career');
  }

  return response.json();
};
