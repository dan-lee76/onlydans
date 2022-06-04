import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [mountedComponent, setMountedComponent] = useState(false);
    const [theme, setTheme] = useState('light');
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };
    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        localTheme ? setTheme(localTheme) : setMode(defaultDark ? 'dark' : 'light')
        setMountedComponent(true)
    }, []);
    return [theme, themeToggler, mountedComponent]
};