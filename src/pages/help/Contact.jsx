import { Form, redirect, useActionData } from 'react-router-dom';

function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST" action="/help/contact">
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="email" name="email" id="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" id="message" required />
        </label>
        <button type="submit">Submit</button>

        {data && data.error && <small className="error">{data.error}</small>}
      </Form>
    </div>
  );
}

export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  };

  if (submission.message.trim().length < 10) {
    return {
      error: 'Message must have at least 10 characters',
    };
  }

  return redirect('/');
};
