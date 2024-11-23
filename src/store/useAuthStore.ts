import { create } from 'zustand';
import { getAuth, onAuthStateChanged, User, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseApp } from '../config/firebase';

const auth = getAuth(firebaseApp);

type AuthState = {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
};

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    error: null,
    login: async (email, password) => {
        try {
            set({ loading: true, error: null });
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user, loading: false });
        } catch (err: unknown) {
            if (err instanceof Error) {
                set({ error: err.message });
            } else {
                set({ error: String(err) });
            }
            set({ loading: false });
        }
    },
    logout: async () => {
        try {
            set({ loading: true, error: null });
            await signOut(auth);
            set({ user: null, loading: false });
        } catch (err: unknown) {
            if (err instanceof Error) {
                set({ error: err.message });
            }
            set({ loading: false });
        }
    },
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));

onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user);
    useAuthStore.getState().setLoading(false);
});

export default useAuthStore;