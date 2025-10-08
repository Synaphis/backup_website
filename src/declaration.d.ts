// src/declaration.d.ts
declare module "*.svg?url" {
  const content: string;
  export default content;
}