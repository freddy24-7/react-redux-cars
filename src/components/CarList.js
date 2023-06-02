import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {

    const dispatch = useDispatch();

    const { name, cars } = useSelector(( {form, cars: { data, searchTerm }} ) => {
        const filteredCars = data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {
            cars: filteredCars,
            name: form.name
        };
    });
    console.log(cars);
    console.log(name);



    const handleDelete = (car) => {
        console.log(car);
        //action creator
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase()) ? "bold" : "";

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>{car.name} - ${car.cost}</p>
                <button
                    className="button is-danger"
                    onClick={() => handleDelete(car)}
                >
                    Delete</button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList