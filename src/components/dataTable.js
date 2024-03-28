import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function DataTable(props) {
    const { tableData } = props;





    return (
        <>
            {tableData.data &&
                <Container maxWidth="xl">


                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold',fontSize:'13px' }}>Avatar Image</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold',fontSize:'13px'  }}>Location</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold',fontSize:'13px'  }}>Bio</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold',fontSize:'13px'  }}>Github ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold',fontSize:'13px'  }}>Number Of Public Repos</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img src={tableData?.data?.avatar_url} width={'50px'} />
                                    </TableCell>
                                    <TableCell>{tableData?.data?.location?tableData?.data?.location:'Not Found'} </TableCell>
                                    <TableCell>{tableData?.data?.bio?tableData?.data?.bio:'Not Found'} </TableCell>
                                    <TableCell>{tableData?.data?.id?tableData?.data?.id:'Not Found'} </TableCell>
                                    <TableCell>{tableData?.data?.public_repos?tableData?.data?.public_repos:'Not Found'} </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            }




        </>
    );
}
