
import {create} from 'zustand';

interface ColorModeState {
  theme: boolean;
  toggleTheme: () => void;
}

const useColorModeStore = create<ColorModeState>((set) => ({
  theme: localStorage.getItem('theme') === 'dark', 

  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.theme;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newTheme); 
      return { theme: newTheme };
    }),
}));

export default useColorModeStore;
