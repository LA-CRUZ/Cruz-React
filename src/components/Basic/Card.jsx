import React from 'react';

function Card({data, type}) {
    return (
        <div className={`container-card ${type}`}>
            <div className="content-card">
                <img src={require(`../../assets/images/projects/${data.img}`)} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                {
                    type !== "feature" &&
                    <a className="btn-card hover-shadow">Page projet à venir !</a>
                }
            </div>
        </div>
    );
}

export default Card;