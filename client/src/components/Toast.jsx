import { useEffect } from "react";

function Toast({ message, type = "success", onClose }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // auto close after 3s

        // clean-up function
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast ${type}`}>
            <p>{message}</p>
        </div>
    );
}

export default Toast;