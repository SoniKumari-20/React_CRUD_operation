import React from "react";
function Forms({title, settitle, desc,setdesc,notes,setnotes}) {

    // getting the values of input boxes
    const inputHandler = (e) => {
        if (e.target.id === "title") {
            settitle(e.target.value)
        }
        else {
            setdesc(e.target.value)
        }
    }

    // geetting the values in whole Array
    const addnotesHandler = (e) => {
        e.preventDefault();
        if(title!=="" && desc!==""){
        setnotes((note) => {
            return (
                [...note, {
                    Title: title,
                    desc: desc,
                    id: new Date().getTime()
                }]
            )
        })
       setdesc(" ")
       settitle(" ")
    }
}
    return (
        <>
        {/* Here form created */}

            <div className="  container mt-3">
                <div className="row  justify-content-center">
                    <div className="col-md-8">
                        <form style={{ border: '1px solid black', borderRadius: '10px', padding: '30px' }} >

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label"><h5>Title</h5></label>
                                <input type="text" className="form-control "  id="title" placeholder="enter the title"   onChange={inputHandler} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label" ><h5>Description</h5></label>
                                <textarea className="form-control" id="desc" rows="3"  placeholder="enter your text"  onChange={inputHandler}></textarea>
                            </div>
                            <button className="btn btn-primary" onClick={addnotesHandler}>Add Notes </button>
                        </form>
                    </div>
                </div>
            
            </div>
            
        </>
    )
}

export default Forms;