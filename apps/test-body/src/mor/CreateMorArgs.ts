import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";

@ArgsType()
class CreateMorArgs {
    @Field(() => String)
    @Type(() => String)
    name!: string;

    @Field(() => String)
    @Type(() => String)
    address!: string;

    @Field(() => Number)
    @Type(() => Number)
    age!: number;
}

export { CreateMorArgs as CreateMorArgs };