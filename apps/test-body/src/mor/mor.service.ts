import { Injectable } from "@nestjs/common";
import { CreateMorArgs } from "./CreateMorArgs";

@Injectable()
export class MorService {
  constructor() {}
  async CreateMor(args: CreateMorArgs): Promise<string> {
    throw new Error("Not implemented");
  }
}
