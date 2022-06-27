import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


const createArticle = () => {
    return(
        <div className="container">
            <form>
                <div class="mb-4">
                    <input type="text" placeholder="Title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <select class="form-select mb-4" aria-label="Default select example">
                <option selected>select Category</option>
                <option value="1">Rumah Adat</option>
                <option value="2">Pakaian adat</option>
                <option value="3">Bangunan</option>
                <option value="3">Agama</option>
                <option value="3">Alat musik</option>
                <option value="3">Lainnya...</option>
                </select>
                <div class="input-group mb-4" >
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input type="file" class="form-control" id="inputGroupFile01"/>
                </div>

                <div class="mb-4" >
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