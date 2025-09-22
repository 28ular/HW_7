import { useState } from "react";
import axios from "axios";

export const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !body) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        setLoading(true);
        try {
            const { data } = await axios.post("https://dummyjson.com/posts/add", {
                title,
                body,
                userId: 1,
            });
            console.log("POST response:", data);
            alert("Пост создан!");
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error:", error);
            alert("Ошибка при создании поста");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "20px auto" }}>
            <div style={{ marginBottom: 10 }}>
                <label htmlFor="title" style={{ display: "block", marginBottom: 5 }}>
                    Заголовок:
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", padding: 8 }}
                    placeholder="Введите заголовок"
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <label htmlFor="body" style={{ display: "block", marginBottom: 5 }}>
                    Текст поста:
                </label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{ width: "100%", padding: 8 }}
                    placeholder="Введите текст поста"
                />
            </div>

            <button type="submit" disabled={loading} style={{ padding: "8px 16px" }}>
                {loading ? "Создание..." : "Создать пост"}
            </button>
        </form>
    );
};
