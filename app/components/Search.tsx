type Props = {}

export default function Search({}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row text-sm w-fit items-center">
        <input type="text" placeholder="Search Wikipedia" className="rounded p-2 outline-none w-56"/>
        <button className="bg-slate-600 text-white/90 px-4 py-2 rounded-md hover:bg-slate-700 w-32">Dump🚀</button>
    </div>
  )
}