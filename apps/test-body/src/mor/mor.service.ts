import { Injectable } from "@nestjs/common";
import { CreateMorArgs } from "./CreateMorArgs";

@Injectable()
export class MorService {
  constructor() {}
  async CreateMor(args: string): Promise<CreateMorArgs> {
    throw new Error("Not implemented");
  }
}
