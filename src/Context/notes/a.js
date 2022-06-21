// import { useState } from "react";
// import NoteContext from "./noteContext";

// const NoteState = (props) => {
//     const notesInitial =
//         [
//             {
//                 "_id": "61eab1c8c2a4f462b3b40704",
//                 "user": "61ea92482b19f1899bcefdf9",
//                 "title": "My Title updated",
//                 "description": "My Description updated",
//                 "tag": "development",
//                 "date": "2022-01-21T13:14:48.742Z",
//                 "__v": 0
//             },
//             {
//                 "_id": "61eab201c2a4f462b3b40706",
//                 "user": "61ea92482b19f1899bcefdf9",
//                 "title": "My Title",
//                 "description": "My Description",
//                 "tag": "development",
//                 "date": "2022-01-21T13:15:45.382Z",
//                 "__v": 0
//             }
//         ]
//     const [notes, setNotes] = useState(notesInitial);

//     // Add a Note
//     const addNote = (title, description, tag) => {
//         const note = {
//             "_id": "61eab201c2a4f462b3b4070a6",
//             "user": "61ea92482b19f1899bcefdf9",
//             "title": title,
//             "description": description,
//             "tag": tag,
//             "date": "2022-01-21T13:15:45.382Z",
//             "__v": 0
//         }
//         // here concat updates an array
//         setNotes(notes.concat((note)))
//     }
//     // delete a Note
//     const deleteNote = (id) => {
//         const newNotes= notes.filter((note)=>{return note._id!==id})
//         setNotes(newNotes)
//     }
//     // Edit a note
//     const editNote = () => {

//     }
//     return (
//         <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }
// export default NoteState;   