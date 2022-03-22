import axios from "axios";

async function getSearch(searchText) {
    try {
        await axios.get(`${process.env.REACT_APP_BASE_URL}s=${searchText}`)
    } catch(error){
        console.log(error)
    }
}