import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function About() {
  const [user, setUser] = useState('mario');

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="home">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
        assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
        officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde
        incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate
        iusto!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem,
        non odit saepe facere voluptas esse mollitia illo fuga exercitationem id
        dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem,
        non odit saepe facere voluptas esse mollitia illo fuga exercitationem id
        dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.
      </p>

      <button type="button" onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  );
}

export default About;
