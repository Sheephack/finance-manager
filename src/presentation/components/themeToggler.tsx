import { useStore } from '../../store/useStore';

const ThemeToggler = () => {
    const { theme, setTheme } = useStore();

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 bg-blue-500 text-white"
        >
            Toggle Theme (current: {theme})
        </button>
    );
}

export default ThemeToggler;