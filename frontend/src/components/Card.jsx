import { Search } from "lucide-react";


function Cards() {
    return (
        <nav className="flex flex-col item-center p-4 border-2 border-gray-200 rounded-lg w-49 ">
            <h className="flex flex-col p-2 ">Search for items</h>
            <input className="flex flex-col border-2 border-gray-200 rounded-lg w-64 p-2 text-3" text="search" placeHolder="search the item"  ><Search /></input>
        </nav>
    )
}

export default Cards;