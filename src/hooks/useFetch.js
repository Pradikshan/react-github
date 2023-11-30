import { useState, useEffect } from "react";

export function useFetch(uri) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        if (!uri) {
            return console.log("Incorrect URL");
        }

        fetch(uri)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [])  

    return { loading, data, error };
};