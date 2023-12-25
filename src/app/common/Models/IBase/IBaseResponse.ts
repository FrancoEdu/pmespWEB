export class IBaseResponse{
  data: any;
  success!: boolean;
  message!: string;
  errors: any;
  totalRecords: number = 0;
}
