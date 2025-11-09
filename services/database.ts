import { User } from '../types';

// NOTE FOR DEVELOPER:
// This file simulates a database connection for the Samathuva Kalvi application.
// In a real-world scenario, you would replace the localStorage logic here
// with API calls to a secure backend that connects to a database like MongoDB.
// The instructions provided for Next.js/Vercel are for a full-stack setup
// which is not possible in this frontend-only environment.
// This abstraction makes it easy to switch to a real backend in the future.

const USERS_STORAGE_KEY = 'samathuvaKalviUsers';
const SESSION_STORAGE_KEY = 'samathuvaKalviUser';

// --- User Management (simulating a 'users' collection) ---

export const getUsers = (): (User & { password?: string })[] => {
    try {
        const usersString = localStorage.getItem(USERS_STORAGE_KEY);
        return usersString ? JSON.parse(usersString) : [];
    } catch (error) {
        console.error("Failed to parse users from localStorage", error);
        return [];
    }
};

export const saveUsers = (users: (User & { password?: string })[]): void => {
    try {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
        console.error("Failed to save users to localStorage", error);
    }
};

// --- Session Management ---

export const getSession = (): User | null => {
    try {
        const storedUser = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (storedUser) {
            return JSON.parse(storedUser) as User;
        }
        return null;
    } catch (error) {
        console.error("Failed to parse session from sessionStorage", error);
        return null;
    }
};

export const setSession = (user: User): void => {
    try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
        console.error("Failed to save session to sessionStorage", error);
    }
};

export const clearSession = (): void => {
    try {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (error) {
        console.error("Failed to clear session from sessionStorage", error);
    }
};
