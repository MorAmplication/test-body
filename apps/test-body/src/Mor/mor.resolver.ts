import * as graphql from "@nestjs/graphql";
import { CreateMorArgs } from "../mor/CreateMorArgs";
import { MorService } from "../mor/mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}

  @graphql.Mutation(() => CreateMorArgs)
  async CreateMor(
    @graphql.Args()
    args: CreateMorArgs
  ): Promise<CreateMorArgs> {
    return this.service.CreateMor(args);
  }
}
