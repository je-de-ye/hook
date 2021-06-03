import { Component } from 'react'

export default class Class extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        console.clear()
    }

    componentDidMount(){
        console.log("MainClass: DidMount")
        setTimeout(()=>{
            this.setState({counter: this.state.counter + 1})
        },5000)
    }

    componentDidUpdate(){
        console.log("MainClass: DidUpdate")
    }

    render() {
        console.log("Render")
        return (
            <div>
                <h4>Class Counter : {this.state.counter}</h4>
                {this.state.counter !== 1 && <ClassSecond /> }
            </div>
        )
    }
}

class ClassSecond extends Component{

    componentDidMount(){
        console.log("SecondClass: DidMount")
    }

    componentWillUnmount(){
        console.log("SecondClass: WillUnmount")
    }

    render(){
        return(
            <div>
                Lorem ....
            </div>
        )
    }
}