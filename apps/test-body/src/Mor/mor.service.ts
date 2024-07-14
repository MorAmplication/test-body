import { Injectable } from "@nestjs/common";
import { CreateUserArgs } from "../user/base/CreateUserArgs";

@Injectable()
export class MorService {
  constructor() {}
  async CreateMor(args: CreateUserArgs): Promise<string> {
    throw new Error("Not implemented");
  }
}
