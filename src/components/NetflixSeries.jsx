
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./lists";

const NetflixSeris = () => {
    return (
        <ul className="grid grid-two-cols">
            {seriesData.map((curElem) => (
                <SeriesCard key={curElem.id} data={curElem} />
            ))}
        </ul>
    );
};

export const Footer = () => {
    return <p>Copyright @usmanjaved</p>;
};

export const Header = () => {
    return <p>Copyright @usmanjaved</p>;
};

export default NetflixSeris;
