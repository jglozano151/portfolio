import React from 'react'; 

export default class Card extends React.Component {
    render() {
        return (
            <div class = "row mt-4 container"> 
                <div class = "p-4 col-6"> 
                    <h3 class = "mb-4 lead" style = {{textAlign: 'center', fontSize: 22}}> {this.props.title} </h3>
                    <img src = {this.props.source} width = "100%" style = {{borderRadius: 5}}/> 
                </div> 
                <div class = "col-6 p-4" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
                    <p class = "text-justify mt-3" style = {{fontSize: 18}}> {this.props.description} </p> 
                    <div> 
                        <a href = {this.props.link} class = "btn btn-outline-primary"> Live Project </a> 
                    </div> 
                </div> 
            </div> 
        )
    }
}