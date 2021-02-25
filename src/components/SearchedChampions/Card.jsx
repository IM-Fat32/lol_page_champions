import React from 'react';

class Card extends React.PureComponent {
  constructor({props}) {
    super();
    this.championData = props.el;
    this.handleClick = props.handleClick.bind(this);
  }
  render() {
    return(
      <div
      onClick = {this.handleClick}
      className="col-12 col-sm-6 col-lg-4 pt-4 m-4 card"
      style={{
        minWidth: '360px', 
        boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
        border: 'none'
      }}
      >
        <h5 className="card-title">{this.championData[0]}</h5>
        <p className='card-subtitle mb-3' >{this.championData[1].title}</p>
        <img 
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.championData[0]}_0.jpg`} 
          alt={this.championData[1].image.full}
          className="img-fluid"
          style={{
            borderRadius: '20px'
          }}
        />
        <p className="mt-3">
        {this.championData[1].tags.map(el => (
          <span key={el}>{el} </span>
        ))}
        </p>
      </div>
    )
  }
}


export default Card;