import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const PostDetailsPage = () => {
    useProtectedPage()

    return (
        <div>
            DETALHES DO POST
        </div>
    )
}