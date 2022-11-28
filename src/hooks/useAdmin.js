import { useState } from "react";
import { useEffect } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loadingAdmin, setLoadingAdmin] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://recycle-zone-server-ten.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setLoadingAdmin(false);
                })
        }
    }, [email])
    return [isAdmin, loadingAdmin]
}

export default useAdmin;