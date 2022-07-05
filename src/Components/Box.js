import '../Stylesheet/box.css'


export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
    border: "1px solid black",
    textAlign: "center",
    color: "white",
  };

  return (
    
      <div
        className="box"
        style={styles}
        onClick={() => props.clicked(props.id)}
      >
        <h1>{props.letter}</h1>
      </div>
  );
}
