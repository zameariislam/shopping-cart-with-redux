
import { useDispatch, useSelector } from "react-redux";

import { ddecrement, dincrement } from "../redux/dynamicCounter/actions";

export default function DynamicCounter() {

    const{ value} = useSelector((state) => state?.dynamicCounter)
    const dispatch = useDispatch()
    


    const handleIncrement = (value) => {

        dispatch(dincrement(value))

    };

    const handleDecrement = (value) => {
        dispatch(ddecrement(value))

    };

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{value}</div>
            <div className="flex space-x-3">
                <button
                    onClick={() => handleIncrement(10)}
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"

                >
                    Increment
                </button>
                <button
                    onClick={() => handleDecrement(10)}
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"

                >
                    Decrement
                </button>
            </div>
        </div>
    );
}