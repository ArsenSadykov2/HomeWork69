import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSerialsInfos} from "./CounterSlice.ts";
import { useParams } from 'react-router-dom';
import {AppDispatch, RootState,} from "../../app/store.ts";

const ShowSerialInfo = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const serialMainInfo = useSelector((state: RootState) => state.cart.info);

    useEffect(() => {
        dispatch(fetchSerialsInfos(id));
    }, [dispatch, id]);

    return (
        <div>
            {serialMainInfo ? (
                <>
                    <h1>Name:{serialMainInfo.name}</h1>
                    <p>description:{serialMainInfo.summary}</p>
                    <p>Language: {serialMainInfo.language}</p>
                    <p>Status: {serialMainInfo.status}</p>

                </>
            ) : (
                <p>Serial not found</p>
            )}
        </div>
    );
};

export default ShowSerialInfo;