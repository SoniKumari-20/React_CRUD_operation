import React from "react";
export default function Modals({ notes, setnotes, editid }) {
    const updateHandler = () => {


        //here modals dialog box value will be changed and also shown in DOM
        const updatenotes = notes.map((elem) => {
            if (editid === elem.id) {
                return ({
                    ...elem, Title: document.getElementById("edittitle").value,
                    desc: document.getElementById("editdesc").value
                })
            } else {
                return elem;
            }
        })
        setnotes(updatenotes)
    }
    return (
        <>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <form style={{ border: '1px solid black', borderRadius: '10px', padding: '30px' }} >

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1">Title</label>
                                    <input type="text" className="form-control " id="edittitle" placeholder="enter the title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" name='desc' id="editdesc" rows="3" placeholder="enter your text"></textarea>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Notes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
