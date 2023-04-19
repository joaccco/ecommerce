import { Searcher } from "./Searcher";
import { Pagination } from "./Pagination";

export default function productsLayout ({children}) {
    return (
        <div>
           <Searcher/>
            {children}
            <Pagination/>
        </div>
    )
}