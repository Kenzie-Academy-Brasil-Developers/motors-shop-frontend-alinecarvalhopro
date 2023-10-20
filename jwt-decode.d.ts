declare module 'jwt-decode' {
    function jwt_decode<T = { [key: string]: unknown }>(token: string): T;
    export = jwt_decode;
  }