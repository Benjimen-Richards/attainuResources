import axios from "axios";
import React, { useEffect, useState } from "react";
const Userdata = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getdata() {
      const res = axios.get("https://jsonplaceholder.typicode.com/posts");
      setItems(res);
      console.log(res);
    }
    getdata();
  });
  return <ul></ul>;
};
export default Userdata;
