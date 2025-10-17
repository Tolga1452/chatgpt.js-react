import { Container, createRoot as reactCreateRoot, Root } from 'react-dom/client';

export function createRoot(container: Container): Root {
    return reactCreateRoot(container);
};
