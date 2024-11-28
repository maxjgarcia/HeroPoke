import { useEffect, useRef, useState } from "react";

const useScroll = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const contentRef = useRef(null);

    // Scroll to top of the contentRef element
    const handleScrollTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Handle scroll event to toggle visibility of "Back to Top" button
    const handleScroll = () => {
        if (window.scrollY > 1500) {  // Adjust scroll threshold as needed
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Only run once when the component mounts

    return { showBackToTop, handleScrollTop, contentRef };
}

export default useScroll;
