  import React, { Component } from 'react';
  import {
    Route,
    Navigate,
    BrowserRouter,
    Routes
  } from 'react-router-dom';
  import Login from './page/Login/Login.jsx';
  import UserList from './page/headOfDepartment/UserList/UserList.jsx';
  import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler.jsx';
  import NotFound from './page/ErrorPage/404Page';
  import { getCurrentUser } from './utils/APIUtils.jsx';
  import { ACCESS_TOKEN } from './constant/constain.jsx';
  import { HodRount } from './router/index.jsx';

  import './App.css';

  class App extends Component {
    constructor(props) {
      console.log("App component constructed");
      super(props);
      this.state = {
        authenticated: false,
        currentUser: null,
        loading: true
      }

      this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
      
      getCurrentUser()
      
          .then(response => {
          

              this.setState({
                currentUser: response.data,
                authenticated: true,
                loading: false
                
            });
            
          }).catch(error => {
            console.error("Errors:", error);
              this.setState({
                  loading: false
              });
          });
          
    }

    handleLogout() {
      localStorage.removeItem(ACCESS_TOKEN);
      this.setState({
        authenticated: false,
        currentUser: null
      });
    }

    componentDidMount() {
      this.loadCurrentlyLoggedInUser();
    }

    render() {
      if (this.state.loading) {
        return <div>Loading.....</div>
      }
      return (
        <div className="app">
          <div className="app-body">   
            <BrowserRouter>
              <Routes>
              {HodRount({ path: "/hod/user-list",authenticated: this.state.authenticated, element: <UserList onLogout={this.handleLogout} />})}
                <Route path="/login" element={<Login/>} />
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </BrowserRouter>

          </div>

        </div>
      );
    }
  }

  export default App;