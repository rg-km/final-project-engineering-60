import React from "react";

const createArticle = () => {
    return(
        <div className="container">
            <form>
                <div class="mb-3" style={{marginTop:"50px", boxShadow:"2px 2px #bdbdbd"}}>
                    <input type="text" placeholder="Judul" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="mb-3" style={{ boxShadow:"2px 2px #bdbdbd"}}>
                    <input type="text" placeholder="Category" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="input-group mb-3" style={{ boxShadow:"2px 2px #bdbdbd"}}>
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input type="file" class="form-control" id="inputGroupFile01"/>
                </div>

                <div class="mb-3" style={{boxShadow:"2px 2px #bdbdbd"}}>
                <textarea class="form-control" placeholder="Create Article" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                    <button type="submit" class="btn btn-danger">Submit</button>
            </form>
        </div>
    )
}

export default createArticle;