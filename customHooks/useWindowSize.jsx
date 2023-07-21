import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        setIsMobileScreen(window.innerWidth <= 600)
        setIsMediumScreen(window.innerWidth > 768 && window.innerWidth <= 1024)
        setIsLargeScreen(window.innerWidth > 1024)
    }, []);

    return { isMobileScreen, isMediumScreen, isLargeScreen };
}

export default useWindowSize