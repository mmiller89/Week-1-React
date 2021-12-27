import React from "react";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";

export default class WebPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />,
                <LoginForm />
            </div>
            
        );
    }
}