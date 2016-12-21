var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp.jsx');

describe('TodoApp', () => {
    it('should exists', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        // Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(todoData.completed);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(true);
        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // Test that when toggle from true to false, completedAt get removed
    it('should toggle todo from completed to incomplete', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(todoData.id);
        expect(todoApp.state.todos[0].completed).toBe(false);
        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});
