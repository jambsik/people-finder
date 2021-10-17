export interface ApiResponse<Type> {
  data?: Array<Type>;
  item?: Type ;
  total?: number;
}
