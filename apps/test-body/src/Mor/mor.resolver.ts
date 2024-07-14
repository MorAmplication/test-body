import * as graphql from "@nestjs/graphql";
import { CreateUserArgs } from "../user/base/CreateUserArgs";
import { MorService } from "./mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}

  @graphql.Mutation(() => String)
  async CreateMor(
    @graphql.Args()
    args: CreateUserArgs
  ): Promise<string> {
    return this.service.CreateMor(args);
  }
}
