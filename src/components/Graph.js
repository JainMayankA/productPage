import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label,CartesianGrid,Tooltip, ResponsiveContainer } from 'recharts';
import {useSelector} from 'react-redux';

export default function Graph() {
  const findData = useSelector(state => state.findData)

    return (
      <>
      <ResponsiveContainer>
        <LineChart data={findData.sales} >
          <XAxis dataKey="weekEnding" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
        </LineChart>
        </ResponsiveContainer>
      </>
    );
  
}