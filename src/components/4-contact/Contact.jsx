import "./contact.css";
export default function Contact() {
  return (
    <section className="contact">
      <h1>
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p>Contact us for more information and Get notified when I publish something new.</p>
      <div className="flex">
        <form>
          <div className="form-control flex">
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-control flex">
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" id="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="animation border">animation</div>
      </div>
    </section>
  );
}
