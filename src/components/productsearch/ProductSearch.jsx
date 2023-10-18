import React, {useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import './ProductSearch.css';



const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
    return( 
        <>
        <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={7}>
            <Form.Control
              type="text"
              placeholder="Buscar"
              className="mr-sm-2 input search-bar"
              onChange={(e) =>{
                setSearchTerm(e.target.value)
                onSearch(e.target.value);
              }}
            />
          </Col>
          <Col xs={2}>
            <Button variant="dark" type="submit" className="search-btn">Buscar</Button>
          </Col>  
        </Row>
      </Form>
        </>
    )
}

export default ProductSearch;
