import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Row, Col, Card, CardBody, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import MaterialReactTable from 'material-react-table';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {List } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box,
    Button,
    IconButton,
    Typography,
    Tooltip,
  } from '@mui/material';
import PageTitle from '../../components/PageTitle';


const dataa = [
    { name: "John", email: "john@gmail.com", age: 12, gender: "Male" },
    { name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male" },
    { name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female" },
    { name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male" },
    { name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female" },
    { name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female" },
];

const Tables = () => {

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [apiData, setApiData] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefetching, setIsRefetching] = useState(false);
    const [rowCount, setRowCount] = useState(0);

    const [columnFilters, setColumnFilters] = useState([]);
    const [columnFilterFns, setColumnFilterFns] = useState({
        name: 'contains',
        email: 'contains',
        invoicedate: 'contains',
        duedate: 'contains',
        ponum: 'contains',
        totalamt: 'equals',
        status: 'contains',
    });
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState([]);
    const tableInstanceRef = useRef(null);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5
    });


    const columns2 = useMemo(
        () => [
            {
                accessorKey: 'name',
                header: "Invoice #",
                Cell: ({ cell, row }) => (
                  <Typography variant='h7'>{cell.getValue()}</Typography>
                ),
                enableColumnFilterModes: true,
                filterFn: 'contains',
                columnFilterModeOptions: ['contains'],
            },
            {
                accessorKey: 'email',
                header: "Invoice #",
                Cell: ({ cell, row }) => (
                    <Typography variant='h7'>{cell.getValue()}</Typography>
                ),
                enableColumnFilterModes: true,
                filterFn: 'contains',
                columnFilterModeOptions: ['contains'],
            },
            {
                accessorKey: 'age',
                header: "Invoice #",
                Cell: ({ cell, row }) => (
                    <Typography variant='h7'>{cell.getValue()}</Typography>
                ),
                enableColumnFilterModes: true,
                filterFn: 'contains',
                columnFilterModeOptions: ['contains'],
            },
            {
                accessorKey: 'gender',
                header: "Invoice #",
                Filter: ({ column, header, table }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <input
                        type="date"
                        style={{margin:'3px 0 2px 0',border:'none',color:'#777'}}
                        onChange={(newValue) => {
                          column.setFilterValue(newValue.target.value);
                        }}
                        value={column.getFilterValue()}
                      />
                      <hr style={{margin:'0px',borderColor:'black'}}/>
                      <p style={{color:'rgba(0, 0, 0, 0.6)',fontSize:'12px'}}>Filter Mode: contains</p>
                    </LocalizationProvider>
                    
                  ),
                enableColumnFilterModes: true,
                filterFn: 'contains',
                columnFilterModeOptions: ['contains'],
            }
        ],
        [],
    );

    const findFilterCondition = (name) => {
        var condition = '';
        if (columnFilterFns[name]) {
            condition = columnFilterFns[name];
        }
        return condition;
    }

    const fetchDataFromAPI = async (reset = false) => {
        if (!data.length) {
            setIsLoading(true);
        } else {
            setIsRefetching(true);
        }

        let filterQuery = '';
        let sorterQuery = '';

        if (!reset) {
            if (columnFilters.length > 0) {
                columnFilters.forEach(element => {
                    if (element.id === 'invoicedate' || element.id === 'duedate') {
                        // filterQuery += `&filter=${element.id},${findFilterCondition(element.id)},${AuthVerify.getDate(element.value)}`;
                    }
                    else {
                        filterQuery += `&filter=${element.id},${findFilterCondition(element.id)},${element.value}`;
                    }
                });
            }
            if (sorting.length > 0) {
                sorting.forEach(element => {
                    sorterQuery += `&sortby=${element.id}&orderby=${element.desc ? 'desc' : 'asc'}`;
                });
            }
        } else {
            setPagination({
                pageIndex: 0,
                pageSize: 5
            });
            tableInstanceRef.current.resetRowSelection();
        }

        //Get Invoices
        //api/account/invoice
        // let url = `/account/invoice?limit=${pagination.pageSize}&offset=${pagination.pageIndex * pagination.pageSize}${sorterQuery}${filterQuery}`;
        // await Axios.get(url)
        //   .then(function (response) {
        //     setIsError(false);
        setIsLoading(false);
        setIsRefetching(false);
        //     if (response && response.data?.data) {
        setData(dataa);
        setRowCount(dataa.length);
        //     }
        //     else {
        //       toast.error(response.statusText ?? "Data fetching failed !", {
        //         position: toast.POSITION.TOP_CENTER,
        //         autoClose: 3000,
        //         transition: Slide,
        //       });
        //     }
        //   })
        //   .catch(function (error) {
        //     // navigate('/');
        //   });
    };

    useEffect(() => {
        fetchDataFromAPI();
    }, [
        columnFilters,
        globalFilter,
        pagination.pageIndex,
        pagination.pageSize,
        sorting
    ]);
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Tables', path: '/tables/advanced' },
                            { label: 'Advanced Tables', path: '/tables/advanced', active: true },
                        ]}
                        title={'Advanced Tables'}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
            <Card>
            <CardBody>
                <h4 className="header-title mt-0 mb-1">Basic example</h4>
                <p className="sub-header">
                    Just use <code>Table</code> element
                </p>
                    <MaterialReactTable
                        columns={columns2}
                        data={data}
                        enableColumnActions={false}
                        enableGlobalFilter={false}
                        enableColumnFilterModes
                        initialState={{
                            showColumnFilters: false
                        }}
                        manualFiltering
                        manualPagination
                        manualSorting
                        onColumnFilterFnsChange={setColumnFilterFns}
                        onColumnFiltersChange={setColumnFilters}
                        onGlobalFilterChange={setGlobalFilter}
                        onPaginationChange={setPagination}
                        onSortingChange={setSorting}
                        tableInstanceRef={tableInstanceRef}
                        rowCount={rowCount}
                        enableEditing
                        state={{
                            columnFilters,
                            columnFilterFns,
                            globalFilter,
                            isLoading,
                            pagination,
                            showAlertBanner: isError,
                            showProgressBars: isRefetching,
                            sorting,
                        }}
                        positionActionsColumn="last"
                        displayColumnDefOptions={{
                            'mrt-row-actions': {
                                header: 'Action',
                            },
                        }}

                        renderRowActions={({ row, table }) => (
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Tooltip arrow placement="left" title="Details">
                                <IconButton onClick={() => alert(`/invoice-details?invoicenum=${row.original.invoicenum}`)}>
                                <List />
                                </IconButton>
                            </Tooltip>
                            </Box>
                        )}
                    />
                </CardBody>
                </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Tables;
