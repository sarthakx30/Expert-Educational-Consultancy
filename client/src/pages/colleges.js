import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';

import texturedImage from "../images/textured_3_edit.png";

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';

import axios from '../api/axios';
const COLLEGES_URL = '/api/v1/colleges';


const columns = [
    { id: 'index', label: "No.", minWidth: 60 },
    { id: 'cname', label: 'College Name', minWidth: 250 },
    { id: 'uname', label: 'University Name', minWidth: 250 },
    { id: 'state', label: 'State', minWidth: 100 },
    {
        id: 'estd',
        label: 'Established',
        minWidth: 50,
        align: 'center',
        format: (value) => value.toFixed(0),
    },
    {
        id: 'intake',
        label: 'Annual Seat Intake',
        minWidth: 120,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status Of NMC\/MCI',
        minWidth: 150,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'fee',
        label: 'Tuition Fee (Gen.) in Rs. P.a',
        minWidth: 150,
        align: 'center',
        format: (value) => value.toLocaleString('en-IN'),
    },
    {
        id: 'grad',
        label: 'Graduation',
        minWidth: 150,
        align: 'center',
        format: (value) => value.toLocaleString('en-IN'),
    },
    {
        id: 'category',
        label: 'Category',
        minWidth: 150,
        align: 'center',
        format: (value) => value.toLocaleString('en-IN'),
    }
];

function createData(index, cname, uname, state, estd, intake, status, fee, grad, category) {
    intake = parseInt(intake);
    fee = parseInt(fee);
    return { index, cname, uname, state, estd, intake, status, fee, grad, category };
}
var rows = [];

const Colleges = ({ navbar, setNavbar }) => {
    const [collegeRows, setCollegeRows] = useState([]);

    useEffect(() => {
        setNavbar(true);
        axios.get(COLLEGES_URL)
            .then((res) => {
                rows = [];
                res.data.colleges.map((College, index) => {
                    rows.push(createData(index + 1, College.COLLEGE_NAME, College.UNIVERSITY_NAME, College.STATE, College.ESTD, College.INTAKE, College.STATUS, College.FEE, College.GRAD, College.CATEGORY));
                })
                setCollegeRows(rows);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [state, setState] = useState('');
    const [graduation, setGraduation] = useState('');
    const [fee, setFee] = useState(2000000);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const [gotCollege, setGotCollege] = useState(true);

    const handleFilterChange = async (e) => {
        // console.log(state);
        setGotCollege(true);
        setPage(0);
        e.preventDefault();
        try {
            var response = '';
            if (graduation === '') {
                alert("Select Graduation");
            }
            else {
                setCollegeRows([]);
                if (state === '') {
                    response = await axios.get(`${COLLEGES_URL}?GRAD=${graduation}&FEE[lte]=${fee}`);
                }
                else {
                    response = await axios.get(`${COLLEGES_URL}?STATE=${state}&GRAD=${graduation}&FEE[lte]=${fee}`);
                }
                if (response.data.colleges.length === 0) {
                    setGotCollege(false);
                }
                rows = [];
                response.data.colleges.map((College, index) => {
                    rows.push(createData(index + 1, College.COLLEGE_NAME, College.UNIVERSITY_NAME, College.STATE, College.ESTD, College.INTAKE, College.STATUS, College.FEE, College.GRAD, College.CATEGORY));
                })
                setCollegeRows(rows);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function valuetext(value) {
        return `${value}`;
    }

    return (
        <Paper sx={{ margin: "80px auto", width: '95%' }}>
            <Typography align="center" variant="h4" style={{ fontFamily: "Nunito Sans", fontWeight: "600", color: "orange", textShadow: "1px 1px 2px black" }}>College List</Typography>
            <Divider sx={{ borderTop: "2px solid", margin: "10px 80px 0px 80px", color: "orange" }} />
            <form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '20px' }} onSubmit={handleFilterChange}>
                <Typography>Select Maximum Fees</Typography>
                <Slider
                    aria-label="Tuition Fee"
                    defaultValue={2000000}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    valueLabelFormat={fee.toLocaleString('en-IN')}
                    step={200000}
                    marks
                    min={1000000}
                    max={9999999}
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                />
                <div style={{ display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center" }}>
                    <TextField
                        style={{ margin: "10px", minWidth: "100px", height: "50px" }}
                        select
                        label="State"
                        value={state}
                        onChange={e => setState(e.target.value)}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Gujarat">Gujarat</MenuItem>
                        <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                        <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                        <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                        <MenuItem value="Haryana">Haryana</MenuItem>
                        <MenuItem value="Karnataka">Karnataka</MenuItem>
                        <MenuItem value="Kerala">Kerala</MenuItem>
                    </TextField>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={graduation}
                        onChange={e => setGraduation(e.target.value)}
                    >
                        <FormControlLabel value="UG" control={<Radio />} label="UG" />
                        <FormControlLabel value="PG" control={<Radio />} label="PG" />
                    </RadioGroup>
                    <Button type="submit" style={{ fontFamily: "Nunito Sans", fontWeight: "600", backgroundColor: "whiteorange", boxShadow: "0px 0px 2px 2px orange", height: "100%", padding: "7px" }}>Search</Button>
                </div>
            </form>
            {!gotCollege ? (<Grow in timeout={500}>
                <Stack sx={{ width: '100%' }}>
                    <Alert
                        severity="error"
                    >
                        No Colleges Found
                    </Alert>
                </Stack>
            </Grow>) :
                (<>
                    {collegeRows.length === 0 ? (
                        <Typography align="center">
                            <CircularProgress />
                        </Typography>
                    ) : (
                        <TableContainer sx={{ maxHeight: 600, "&::-webkit-scrollbar": { display: "none" } }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                sx={{ background: `url(${texturedImage})`, color: "orange" }}
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth, fontFamily: "Nunito Sans", fontWeight: "600" }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        collegeRows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.index}>
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell style={{ fontFamily: "Nunito Sans", fontWeight: "600" }} key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}                                                        </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}

                </>)

            }
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={collegeRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default Colleges;