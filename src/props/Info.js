import React, { Component } from 'react'

export class Info extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           person: {
            fullName: 'Yvonne Irenroa',
            bio: 'Happy go to millenial',
            imgSrc: '/ProfilePhoto.jpg',
            profession:'Budding Full Stack Developer'
          }
          
        }
      }

    render() {
        return (
            <div>
                <img
                src= {this.state.person.imgSrc} alt='profilePhoto'
                />
                <h2> {this.state.person.fullName} </h2>
                <h2> {this.state.person.bio} </h2>
                <h2> {this.state.person.profession} </h2>
            </div>
        )
    }
}

export default Info
