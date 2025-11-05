import { lazy } from "react";

// Lazy load secondary pages
const EditorProfile = lazy(() => import("../pages/editor/EditorProfile"));

export const editorRoutes = [
    {
        path: '/editor',
        element: EditorProfile
    }
];
