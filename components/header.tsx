import Link from "next/link"

const header = () => {
  return (
<header>
    <div className="w-full h-20 border-b-2 flex justify-around items-end mb-3 bg-white max-sm:h-auto max-sm:px-5">

        <div className="h-1/2 w-full flex justify-around items-center mb-2 max-sm:flex-col max-sm:gap-3">
            <Link href={'/'}><h1 className="text-2xl font-bold">HamadBlogs</h1></Link>

            <div className="flex gap-10 max-sm:justify-center max-sm:gap-3 max-sm:flex-wrap max-sm:items-center">
              <p className="font-bold">Features</p>
              <p className="font-bold">FAQ</p>
              <p className="font-bold">Open Source</p>
              <p className="font-bold">Affiliates</p>
              <p className="font-bold">Pricing</p>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex w-56 h-8 bg-gray-50 items-center">
                <input 
                    type="search"
                    name='search'
                    id="search"
                    placeholder="What are you looking for?"
                    className="w-full border-none bg-transparent px-4 py-1 text-xs text-gray-900 outline-none"
                />
                    <button className="m-2 rounded fill-black">Go</button>
                </div>
            </div>
            
        </div>
    </div>
</header>
  )
}

export default header