import fscreen from 'fscreen';
import React from 'react';

const FullscreenContext = React.createContext({});

export function useFullscreen() {
    return React.useContext(FullscreenContext);
}


export const FullscreenProvider = ({ children }: any) => {
    const fullscreenRef = React.useRef<any>();
    const [active, setActive] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleChange = () => {
            setActive(fscreen.fullscreenElement === fullscreenRef.current);
        };
        fscreen.addEventListener('fullscreenchange', handleChange);
        return () =>
            fscreen.removeEventListener('fullscreenchange', handleChange);
    }, []);

    const enterFullscreen = React.useCallback(async () => {
        if (fscreen.fullscreenElement) {
            await fscreen.exitFullscreen();
        }
        return fscreen.requestFullscreen(fullscreenRef.current);
    }, []);

    const exitFullscreen = React.useCallback<any>(async () => {
        if (fscreen.fullscreenElement === fullscreenRef.current) {
            return fscreen.exitFullscreen();
        }
    }, []);

    const context = React.useMemo(() => {
        return {
            fullscreenRef,
            fullscreenEnabled: fscreen.fullscreenEnabled,
            fullscreenActive: active,
            enterFullscreen,
            exitFullscreen,
        };
    }, [active, enterFullscreen, exitFullscreen]);

    return (
        <FullscreenContext.Provider value={context}>
            {children}
        </FullscreenContext.Provider>
    );
};