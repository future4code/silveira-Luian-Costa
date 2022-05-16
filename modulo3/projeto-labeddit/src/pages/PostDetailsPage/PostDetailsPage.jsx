import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardComment } from "../../components/CardComment/CardComment";
import { CardPost } from "../../components/CardPost/CardPost";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";

export const PostDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const params = useParams()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const selectedPost = posts.map((post) => {
        if (post.id === params.id) {
            return (
                <CardPost
                    key={post.id}
                    usename={post.username}
                    id={post.id}
                    body={post.body}
                    title={post.title}

                />
            )
        }
    })

    const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const comments = postComments.map((comment) => {
        return (
            <CardComment
                key={comment.id}
                username={comment.username}
                body={comment.body}
            />
        )
    })

    return (
        <div>
            <Header />
            {selectedPost}
            {comments}
        </div>
    )
}