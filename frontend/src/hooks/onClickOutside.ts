import React, { useEffect } from 'react';

/**
 * the function of registering clicks outside the element
 * @param ref element
 * @param handler
 */
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