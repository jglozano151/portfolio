import React from 'react'; 

export default class Card extends React.Component {
    render() {
        return (
            <div> 
                <p class = "mb-2 p-3" style = {{textAlign: 'center', fontSize: 20}}> {this.props.title} </p> 
                <div class = "project mr-3"> 
                    <div class = "project-info"> 
                        <img src = {this.props.source} width = "600px"/> 
                        <div class = "description"> 
                            <p style = {{fontSize: 16}}> {this.props.description} </p> 
                        </div> 
                    </div> 
                </div>  
            </div> 
        )
    }
}