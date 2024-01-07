import axios from 'axios';

export const createTitle = async (setPost, post) => {
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

export const getLists = async () => {
    try {
        const response = await axios.get('https://todoapiexample-production.up.railway.app/todo_lists');
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
};
