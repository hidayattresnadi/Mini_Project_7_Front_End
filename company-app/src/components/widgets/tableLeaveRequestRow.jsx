import { formatDateWithOrdinal } from '../../helper';
import Button from '../elements/button';
import Icon from '../elements/icon';
import TableCell from '../elements/tableCell';

const TableLeaveRequestRow = ({ onDetail, leaveRequest }) => (
    <tr>
        <TableCell>{leaveRequest.processId}</TableCell>
        <TableCell>{leaveRequest.employeeName}</TableCell>
        <TableCell>{formatDateWithOrdinal(leaveRequest.startDate)}</TableCell>
        <TableCell>{formatDateWithOrdinal(leaveRequest.endDate)}</TableCell>
        <TableCell>{leaveRequest.totalDays}</TableCell>
        <TableCell>{leaveRequest.leaveType}</TableCell>
        <TableCell>{leaveRequest.reason}</TableCell>
        <TableCell>{formatDateWithOrdinal(leaveRequest.requestDate)}</TableCell>
        <TableCell></TableCell>
        <TableCell>
            {leaveRequest.status === "Accepted" ? (
                <Button className="btn btn-success btn-sm not-clickable">
                    <Icon className="bi bi-check-circle-fill"></Icon> Accepted
                </Button>
            ) : leaveRequest.status === "Rejected" ? (
                <Button className="btn btn-danger btn-sm not-clickable">
                    <Icon className="bi bi-x-circle-fill"></Icon> Rejected
                </Button>
            ) : (
                <Button className="btn btn-warning btn-sm not-clickable" disabled>
                    <Icon className="bi bi-exclamation-circle-fill"></Icon> Under Review
                </Button>
            )}
        </TableCell>


        <TableCell>
            <Button onClick={onDetail} className="btn btn-primary" aria-label="Detail Leave Request">
                <Icon className="fas fa-eye" />
            </Button>
        </TableCell>
    </tr>
);

export default TableLeaveRequestRow;
