import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner';
import { addFriend } from '../actions'

class AddFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }

    handleChanges = e => {
        let value = e.target.value;
        if (e.target.name === 'age') {
            value = parseInt(value, 10);
        }

        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
        .then(() => {
            this.props.history.push('/protected');
        });

        this.setState({
            friends: {
                name: '',
                email: '',
                age: ''
            }
        });
    }

    render(){
        return(
            <form onSubmit={this.addFriend}>
                <input 
                    type='text' 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleChanges}
                    placeholder='Name'
                />
                <input
                    type='text' 
                    name='age' 
                    value={this.state.age} 
                    onChange={this.handleChanges}
                    placeholder='Age'
                />
                <input
                    type='text' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.handleChanges}
                    placeholder='Email'
                />
                <button>
                    {this.props.addingFriend ? (
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                    'Add Friend'
                    )}
                </button>
            </form>
        )
    }
}

const mapStateToProps = ({ addingFriend }) => ({
    addFriend
});

export default connect(
    mapStateToProps, 
    { addFriend }
)(AddFriend);