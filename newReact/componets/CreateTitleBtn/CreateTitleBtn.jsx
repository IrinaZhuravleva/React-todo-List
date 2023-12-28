import axios from 'axios';

export const CreateTitleBtn = () => {

    // в UseEffect вписать сначала

    // 1
    const createTitle = async (setPost, post) => {
        try {
            const response = await axios.post('https://todoapiexample-production.up.railway.app/todo_lists',
                {
                    title: post
                });
            setPost({ title: response.data.title, id: response.data.id });
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    // 2 вызвать ее
    createTitle();

    // 3. 

    return (<button onClick={() => {
            // if (post.length < 5) {
            //     return (
            //         <span>Title length should be more than 5 symbols</span>
            //     )
            // } else {
            createTitle(setPost, newTitle)
            // }
        }}>
        Create New Title</button>
    ) 
}
