import React, {useState} from "react";
import {DropdownButton, Dropdown, Row} from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


const Sort = ({choosenSort, setChoosenSort, isAsc, changeOption, categorySelected, setCategorySelected}) => {

    const isChoosenCategory = () => {
        if (choosenSort === "Category"){
            console.log(true)
            return true
        }
        console.log(false)
        return false
    } 
    

    return (
      <div >
        <Row style={{margin: "0 1rem", letterSpacing: "4px"}} className="justify-content-center pt-1">
            <h4 className="d-inline ml-3">Sort</h4>
            <DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title={choosenSort}>
                <Dropdown.Item as="button" value="Date" onClick={() =>  setChoosenSort("Date")}>Date</Dropdown.Item>
                <Dropdown.Item as="button" value="Priority" onClick={() =>  setChoosenSort("Priority")}>Priority</Dropdown.Item>
                <Dropdown.Item as="button" value="Category" onClick={() =>  setChoosenSort("Category")}>Category</Dropdown.Item>
            </DropdownButton>
            <DropdownMultiselect id="dropdown-basic-button" handleOnChange={setCategorySelected(categorySelected)} options={["Red","Green","Purple"]} className={`ml-2 ${isChoosenCategory() ?"d-block":"d-none"}`} size="sm"/>
            <Row>
            <input type="radio" value="asc" name="sort" className="ml-5" onClick={() => changeOption()} checked={isAsc} disabled={isChoosenCategory()}/>Asc
            <input type="radio" value="des" name="sort" className="ml-3" onClick={() => changeOption()} checked={isAsc} disabled={isChoosenCategory()}/>Des
            </Row>

        </Row>
      </div>
    )
}

export default Sort