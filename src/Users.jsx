import React, {Component} from 'react'
import UserCard from './UserCard'
class Users extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
    // componentDidMount(){ 
    //     fetch('url', {method:'get'})
    //     .then(respuesta => respuesta.json())
    //     .then(respuesta2 => {
    //         this.setState({
    //             users: respuesta2
    //         })
    //     })


    
}

    render ( ){
        const {users} =this.state
        return ( 
            <div>
                {users.map (u => (<UserCard key={u.id} name={u.name} username={u.username} email={u.email} />))}
            </div>
        )
    }
}



export default Users