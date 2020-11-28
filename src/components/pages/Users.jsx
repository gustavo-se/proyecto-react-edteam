import React, {Component} from 'react'
import UserCard from '../molecules/UserCard'


class Users extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
     componentDidMount(){ 
        fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
        .then(respuesta => respuesta.json())
        .then(respuesta2 => {
            this.setState({
                users: respuesta2
            })
        })
    }


    render ( ){
        const {users} =this.state
        return ( 
            <div className='ed-grid'>
                <h1> Usuarios </h1>
                <div className='ed-grid s-grid-2 m-grid-3 l-grid-4'>
                    {users.map (u => (<UserCard key={u.id} name={u.name} username={u.username} email={u.email} />))}
                 </div>
            </div>
        )
    }
}



export default Users