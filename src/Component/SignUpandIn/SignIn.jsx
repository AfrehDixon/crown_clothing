import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
  render() {
    return (
        <div className='sign-in'>
            <h2>I already have na account</h2>
            <span>Sign in with email or password</span>

            <form action="">
                <input type="email" value={this.state.email} />
                <label htmlFor="email">Email</label>
                <input type="email" value={this.state.password} />
                <label htmlFor="password">Password</label>
            </form>
        
      </div>
    )
  }
}
