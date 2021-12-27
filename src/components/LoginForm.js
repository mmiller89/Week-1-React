import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
          <div>
              <div class="container myLogIn center">
                 <div><h3>Log In</h3></div>
                 <form class="col-4">
                     <div class="form-group">
                         <label for="email">Email Address</label>
                         <input type="email" class="form-control" id="email"/>
                     </div>
                     <div class="form-group">
                        <label for="pw">Password</label>
                        <input type="password" class="form-control" id="pw"/>
                     </div>
                </form>
              </div>
          </div>
        )
        
    }
}