import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleInputChanges = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg("Please Enter a Search Term");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Search Term</Form.Label>
          <Form.Control
            type="search"
            name="serachTerm"
            value={searchTerm}
            placeholder="Search for album artist or playlist"
            onChange={handleInputChanges}
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="info" type="submit" className="search">Search</Button>
      </Form>
    </div>
  );
};

export default SearchForm