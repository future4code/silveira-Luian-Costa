import React from "react";
import { Header } from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const PostDetailsPage = () => {
    useProtectedPage()

    return (
        <div>
            <Header/>
            DETALHES DO POST
        </div>
    )
}