import React from 'react';
import './product.css';

export class Product extends React.Component {
    render () {
        return (
            <div className="product-card">
                <img src={this.props.image} alt="Product image" height="200px"   />
                <div className="product-info">
                    <h3>{this.props.name}</h3>
                    <p>R{this.props.price}</p>
                    <p>{this.props.description}</p>
                    
                </div>
            </div>
        );
    }
}
