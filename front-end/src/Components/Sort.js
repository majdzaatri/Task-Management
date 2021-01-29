import React from "react";
import {DropdownButton, Dropdown, Row, Col} from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


const Sort = ({choosenSort, setChoosenSort, isAsc, changeOption, categorySelected, setCategorySelected}) => {

    return (
      <Row className="mx-2 align-items-center">
        {/* <div style={{margin: "0 1rem", letterSpacing: "4px"}} className="justify-content-center pt-1"> */}
            <Col className="ml-2">
                <h4 className="d-inline">Sort</h4>
                <DropdownButton id="dropdown-basic-button" name="dropdown-basic-button" size="sm" variant="secondary" title={choosenSort}>
                    <Dropdown.Item as="button" value="Date" onClick={() =>  setChoosenSort("Date")}>Date</Dropdown.Item>
                    <Dropdown.Item as="button" value="Priority" onClick={() =>  setChoosenSort("Priority")}>Priority</Dropdown.Item>
                    {/* <Dropdown.Item as="button" value="Category" onClick={() =>  setChoosenSort("Category")}>Category</Dropdown.Item> */}
                </DropdownButton>
            </Col>
            <Col className="ml-2">
                <h4 className="d-inline">Filter</h4>
                <Row className="mx-0">
                    <DropdownMultiselect 
                        id="dropdown-basic-button" 
                        buttonClass="btn-dark" 
                        handleOnChange={(selected) => setCategorySelected(selected)} 
                        options={["Red","Green","Blue"]} 
                        />
                </Row>
            </Col>
        {/* </div> */}
        <Col lg={3} className="mx-0">
            <Row className="mx-2 d-block">
                <input type="radio" value="asc" name="sort" onClick={() => changeOption()} defaultChecked={isAsc} />Asc
            </Row>
            <Row className="mx-2 d-block">
                <input type="radio" value="des" name="sort" onClick={() => changeOption()} defaultChecked={isAsc} />Des
            </Row>
        </Col>
      </Row>
    )
}

export default Sort