import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


const createArticle = () => {
    return(
        <div className="container">
            <form>
                <div class="mb-3" style={{marginTop:"50px", boxShadow:"2px 2px #bdbdbd rounded"}}>
                    <input type="text" placeholder="Title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="mb-3" style={{ boxShadow:"2px 2px #bdbdbd rounded"}}>
                    <input type="text" placeholder="Category" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="input-group mb-3" style={{ boxShadow:"2px 2px #bdbdbd rounded"}}>
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input type="file" class="form-control" id="inputGroupFile01"/>
                </div>

                <div class="mb-3" style={{boxShadow:"2px 2px #bdbdbd rounded"}}>
                <textarea class="form-control" placeholder="Create Article" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <LinkContainer to="/">
                    <button type="submit" class="btn btn-danger">Submit</button>
                </LinkContainer>
            </form>
        </div>
    )
}

export default createArticle;