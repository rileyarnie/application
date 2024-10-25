import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/lib/types";
import EditUser from "./EditUser";

interface Props {
  users: User[];
}

const UsersTable = ({ users }: Props) => {
  return (
    <Table>
      <TableCaption>A list of your all users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users &&
          users.map((user) => (
            <TableRow key={user.usrId}>
              <TableCell>{user.usrFirstname}</TableCell>
              <TableCell>{user.usrLastname}</TableCell>
              <TableCell>{user.usrUsername}</TableCell>
              <TableCell>{user.usrStatus}</TableCell>
              <TableCell>
                <EditUser />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
};

export default UsersTable;
