import React, { useContext, useState} from 'react';
import noteContext from "../Context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"});
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    // value that is present in note should remain as it is but new value should be added into it
    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value})
    }
    return <div>
        <div className="container my-3">
            <h1>Add a note</h1>
            <form>
                <div class="mb-3">
                    <label htmlFor="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="description" class="form-label">Description</label>
                    <input type="text" class="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div class="mb-3">
                    <label htmlFor="tag" class="form-label">Tag</label>
                    <input type="text" class="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    </div>;
};

export default AddNote;
