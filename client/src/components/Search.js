import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchField = () => {
    const [searchText, setSearchText] = useState("");

    let url = window.location.href
    url = url.split("/")[3]

    const goToPage = (value) => {
        if(value){
            document.location = "/" + url + "/" + value;
        }
    }

    if (url === "products" || url === "glossary") {
      return (
        <Form target="_blank" onSubmit={() => goToPage(searchText)}>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Search for any products" value = {searchText} onChange={(val) => {setSearchText(val.target.value)}} />
            </Col>
          </Row>
        </Form>
      );
    } else {
      return (
          ''
      );
    }
}

export default SearchField;
