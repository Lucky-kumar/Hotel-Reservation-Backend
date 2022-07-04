import React from 'react'
import './featured.css'
import useFetch from './../../hooks/useFetch';

const featured = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london");

    return (
        <div className="featured">
            {loading ? "Loading ... PLease Wait" : <>
                <div className="featuredItem">
                    <img src='https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='mumbai' />
                    <div className="featuredTitles">
                        <h1>Mumbai</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src='https://images.unsplash.com/photo-1609258678760-ba05d9b95bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldyUyMGRlbGhpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='New Delhi' />
                    <div className="featuredTitles">
                        <h1>New Delhi</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src='https://images.unsplash.com/photo-1589041127168-9b1915731dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='kolkata' />
                    <div className="featuredTitles">
                        <h1>Kolkata</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src='https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbm5haXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='chennai' />
                    <div className="featuredTitles">
                        <h1>Chennai</h1>
                        <h2> data[3] properties</h2>
                    </div>
                </div>
            </>
            }
        </div>

    )
}

export default featured;