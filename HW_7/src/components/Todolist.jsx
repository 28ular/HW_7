import {useEffect, useState} from "react";
import {Todo_1} from "./Todo_1.jsx";
import axios from "axios";




export const Todo = () => {

    const [todos ,setTodos] = useState([]);

    const getAlltodo = async () => {
        try{
            const { data } = await axios.get('https://dummyjson.com/posts');
            setTodos(data?.posts ?? [])


            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    console.log(todos)

    useEffect(() => {
        getAlltodo()
    }, [ ])

    return (
        <div style={{ display: "flex", gap: "18px", flexDirection: "column" }}>
                {

                    todos.map((item , index)=>{
                        return <Todo_1
                            name={item?.title}
                            key={item.id}
                            id={item.id}
                            info={item.body}
                            tags={item.tags}
                            likes= {item.reactions.likes}
                            dislikes={item.reactions.dislikes}
                            views={item.views}
                            reposts={item.userId}
                        />
                    })

                }

        </div>
    )
}