import React from 'react';
import axios from 'axios';
import './zomato.css'
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Zomato() {

    const [state, setState] = React.useState({
        data: [],
        isSearch: false,
        responseStatus: 'Yet You have not Entered Any Location Please Enter location Above to find out the Nearby Zomato Restaurants'
    })

    let getLocationLattitude = (city) => {
        return axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/locations?query=${city}`,
            headers: {
                "user-key": "ff4f897b8bc0d97ccd3ed25a6b951fd3",
                "content-type": "application/json"
            }
        })
            .then(response => {
                // console.log(response)
                let long = response.data.location_suggestions[0].longitude;
                let lati = response.data.location_suggestions[0].latitude;
                let cityId = response.data.location_suggestions[0].city_id;
                // console.log(long,lati)
                return (
                    {
                        "long": long,
                        "lati": lati,
                        "cityId": cityId,
                    }
                );

            })
            .catch(error => {
                console.log(error);
            });
    }

    let searchRestaurant = async (event) => {

        if (event.key === 'Enter') {
            setState({
                ...state,
                isSearch: true
            })
            await getLocationLattitude(event.target.value)
                .then(response => {
                    // console.log(response)
                    axios({
                        method: "GET",
                        url: `https://developers.zomato.com/api/v2.1/search?entity_id=${response.cityId}&entity_type=city&start=1&count=20&lat=${response.lati}&lon=${response.long}`,
                        headers: {
                            "user-key": "ff4f897b8bc0d97ccd3ed25a6b951fd3",
                            "content-type": "application/json"
                        }
                    })
                        .then(response => {
                            let Mainlist = []
                            let simplelist = {}
                            let nearbyRest = response.data.restaurants;
                            for (var i of nearbyRest) {
                                simplelist.name = (i.restaurant.name)
                                simplelist.url = (i.restaurant.url)
                                simplelist.average_cost_for_two = (i.restaurant.average_cost_for_two)
                                simplelist.has_online_delivery = (i.restaurant.has_online_delivery) ? "Available" : "Not Available"
                                simplelist.rating = (i.restaurant.user_rating.aggregate_rating)
                                simplelist.cuisines = (i.restaurant.cuisines).split(',')
                                simplelist.rating_text = (i.restaurant.user_rating.rating_text)
                                simplelist.featured_image = i.restaurant.featured_image
                                simplelist.location = i.restaurant.location.locality
                                simplelist.timing = (i.restaurant.timings).split(',')
                                simplelist.phone_numbers = (i.restaurant.phone_numbers).split(',')
                                Mainlist.push(simplelist)
                                simplelist = {}
                            }
                            setState({
                                ...state,
                                data: Mainlist,
                                responseStatus: `Here is the list of Zomato-Restaurants based on your location`
                            })
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(Err => setState({ ...state, responseStatus: "You have not enetered the correct location, please Enter the correct location" }))
        }
    }

    let JSX = state.data.map((rest, ind) => {
        return (
            <div className="Card" key={ind}>
                <div className="content">
                    <div>
                        <article>
                            <div className="first-div">
                                <div className="img">
                                    <img src={rest.featured_image} alt="Low Internet Connectivity" />
                                </div>
                                <div className="img-details">
                                    <div className="details">
                                        <div className="restaurant-name">

                                            <h3><a href={rest.url} key={ind}>{rest.name}</a></h3>
                                        </div>
                                        <div className="restaurnat-place">{rest.location}</div>
                                    </div>
                                    <div className="ratings">
                                        <span>Ratings</span>
                                        <div className="ratings">{rest.rating}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider div-transparent"></div>
                            <div className="text">
                                <div className="Row">
                                    <span>CUISINES:</span>
                                    <span>{rest.cuisines.slice(0, 4).join(',')}</span>
                                </div>
                                <div className="Row">
                                    <span>COST FOR TWO:</span>
                                    <span>{rest.average_cost_for_two}</span>
                                </div>
                                <div className="Row">
                                    <span>ONLINE_DELIVERY:</span>
                                    <span>{rest.has_online_delivery}</span>
                                </div>
                                <div className="Row">
                                    <span>Timings:</span>
                                    <span>{rest.timing.slice(0, 2).join(',')}</span>
                                </div>
                                <div className="Row">
                                    <span>Rating Text:</span>
                                    <span>{rest.rating_text}</span>
                                </div>
                            </div>
                        </article><hr />
                        <div className="Row">
                            <span>Phone Numbers:</span>
                            <span>{rest.phone_numbers.slice(0, 2).join(',')}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    if (state.isSearch && !state.data.length) JSX = <div className="progress-bar"><CircularProgress color="secondary" /></div>


    return (
        <div>
            <h1>Zomato Restaurants</h1>
            <input className="inputCard" type="text" placeholder="Search Restaurants based on your location" onKeyPress={searchRestaurant} />
            <div className="inputCards">{state.responseStatus} </div>
            {JSX}
        </div>
    )

}
