import React from 'react';
import { TablePanel } from "./TablePanel";
// SpreadJS imports
import '@grapecity/spread-sheets-react';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';


export const SalesTable = ({ tableData } ) => {
    const config = {
        sheetName: 'Sales Data',
        hostClass: ' spreadsheet',
        autoGenerateColumns: false,
        width: 200,
        visible: true,
        resizable: true,
        priceFormatter: '$ #.00',
        chartKey: 1
}
    
    return (
        <TablePanel title="Recent Sales">
            <table className="table">
                <thead>
                <tr>
                    <th>Client</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((sale) =>
                (<tr key={sale.id}>
                    <td>{sale.client}</td>
                    <td>{sale.description}</td>
                    <td>${sale.value}</td>
                    <td>{sale.itemCount}</td>
                </tr>))}
                </tbody>
            </table>
        </TablePanel>
    );

    return (
        <TablePanel title="Recent Sales">
        </TablePanel>
    );}