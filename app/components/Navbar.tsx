import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="bg-slate-600 text-white/90 flex flex-col justify-around items-center md:items-center md:flex-row gap-4 sticky top-0 drop-shadow-lg p-4 py-8 font-poppins">
      <Link href="/" className="font-bold text-3xl hover:text-white">Wiki Yard</Link>
      <div className="flex gap-8 justify-center">
        <Link href="/about" className="font-semibold text-xl hover:text-white">About</Link>
        <Link href="/contact" className="font-semibold text-xl hover:text-white">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar