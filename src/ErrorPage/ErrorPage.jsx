import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section>
            <h1 className='text-7xl font-bold flex h-[calc(100vh-100px)] items-center justify-center text-gray-300 text-center'>Oops!!! Page Not Found</h1>
            <div className="flex justify-center">
                <Link to="/" className="p-4 rounded bg-gray-400 text-white font-bold m-4">Back to Home</Link>
            </div>
        </section>
    );
};

export default ErrorPage;