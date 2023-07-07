import { useForm, ValidationError } from "@formspree/react";
import "./Form.css";
export default function Form() {
  const [state, handleSubmit] = useForm("xwkzdzlp");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="contact__form">
        <div className="form__field">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form__field">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form__field">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="form__field">
          <button
            className="submit__btn"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </div>
      </div>
    </form>
  );
}
