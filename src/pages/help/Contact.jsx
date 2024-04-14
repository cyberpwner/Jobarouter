function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="email" name="email" id="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" id="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
