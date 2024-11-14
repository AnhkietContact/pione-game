// pages/404.js
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* Hình ảnh 404 */}
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/404.png"
            alt="404 Not Found"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-500 mt-2">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <a className="inline-block mt-6 px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
            Go back to homepage
          </a>
        </Link>
      </div>
    </div>
  );
}
