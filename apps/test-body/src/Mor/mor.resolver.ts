import * as graphql from "@nestjs/graphql";
import { CreateMorArgs } from "../mor/CreateMorArgs";
import { MorService } from "../mor/mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}

  @graphql.Mutation(() => String)
  async CreateMor(
    @graphql.Args()
    args: CreateMorArgs
  ): Promise<string> {
    return this.service.CreateMor(args);
  }
}
