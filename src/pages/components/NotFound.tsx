import { Link } from "react-router-dom";

type NotFoundProps = {
  message?: string;
};

export default function NotFound({ message }: NotFoundProps) {
  return (
    <div className="bg-gray-100 w-full px-6 md:px-0 min-h-[70vh] flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center px-6 md:px-10 lg:px-16 py-10 rounded-lg shadow-xl text-center">
        <p className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-300">404</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-gray-600 mt-3">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-5 border-b w-full">
          {message ?? "The page you are looking for doesn’t exist."}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-6 rounded transition"
          title="Return Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Kezdőlap</span>
        </Link>
      </div>
    </div>
  );
}