import React from "react";
import { FaStar} from "react-icons/fa"
import './Rating.css';

export const Rating = ({star}) => {

    function rateUser(rate) {
        switch (rate) {
            case 1 :
                return (
                    <div>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                    </div>
                )
            case 2 :
                return (
                    <div>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                    </div>
                )
            case 3 :
                return (
                    <div>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                    </div>
                )
            case 4 :
                return (
                    <div>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="black"></FaStar>
                    </div>
                )
            case 5 :
                return (
                    <div>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                        <FaStar className="yellow"></FaStar>
                    </div>
                )
                break;
            default :
                return (
                    <div>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                        <FaStar className="black"></FaStar>
                    </div>
                )
        }
    }

    return (
        <div>
            {rateUser(star)}
        </div>
    )
}