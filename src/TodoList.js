import React, { Component} from "react"
import TodoItem from "./TodoItem"
import "./TodoList.css"

class ToDoList extends Component {
    constructor(props) {
        super(props);

        //array to add TodoItem
        this.state ={
            items: []
        }

        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem(event) {
        if(this._inputElement.value !=="") {
            var newItem = {
                todo: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items:prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value="";
        console.log(this.state.items)
        event.preventDefault();
        
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTodoItem}>
                        <input ref={(a) => this._inputElement = a} 
                                placeholder="Enter Task" />
                        <button type="submit" >Add</button>
                    </form>
                </div>
                <TodoItem entries={this.state.items} />
            </div>
        );
    }
}

export default ToDoList;