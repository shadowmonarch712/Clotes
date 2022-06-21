import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYTkyNDgyYjE5ZjE4OTliY2VmZGY5In0sImlhdCI6MTY0Mjc2Mjg3MH0.Ertxp0oV_9cV_eij6qvh0X03X7NjhCyVHHqNGcNc6YU"
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYTkyNDgyYjE5ZjE4OTliY2VmZGY5In0sImlhdCI6MTY0Mjc2Mjg3MH0.Ertxp0oV_9cV_eij6qvh0X03X7NjhCyVHHqNGcNc6YU"
            },
            body: JSON.stringify({ title, description, tag })
        });


        console.log("Adding a new note")
        const note = {
            "_id": "61eab201c2a4f462b3b4070a6",
            "user": "61ea92482b19f1899bcefdf9",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-21T13:15:45.382Z",
            "__v": 0
        }
        // here concat updates an array
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // TODO: API Call
        
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYTkyNDgyYjE5ZjE4OTliY2VmZGY5In0sImlhdCI6MTY0Mjc2Mjg3MH0.Ertxp0oV_9cV_eij6qvh0X03X7NjhCyVHHqNGcNc6YU"
            },
        });
        const json = response.json();
        console.log(json);
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYTkyNDgyYjE5ZjE4OTliY2VmZGY5In0sImlhdCI6MTY0Mjc2Mjg3MH0.Ertxp0oV_9cV_eij6qvh0X03X7NjhCyVHHqNGcNc6YU"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;