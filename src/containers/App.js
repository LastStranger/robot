import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import Scroll from "../components/Scroll";

class App extends Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(users => {
                this.setState({
                    robots: users.data
                })
            })
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        })
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
           return  robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        // this.state.robots.length === 0 ?
        //     return <h1>Loading</h1>
        // :
        // return (
        //     <div className='tc'>
        //         <h1 className='f2'>RobotFriends</h1>
        //         <SearchBox search_change={this.onSearchChange}/>
        //         <CardList robots={filteredRobots}/>
        //     </div>
        // );
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RobotFriends</h1>
                    <SearchBox search_change={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;