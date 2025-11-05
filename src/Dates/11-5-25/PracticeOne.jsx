import { useState } from "react";

const PracticeOne = () => {
  const [likes, setLikes] = useState(0);

  return (
    <>
      {likes >= 10 ? (
        <button onClick={() => setLikes(likes + 1)}>Love</button>
      ) : (
        <button onClick={() => setLikes(likes + 1)}>Like</button>
      )}

      <p>{likes}</p>
    </>
  );
};

export default PracticeOne;

// Build a component called LikeButton that:

//     Tracks the number of likes (starts at 0)

//     Has a button labeled "❤️ Like" that increments the count by 1

//     Displays the current count next to the button

//     When the count reaches 10, change the button text to "❤️ Love" (but it still increments by 1 each click)
