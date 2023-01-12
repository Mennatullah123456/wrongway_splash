import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch records from the server
    fetch('/api/records')
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
      });
  }, []);

  return (
    <>
      <Typography variant="h5" align="center">
        Last Record
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.length > 0 ? (
            <TableRow>
              <TableCell>{records[0].player}</TableCell>
              <TableCell>{records[0].time}</TableCell>
              <TableCell>{records[0].date}</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No records found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <br />
      <Typography variant="h5" align="center">
        All Records
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.player}</TableCell>
              <TableCell>{record.time}</TableCell>
              <TableCell>{record.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Records;
