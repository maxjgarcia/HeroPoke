import { useState } from "react";


const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        { isOpen, toggleSection }
    )
}

export default useToggle