import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Q5Router = () => {
  const posts = [
    { id: 1, title: "React is cool" },
    { id: 2, title: "Tailwind is fast" },
    { id: 3, title: "Redux is powerful" },
  ];

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Q5Router;

/*
Your Task: Create a mini navigation system for a blog.

    Setup: Wrap the app in BrowserRouter.

    Route 1 (/): A "Post List" component.

        Hardcode an array of 3 posts: [{id: 1, title: "React is cool"}, {id: 2, title: "Tailwind is fast"}].

        Render them as a list of clickable Links.

        The Link must go to /posts/:id.

    Route 2 (/posts/:id): A "Post Detail" component.

        Use the useParams hook to grab the id from the URL.

        Display "Viewing Post ID: [the id]" in large text (text-2xl font-bold).

    Layout: Create a persistent Navbar at the top (always visible) with a link back to "Home".
*/
