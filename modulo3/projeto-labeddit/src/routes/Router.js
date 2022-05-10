import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PostDetailsPage } from "../pages/PostDetailsPage/PostDetailsPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<FeedPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/details/:id" element={<PostDetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
