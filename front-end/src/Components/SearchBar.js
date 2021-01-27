import React from "react"
import {MDBCol} from "mdbreact"
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch} from "react-icons/fa"

const SearchBar = ({input, onChange}) => {

    return (
        <MDBCol>
        <form className="form-inline mt-1 mb-1">
          <FaSearch className="mr-2" />
          <input className="form-control form-control-sm" style={{width: "90%"}} value={input} onChange={(e) => onChange(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
        </form>
      </MDBCol>
    )
}

export default SearchBar