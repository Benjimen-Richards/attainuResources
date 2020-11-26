import axios from "axios";
const { useState, useEffect } = require("react");

const Data = () => {
  const [items, setitems] = useState();
  useEffect(() => {
    async function getdata() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => setitems(res));
    }
    getdata();
  }, []);
  return items;
};
export default Data;
