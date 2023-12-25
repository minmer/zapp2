import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    street: string;
}

const DataFetching: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>('https://probewebapp20231222201703.azurewebsites.net/api/minkol/list?id=1')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.street} > {post.street} </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DataFetching;