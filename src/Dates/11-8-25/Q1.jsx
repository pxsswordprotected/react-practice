import React, { useState } from "react";

const Q1 = ({ buttonLabel, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : buttonLabel}
      </button>
      {visible && <div>children</div>}
    </div>
  );
};

export default Q1;

// usage: <Togglable buttonLabel="Show All">
//   <UserProfile />
//   <NotesPanel />
//   <SettingsMenu />
// </Togglable>
