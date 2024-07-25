import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VikaModuleBase } from "./base/vika.module.base";
import { VikaService } from "./vika.service";
import { VikaController } from "./vika.controller";

@Module({
  imports: [VikaModuleBase, forwardRef(() => AuthModule)],
  controllers: [VikaController],
  providers: [VikaService],
  exports: [VikaService],
})
export class VikaModule {}
