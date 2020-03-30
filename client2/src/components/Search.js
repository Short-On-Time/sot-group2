import React, {useState, useEffect} from 'react';

const SearchField = () => {
    const [searchText, setSearchText] = useState("");

    let url = window.location.href
    url = url.split("/")[3]

    const goToPage = (value) => {
        if(value){
            document.location = "/" + url + "/" + value;
        }
    }

    if (url == "products" || url == "glossary") {
      return (
          <form  target="_blank" onSubmit={() => goToPage(searchText)}>
              <input 
                style={{borderRadius: '30px', boxShadow: '2px 2px'}}
                type="text"
                placeholder="Search for any products"
                value = {searchText}
                onChange={(val) => {setSearchText(val.target.value)}}/>
          </form>
      );
    } else {
      return (
          ''
      );
    }
}

export default SearchField;
