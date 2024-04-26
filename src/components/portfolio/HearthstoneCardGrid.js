import React, { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import parse from 'html-react-parser';
import battlenetService, { sampleHearthstoneCards } from '../../services/battlenetService';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HearthstoneCardGrid = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [rowData, setRowData] = useState([]);
    const gridApiRef = useRef();
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);


    // Handle search bar input change
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Check if gridApiRef.current exists and has the api property
        if (gridApiRef.current && gridApiRef.current.api) {
            // Get the filter instance for the 'name' field
            const nameFilterInstance = gridApiRef.current.api.getFilterInstance('name');

            // Set the model for the filter instance
            nameFilterInstance.setModel({
                type: 'contains',
                filter: query,
            });

            // Apply the filter change
            gridApiRef.current.api.onFilterChanged();
        }
    };

    // Define column definitions
    const columnDefs = [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Mana Cost', field: 'manaCost', width: 200 },
        { headerName: 'Attack', field: 'attack', width: 100 },
        { headerName: 'Health', field: 'health', width: 100 },
        { headerName: 'Card Type', field: 'cardTypeId', width: 200 },
        {
            headerName: 'Text',
            field: 'text',
            width: 300,
            cellRenderer: (params) => parse(params.value) // Convert plain HTML text to HTML using html-react-parser
        },
        {
            headerName: 'Image',
            field: 'image',
            cellRenderer: params => (
                <img src={params.value} alt={params.data.name} style={{ width: '60px', height: '80px' }} />
            )
        },
        {
            headerName: 'Action',
            field: 'action',
            cellRenderer: (params) => (
                <Button
                    onClick={() => handleViewButtonClick(params.data.id)}
                    variant="contained"
                    color="primary"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View
                </Button>
            ),
        },
    ];
    // Fetch data from the Hearthstone API
    useEffect(() => {

        const fetchData = async () => {
            const resp = await battlenetService.fetchHearthstoneCards();
            if (resp.isError) {
                console.error('Error fetching Hearthstone card data:', resp);
                setIsError(true);
                return;
            }
            setRowData(resp.data);
            setIsError(false);
        };
        fetchData();
    }, []);

    const handleViewButtonClick = (id) => {
        navigate(`/card/${id}`);
    };

    return (
        <div>
            {/* Display error message if there's an error */}
            {isError && (
                <div className="bg-red-200 text-red-700 p-4 rounded mb-4">
                    Network Error. Please try again later.
                </div>
            )}
            <TextField
                label="Search Card"
                value={searchQuery}
                onChange={handleSearchChange}
                variant="outlined"
                margin="normal"
                className="w-full"
            />

            <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                    }}
                    rowHeight={100}
                    ref={gridApiRef} // Reference to the grid's API
                />
            </div>
        </div>
    );
};

export default HearthstoneCardGrid;
