import { FaGithub, CiUSer } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";


function App() {

  const [searchBar, setSearchBar] = useState("");
  const { loading, data, error } = useFetch(`https://api.github.com/users/${searchBar}`)

  const handleSubmit = (e) => {
    e.preventDefault();
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
              {/* <button className="btn btn-outline-success" type="submit" >Search</button> */}
            </form>
          </div>
        </div>
      </nav>

      {
        !searchBar && 
          <p className="fs-1 fw-light text-secondary" style={{ marginLeft: '25vw', marginTop: '40vh' }}>Type in the searchbar to look for GitHub Users...</p>
      }

      {
        searchBar && 
          <div>
            <div className="card w-80 my-3 mx-4">
              <div className="card-body">
                <img src={data.avatar_url} alt="user avatar" className="rounded float-start me-4" style={{width: "170px", height: "180px"}}/>
                <div className="mx-4">
                  <div>
                    <h3 className="card-title d-inline">{data.name}</h3>
                    {
                      data.location && 
                      <span className="badge rounded-pill text-bg-info fs-6 fw-normal d-inline ms-4">{data.location}</span>
                    }
                  </div>
                  {
                    data.email &&
                    <h4>{data.email}</h4>
                  }
                  {
                    data.bio && 
                    <p className="card-subtitle d-inline fw-bold fs-5">Bio: 
                      <span className="d-block fw-normal fs-6">{data.bio}</span>
                    </p>
                  }
                  <div>
                    <p className="d-inline me-3 my-5"><LuUsers2 className="me-1" />Followers: {data.followers}</p>
                    <p className="d-inline mx-3 my-5"><CiUser className="mx-1" />Following: {data.following}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

export default App;
