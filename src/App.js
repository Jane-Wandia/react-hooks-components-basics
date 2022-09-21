import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
     <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  <div>Naturally, I agree with this article.</div>
  <Article/>
  <Comment/>
    </div>
  );
}

export default App;
