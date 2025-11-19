import { useEffect, useState } from "react";

const Q4UseEffect = () => {
  
  return;
}

export default Q4UseEffect;





/*
Your Task: Create a component called UserGallery.

    State: Initialize state for users (empty array) and loading (boolean true).

    Effect: On mount (only once), use axios.get (or fetch) to get data from https://jsonplaceholder.typicode.com/users.

    Logic:

        Wait for the data.

        Update the users state with the result.

        Set loading to false.

    UI:

        If loading is true, display a centered text saying "Loading..." with Tailwind animate-pulse.

        If loaded, display the users.

        Responsive Constraint: On mobile, show 1 column. On small tablets (sm), 2 columns. On laptops (md), 3 columns.
*/