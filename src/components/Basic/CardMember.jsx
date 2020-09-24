import React from 'react';

function CardMember({key, data, type}) {
    var img = "";
    try {
        img = require('../../assets/images/team/' + data.image);
    } catch (ex) {
        img = require('../../assets/images/team/avatar.png');
    }

    return (
        <div className={`container-card ${type}`} key={key}>
            <div className="content-card">
                <div className="content-member">
                    <img src={img} alt=""/>
                    <h3>{data.name}</h3>
                </div>
                <ul>
                    {
                        data.roles.map( (role, i) => (
                            <li key={i}>{role.elem_fr}</li>
                        ))
                    }
                </ul>
                <a className="btn-card hover-shadow">Page profil à venir !</a>
            </div>
        </div>
    );
}

export default CardMember;