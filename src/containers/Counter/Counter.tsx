import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { serialsInfo} from "./CounterSlice.ts";
import {AppDispatch, RootState} from "../../app/store.ts";
import {Link} from "react-router-dom";

interface Props {
    results: { show: { id: number; name: string } }[];
}

const Counter = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const serialsInfoResult = useSelector((state: RootState) => state.cart.value);

    const SerialsSlice: React.FC<Props> = ({results}) => {
        return (
            <div className="block">
                {results.map((result) => (
                    <div key={result.show.id}>
                        <Link to={`/shows/${result.show.id}`}>{result.show.name}</Link>
                    </div>
                ))}
            </div>
        );
    };

    useEffect(() => {
        if(task) {
            dispatch(serialsInfo(task));
        }
    }, [task, dispatch]);
    return (
        <div>
            <input
                type="text"
                placeholder="Search movies"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
                {task && <SerialsSlice results={serialsInfoResult}/>}
        </div>
    );
};

export default Counter;