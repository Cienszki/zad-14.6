var Counter = React.createClass({
    getDefaultProps: console.log('getDefaultProps'),
    getInitialState: function() {
        return {
            counter: 10
        };
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    componentWillMount: console.log('componentWillMount'),
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('span', {}, 'Licznik: ' + this.state.counter)   
            )
        );
    },
    componentDidMount: console.log('componentDidMount'),
    componentWillReceiveProps: console.log('componentWillReceiveProps'),
    shouldComponentUpdate: console.log('shouldComponentUpdate'),
    componentWillUpadate: console.log('componentWillUpdate'),
    componentDidUpdate: console.log('componentDidUpdate'),
    componentWillUnmount: console.log('componentWillUnmount')

});
var app = React.createElement(Counter);


var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 10
        };
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('span', {}, 'Licznik: ' + this.state.counter)   
            )
        );
    }
});
var app2 = React.createElement(Counter2);
ReactDOM.render(app, document.getElementById('app'));
ReactDOM.render(app2, document.getElementById('app2'));
