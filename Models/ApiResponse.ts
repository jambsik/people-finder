export interface ApiResponseMetadata {
  filters: {
    [key: string]: {
      type: string;
      validations?: {
        min?: number;
        max?: number;
        required?: boolean;
        regex?: string;
      };
    };
  };
}

export interface ApiResponse<Type> {
  data?: Array<Type>;
  item?: Type;
  total?: number;
  metadata?: ApiResponseMetadata;
}
