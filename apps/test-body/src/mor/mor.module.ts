import { Module } from "@nestjs/common";
import { MorService } from "./mor.service";
import { MorController } from "./mor.controller";

@Module({
  controllers: [MorController],
  providers: [MorService],
  exports: [MorService],
})
export class MorModule {}
