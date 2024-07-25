import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MorService } from "./mor.service";
import { CreateMorArgs } from "./CreateMorArgs";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController {
  constructor(protected readonly service: MorService) {}

  @common.Post("")
  @swagger.ApiOkResponse({
    type: CreateMorArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateMor(
    @common.Body()
    body: string
  ): Promise<CreateMorArgs> {
        return this.service.CreateMor(body);
      }
}
