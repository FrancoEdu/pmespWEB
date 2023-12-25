export class IBaseResponse{
  data: any;
  success!: boolean;
  message!: string;
  errors: any;
  totalRecord: number = 0
}
