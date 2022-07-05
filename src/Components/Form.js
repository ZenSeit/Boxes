import "../Stylesheet/form.css";

export default function Form(props) {
  return (
    <div className="form--container">
      <form onSubmit={props.trigger}>
        <div className="form--info">
          <input
            placeholder="Type a word"
            name="word"
            onChange={props.handleChange}
            value={props.valIn}
            className="input--word"
          />
        </div>

        <button className="button--play">Play</button>
      </form>
    </div>
  );
}
