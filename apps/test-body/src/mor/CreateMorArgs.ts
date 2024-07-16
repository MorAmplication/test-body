import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class CreateMorArgs {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    address!: string;

    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    age!: number;
}

export { CreateMorArgs as CreateMorArgs };