import { Component }  from "react";

class ItemCount extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            total: this.props.item.salePrice.slice(1)
        };
    }

    incrementPrice = () => {
        let c = ++this.state.count
        let p = this.props.item.salePrice.slice(1)
        let r = c * p
        this.setState({
            count: c,
            total: r

        })
    }
    
    decreasePrice = () => {
        let c = --this.state.count
        let p = this.props.item.salePrice.slice(1)
        let r = c * p
        this.setState({
            count: c,
            total: r
        })

    }
    
    render() {
        return (
            <>
                <div className="item-overview-count">
                    <button className="item-overview-count-decrease-price" onClick={this.decreasePrice} disabled={this.state.count <= 1}><span className="material-symbols-outlined">remove</span></button>
                    <p className="">{this.state.count}</p>
                    <button className="" onClick={this.incrementPrice}><span className="material-symbols-outlined">add</span></button>
                </div>
                <div className="item-overview-details"> 
                    <span className="item-overview-details-sale-price">{this.props.item.salePrice.slice(0, 1)}{this.state.total}</span>
                    <span className="item-overview-details-price"><strike>{this.props.item.originalPrice}</strike></span>
                </div>
            </>
        )
    }
}

export default ItemCount