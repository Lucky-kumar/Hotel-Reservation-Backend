import React from 'react'

import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="property" className='pListImg' />
        <div className='pListTitle'>      
        <h1>Hotels</h1>
        <h2>233 hotels</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="property" className='pListImg'/>
        <div className='pListTitle'>      
        <h1>Apartments</h1>
        <h2>2332 apartments</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="property" className='pListImg' />
        <div className='pListTitle'>      
        <h1>Resorts</h1>
        <h2>3233 resorts</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="property" className='pListImg'/>
        <div className='pListTitle'>      
        <h1>Villas</h1>
        <h2>133 villas</h2>
        </div>
        </div>

        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="property" className='pListImg' />
        <div className='pListTitle'>      
        <h1>Cabins</h1>
        <h2>253 cabins</h2>
        </div>
        </div>
    </div>
    
  )
}

export default PropertyList;
