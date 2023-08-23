import  { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import Component2 from './Component2';



interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function SecondPage() {

  const navigate = useNavigate()

  useEffect(() => {
    const userDetailsString = localStorage.getItem('userDetails');

    if (!userDetailsString) {
      navigate('/'); 
      return;
    }

    const userDetails = JSON.parse(userDetailsString);

    if (!userDetails || !userDetails.name || !userDetails.phone || !userDetails.email) {
      navigate('/');
    }
  }, []);


  async function fetchJSONData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchJSONData().then((data) => setPosts(data));
  }, []);


  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  return (
    <div>
       <div style={{ height: 400, width: "100%", margin:"6rem"}}>
      <DataGrid rows={posts} columns={columns} style={{backgroundColor:"#354352", color:"white"}} />
    </div>
    <Component2 />
    </div>
  );
}

export default SecondPage;