import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "🥰": "Smiling Face with Hearts",
  "😃": "Smiley",
  "❤️": "Red Heart",
  "🥺": "Pleading Face",
  "👍": "Thumbs Up",
  "💓": "Beating Heart",
  "🔕": "Bell With Slash",
  "🎃": "Hallowen",
  "😈": "Smiling With Horns",
  "🚩": "Triangular Flag"
};
var emojisWeKnow = Object.keys(emojiDictionary);
//it converts the object into list or array
//prompt("enter your name");

export default function App() {
  const [meaning, setMeaning] = useState(0);

  function emojiInputHandler(event) {
    var userInputEmoji = event.target.value;
    var meaning = emojiDictionary[userInputEmoji];
    if (meaning === undefined) {
      meaning = "we dont have this emeoji in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <input
        placeholder="Enter Your Emoji !"
        style={{
          fontFamily: "sans-serif",
          fontSize: "larger",
          marginTop: "1rem",
          textAlign: "center",
          width: "40%",
          padding: "1rem"
        }}
        onChange={emojiInputHandler}
      ></input>
      <div style={{ fontSize: "larger", fontWeight: "bold", margin: "0.5rem" }}>
        {meaning}
      </div>
      <h3 style={{ marginBottom: "1rem", color: "blue" }}>Emojis We Know !</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
