import React from "react";
export function Cards({ item, notes, setnotes, setEditid }) {

    // removing task is completed  
    const removeHandler = (id) => {
        const NewNotes = notes.filter((elm) => {
            if (elm.id !== id) {
                return elm;
            }
        })
        setnotes(NewNotes)
    }

     //editing new words in form 
    const editHandler = (id) => {
        setEditid(id)
        notes.filter((elem) => {
            if(elem.id===id){
                document.getElementById("edittitle").value = elem.Title;
                document.getElementById("editdesc").value = elem.desc;
            }
        })
        
    }
    return (
        

        //card after the element is added
        <><div className="card mb-3  " style={{border:"2px solid black" , borderRadius:"10px"}}>
            <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">{item.desc}</p>
                <button type="button" className="btn btn-primary mr-15" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                    editHandler(item.id)
                }}>
                    Edit
                </button>
                <button className="btn btn-danger mx-3" onClick={() => {
                    removeHandler(item.id)
                }}>Remove</button>
            </div>
        </div>
        </>
    )
}