import { useState } from "react";
import { useEffect } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [loadingSeller, setLoadingSeller] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://recycle-zone-server-ten.vercel.app/users/seller/${email}`)
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