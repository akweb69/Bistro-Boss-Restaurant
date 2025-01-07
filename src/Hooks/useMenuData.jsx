import axios from "axios";
import { useEffect, useState } from "react";

const useMenuData = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const data = res.data;
                console.log(data)
                setMenu(data)
            })
    }, [])
    return menu

};

export default useMenuData;