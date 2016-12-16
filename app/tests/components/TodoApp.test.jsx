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
});
