import React from "react";
import { Header } from "../../components/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const FeedPage = () => {
    useProtectedPage()

    return (
        <div>
            <Header />
            PAGINA DO FEED
        </div>
    )
}