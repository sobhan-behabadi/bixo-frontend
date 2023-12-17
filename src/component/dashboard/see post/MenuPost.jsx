import {useEffect, useState} from "react";


const MenuPost = ({data}) => {

    const [menu, setMenu] = useState([]);
    let menuList = [];

    useEffect(() => {

        data?.data.data.map((i) => {
            menuList.push(i.link);
        })

        //in 2 yek kar ra anjam midahad
        let uniqueValues = [...new Set(menuList)];
        // let resultArray = menuList.filter((value, index) => menuList.indexOf(value) === index);
        setMenu(uniqueValues)


    }, [])

    return (
        <div className={'my-4 p-3 shadow border-e-2 border-e-gray-400'}>
            <h5>Menu</h5>
            <ul className='flex-col justify-content-center align-items-center'>
                {
                    menu.map((i, index) => (
                        <li className={'cursor-pointer shadow p-2 text-center rounded-full my-2 hover:scale-95'} key={index}>{i}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuPost