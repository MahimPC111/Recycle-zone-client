import { useState } from "react";
import { useEffect } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loadingAdmin, setLoadingAdmin] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
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