import React, { useEffect } from 'react';


const useOnClickOutside = (ref: React.RefObject<any>, handler: () => void) => {
    useEffect(() => {
        const listener = (event: TouchEvent | MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;