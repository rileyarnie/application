export enum FormFieldType {
  INPUT = "input",
}

export type User = {
  usrId: number;
  usrFirstname: string;
  usrLastname: string;
  usrUsername: string;
  usrStatus: string;
  usrCdate: string;
  usrMdate: string;
  usrSessionExpiry: string;
  usrInputter: number;
  usrAuthoriser: string;
  byUserRolesList: [string];
};
