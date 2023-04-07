'use client'
import Link from "next/link"

const ErrorSearch = ({error, reset}: {
    error: Error,
    reset: () => void
}) => {
  return (
    <div className="bg-white/90 font-poppins p-4 py-8 flex flex-col gap-8 justify-center items-center rounded shadow-md mx-auto my-8">
        <h2 className="text-4xl text-red-400 font-semibold">Something Went Wrong!!!</h2>

        <div className="flex gap-4 justify-around items-center">
            <button className="bg-red-400 rounded text-white p-2 px-4" onClick={() => reset()}>
                Try Again
            </button>
            <Link href='/' className="bg-gray-400 rounded text-white p-2 px-4">
                Go back to home
            </Link>
        </div>
    </div>
  )
}

export default ErrorSearch