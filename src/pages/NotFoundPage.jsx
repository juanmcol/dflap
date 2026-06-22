import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
      <>
        <h1>404 Not Found</h1>
        <Link to="/">Click to navigate to the DFlap App</Link>
      </>
  )
}

export default NotFoundPage;