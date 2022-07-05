import React, { Component } from 'react';

class User extends Component {
    state = {
        name: 'sayed khairy',
        age: 24,
        gender: 'male',
        salary: 5000,
        facebook: 'https://www.facebook.com/'
    }

    // i need install bootstrap to do this 
    // checkAge()
    // {
    //     let classes;
    //     if(this.state.age >= 15 )
    //     {
    //         classe
    //     }
    // }

    render() {
        let { name, age, facebook} = this.state;
        return(
            <React.Fragment>
                <h1>Name : {name} </h1>
                <h2> Age :{age} </h2>
                <a href={facebook}> Facebook Account</a>

            </React.Fragment>
        )

    }
}
export default User;

