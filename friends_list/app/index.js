const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

window.API = {
  fetchFriends: () => {
    return new Promise((res, rej) => {
      const friends = ['dutch', 'zelda', 'delayed list']
      setTimeout(() => {
        res(friends);
      }, 2000)
    });
  }
}

function FriendsList(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        { 
          props.friendsList.map((friend, i) => {
            return (
              <li key={`${friend}-${i}`}>
                <button onClick = {
                  () => props.onChangeFriendActivity(
                    friend,
                    props.fromListName,
                    props.toListName
                  )
                }>
                  {props.changeActivityName}
                </button> 

                <span>[[ {friend} ]]</span>

                {/** fromListName is the name of the friendsList for this component */}
                <button onClick = {() => props.onRemoveFriend(friend, props.fromListName)}>
                  Delete
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

function TextInput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.input} 
        onChange={props.handleUpdateInput}
      />

      <button onClick={props.handleInputSubmit}>
        Submit
      </button>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    // super() passes the props to the React.Component constructor
    super(props);

    // local component state
    this.state = {
        activeFriends: ['dutch', 'zelda'],
        inactiveFriends: [],
        input: '',
        loading: true
    }

    // bind() returns the method (it is called on) attached to the referenced (argument) object
    // 'this' will point to the object that has been bound regardless of the scope(object?) it is called from
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
    this.elementListSwap = this.elementListSwap.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleClearFriends = this.handleClearFriends.bind(this);
  }

  componentDidMount() {
    API.fetchFriends().then(friendsList => {
      this.setState(() => {
        return {
          activeFriends: friendsList,
          loading: false
        }
      })
    }).catch(console.error);
  }

  componentDidUpdate() {
    console.log('updated')
  }

  componentWillUnmount() {
    console.log('unmounting...')
  }

  handleUpdateInput({target: { value }}) {
    this.setState((currentState) => ({ input: value }));
  }

  handleAddFriend() {
    // only proceed to setState if the input has a valid (non-empty) value
    if (this.state.input === '') return;

    this.setState((currentState) => {
      // .push() is not used becaused it mutates the existing array
      // return a new concattanted array instead (pure vs impure?)
      return {
        activeFriends: currentState.activeFriends.concat([this.state.input]),
        input: ''
      };
    });
  }

  handleRemoveFriend(name, listName) {
    // state change event fires which can trigger a DOM update
      // always or only if states differ?
    // setState takes a callback whose first argument is the current state object
    // the callback must return an object to be MERGED with the current state object
      // ** NEVER MODIFY this.state directly (pure vs impure?) **
    this.setState((currentState) => {
      const newState = {};
      newState[listName] = currentState[listName].filter(friend => friend !== name);
      return newState
    });
  }

  handleClearFriends() {
    this.setState((currentState) => {
      return {
        activeFriends: [],
        inactiveFriends: []
      }
    });
  }

  elementListSwap(target, fromListName, toListName) {
    // filters the target element out of the fromList
    // adds it to the toList
      // use bracket notation + list name to get / set correct list
    // returns the new state with both new arrays
    this.setState((currentState) => {
      const newState = {};
      newState[fromListName] = currentState[fromListName].filter(e => e !== target);
      newState[toListName] = currentState[toListName].concat([target]);
      return newState;
    })
  }

  render() {
    return this.state.loading ? <h1>LOADING</h1> :
    (
      <div>
        <TextInput
          input={this.state.input}
          placeholder="enter friend name"
          handleUpdateInput={this.handleUpdateInput}
          handleInputSubmit={this.handleAddFriend}
        />

        <button onClick={this.handleClearFriends}>
          Clear All Friends
        </button>

        <FriendsList
          title='Active Friends'
          friendsList={this.state.activeFriends}
          onRemoveFriend={this.handleRemoveFriend}
          changeActivityName='Deactivate'
          onChangeFriendActivity={this.elementListSwap}
          // from/toListName must match the friend list names in this.state
          // see this.elementListSwap for clarification
          fromListName='activeFriends'
          toListName='inactiveFriends'
        />

        <FriendsList
          title='Inactive Friends'
          friendsList={this.state.inactiveFriends}
          onRemoveFriend={this.handleRemoveFriend}
          changeActivityName='Activate'
          onChangeFriendActivity={this.elementListSwap}
          fromListName='inactiveFriends'
          toListName='activeFriends'
        />
      </div>
    );
  }
}

// render the MOST PARENT component and attach it to the root (#app) tag in index.html
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
