import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const { currentUser } = this.props;

        if (!currentUser) {
            return <div>No user data available</div>;
        }
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.image ? (
                                    <img src={this.props.currentUser.image} alt={this.props.currentUser.fullName}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.fullName && this.props.currentUser.fullName[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.fullName}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile