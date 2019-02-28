import React from 'react'; 

export default class Experience extends React.Component {
    render() {
        return (
            <div style = {{marginBottom: '4em'}}>
                <div> 
                    <img src = {this.props.icon} height = "50px" width = "50px" style = {{float: 'left', marginRight: '1em'}}/>
                    <div style = {{float: 'left'}}> 
                        <h4>  {this.props.heading} </h4> 
                        <p> {this.props.subheading} </p>
                    </div> 
                </div> 
                <div style = {{clear: 'both'}}/> 
            </div> 
        )
    }
}