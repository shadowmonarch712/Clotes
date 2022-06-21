// import React, { useContext } from 'react';
// import noteContext from "../Context/notes/noteContext"

// const NoteItem = (props) => {
//     const context = useContext(noteContext);
//     const { deleteNote} = context;
//     const { note, updateNote } = props;
//     const onClick = () => {
//         deleteNote(note._id)
//     }
//     return <div className="col-md-3">
//         {/* {note.title}
//         {note.description} */}
//         <div class="card my-3">
//             <div class="card-body">
//                 <div className="d-flex align-items-center">
//                 <h5 class="card-title">{note.title}</h5>
//                     <i class="fas fa-trash-alt mx-2" onClick={onClick}></i>
//                     <i class="fas fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
//                 </div>
//                 <p class="card-text">{note.description}</p>
//                 </div>
//         </div>
//     </div>;
// };

// export default NoteItem;
import React, {useContext} from 'react'
import noteContext from "../Context/notes/noteContext"


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem
