import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPost } from "../../components/CardPost/CardPost";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPostDetailsPage } from "../../routes/Coordinator";

export const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate();

    const onClickCard = (id) => {
        goToPostDetailsPage(navigate, id)
    }

    const postsCards = posts && posts.map((post) => {
        return (
            <CardPost
                key={post.id}
                id={post.id}
                username={post.username}
                title={post.title}
                image={post.image}
                body={post.body}
                onClick={() => onClickCard(post.id)}
            />
        )
    })

    return (
        <div>
            <Header />
            {postsCards}
        </div>
    )
}