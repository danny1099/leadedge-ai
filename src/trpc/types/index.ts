declare global {
  interface TRPCResponse<T> {
    result: T | null;
    message: string | null;
    status: "success" | "error";
  }
}

export {};
