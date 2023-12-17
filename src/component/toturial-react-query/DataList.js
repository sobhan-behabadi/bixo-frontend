import {useQuery} from "@tanstack/react-query";
import usePost from "../../customHooks/usePost";


const DataList = () => {

   // const {data, isPending} = usePost()


    // if (isPending){
    //     return  <h1>loading-erorr-and</h1>
    // }
    return (
        <div>
            {/*<ul>*/}
            {/*    {data.data?.map(e => <li>{e.symbol}</li>)}*/}
            {/*</ul>*/}
        </div>


    )

}

export default DataList;