/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VikaService } from "../vika.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VikaCreateInput } from "./VikaCreateInput";
import { Vika } from "./Vika";
import { VikaFindManyArgs } from "./VikaFindManyArgs";
import { VikaWhereUniqueInput } from "./VikaWhereUniqueInput";
import { VikaUpdateInput } from "./VikaUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VikaControllerBase {
  constructor(
    protected readonly service: VikaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vika })
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVika(@common.Body() data: VikaCreateInput): Promise<Vika> {
    return await this.service.createVika({
      data: data,
      select: {
        atest: true,
        btest: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        wtest: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Vika] })
  @ApiNestedQuery(VikaFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vikas(@common.Req() request: Request): Promise<Vika[]> {
    const args = plainToClass(VikaFindManyArgs, request.query);
    return this.service.vikas({
      ...args,
      select: {
        atest: true,
        btest: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        wtest: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vika })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vika(
    @common.Param() params: VikaWhereUniqueInput
  ): Promise<Vika | null> {
    const result = await this.service.vika({
      where: params,
      select: {
        atest: true,
        btest: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        wtest: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vika })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVika(
    @common.Param() params: VikaWhereUniqueInput,
    @common.Body() data: VikaUpdateInput
  ): Promise<Vika | null> {
    try {
      return await this.service.updateVika({
        where: params,
        data: data,
        select: {
          atest: true,
          btest: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          wtest: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vika })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVika(
    @common.Param() params: VikaWhereUniqueInput
  ): Promise<Vika | null> {
    try {
      return await this.service.deleteVika({
        where: params,
        select: {
          atest: true,
          btest: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          wtest: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
