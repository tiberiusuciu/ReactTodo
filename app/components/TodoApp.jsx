var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList.jsx'
import AddTodo from 'AddTodo.jsx';
import TodoSearch from 'TodoSearch.jsx';

var TodoApp = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
