import { useState } from "react";

const Create = () => {
    const[title, setTtile] = useState('')
    const[body, setBody] = useState('')
    const[author, setAuthor] = useState('mario')
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <from>
                <label>Blog Titile:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTtile(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='mario'>mario</option>
                    <option value='yashi'>yashi</option>
                </select>
                <button>Add Blog</button>
            </from>
        </div>
     );
}
 
export default Create;