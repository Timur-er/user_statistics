import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {getDate} from "../Calendar/func";

const ViewsGraph = statistic => {

    const data = statistic.statistic && statistic.statistic.map(data => {
        const date = data.date
        return {...data, date: getDate(date, false) }
    })

    return (
        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 25
                }}
            >
                <CartesianGrid horizontal="true" vertical="" stroke="#F1F1F1" />
                <XAxis dataKey={'date'} stroke="#F1F1F1" tickLine={false} tick={{fill:"#CCCCCC"}}/>
                <YAxis axisLine={false} tickLine={false} tick={{fill:"#CCCCCC"}}/>
                <Line type="monotone"  strokeWidth={4} dataKey="page_views" stroke="#3A80BA" />
            </LineChart>
        </ResponsiveContainer>

    );
};

export default ViewsGraph;