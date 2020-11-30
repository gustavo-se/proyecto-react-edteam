import React, {Component} from 'react'
import UserCard from '../molecules/UserCard'
import axios from 'axios'
import UserGrid from '../organisms/UsersGrid'

class Users extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
    /* componentDidMount(){ 
        fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
        .then(respuesta => respuesta.json())
        .then(respuesta2 => {
            this.setState({
                users: respuesta2
            })
        })
    }*/
   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        this.setState({
            users : res.data
        })
    })
   }


    render ( ){
        const {users} =this.state
        return ( 
            <UserGrid users = { users }/>
        )
    }
}



export default Users