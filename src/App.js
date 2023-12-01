import { FaGithub } from "react-icons/fa";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";


function App() {

  //const searchBar = document.getElementById("search-bar").value;

  const [searchBar, setSearchBar] = useState("");
  const { loading, data, error } = useFetch(`https://api.github.com/users/${searchBar}`)

  const handleSubmit = (e) => {
    e.preventDefault();
    //useFetch(`https://api.github.com/users/${searchBar}`);
  };

  if (loading) return <h1>Loading...</h1>

  if (error) 
    return (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      );

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <FaGithub />
          <div className="ms-3 d-inline">Github</div>
        </a>
        <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarSupportedContent">
          <form 
          onSubmit={handleSubmit} 
          className="d-flex" 
          role="search">
            <input 
            id="search-bar" 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit" >Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div>
    <div className="card w-80 my-3 mx-4">
      <div className="card-body">
        <h5 className="card-title">{data.login}</h5>
        <p className="card-text"></p>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
