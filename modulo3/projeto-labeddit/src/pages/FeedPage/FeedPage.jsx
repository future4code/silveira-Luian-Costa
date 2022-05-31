import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPost } from "../../components/CardPost/CardPost";
import { Header } from "../../components/Header/Header";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { createPost } from "../../services/posts";
import { goToPostDetailsPage } from "../../routes/Coordinator";
import { DivForm, Form } from "./styled";


export const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({ title: "", body: "" });

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

    const onSubmitForm = (event) => {
        event.preventDefault();
        createPost(form, cleanFields)
    }

    return (
        <div>
            <Header />
            <DivForm>
                <Form onSubmit={onSubmitForm} >
                    <input
                        placeholder='Titulo do Post'
                        name="title"
                        // value={form.title}
                        onChange={onChange}
                    />
                    <textarea
                        placeholder='Digite aqui...'
                        name="body"
                        // value={form.body}
                        onChange={onChange}
                    />
                    <button>Postar</button>
                </Form>
            </DivForm>
            {postsCards}
        </div>
    )
}