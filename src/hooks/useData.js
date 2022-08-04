import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState();

    useEffect( () => {
        setData([
            {
                id: 1,
                content: 'Feed the cat',
                completed: false,
            },
            {
                id: 2,
                content: 'Make lunch',
                completed: false,
            },
            {
                id: 4,
                content: 'Go to the library',
                completed: false,
            },
            {
                id: 3,
                content: 'Read 5 pages',
                completed: true,
            },
            {
                id: 5,
                content: 'Sleep early',
                completed: false,
            },
        ]);
    }, []);

    useEffect(() => console.log(data), [data]);

    return {
        data,
        setData
    };
}
 
export default useFetch;