import { Module } from "@nestjs/common";
import { MorService } from "./mor.service";
import { MorResolver } from "./mor.resolver";

@Module({
  providers: [MorService, MorResolver],
  exports: [MorService]
})
export class MorModule {}
