import {Link} from "react-router-dom";

const PageNotFound = () => {



    return(
        <div className="text-center">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <p className="text-4xl font-medium text-gray-600 mb-8">Page Not Found</p>
            <Link to="/" className="text-lg text-blue-500 hover:underline text-decoration-none">Go back to the home page</Link>
        </div>
    )
}

export default PageNotFound;