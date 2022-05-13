import React from "react";
import { CardPost } from "../../components/CardPost/CardPost";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";

export const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)

    const postsCards = posts && posts.map((post) => {
        return (
            <CardPost
                key={post.id}
                title={post.title}
                image={post.image}
                body={post.body}
                onClick={() => null}
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