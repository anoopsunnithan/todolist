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
        this.deleteItem = this.deleteItem.bind(this);
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
        event.preventDefault();
        
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter( function(item) {
            return(item.key !==key)
        });

        this.setState({
            items:filteredItems
        });


    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <h3 className="headingClass">Todo List</h3>
                    <form onSubmit={this.addTodoItem}>
                        <input ref={(a) => this._inputElement = a} 
                                placeholder="Enter Task" />
                        <button type="submit" >Add</button>
                    </form>
                </div>
                <TodoItem entries={this.state.items} 
                            delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default ToDoList;