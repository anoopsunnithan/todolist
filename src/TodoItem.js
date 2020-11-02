import React, { Component} from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createtasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.todo}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems =todoEntries.map(this.createtasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
            )
    }
}

export default TodoItem;