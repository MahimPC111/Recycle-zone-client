import { useState } from "react";
import { useEffect } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [loadingSeller, setLoadingSeller] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setLoadingSeller(false);
                })
        }
    }, [email])
    return [isSeller, loadingSeller]
}

export default useSeller;