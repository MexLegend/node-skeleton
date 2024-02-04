import { badRequestError } from "@helpers/error.helper";
import { Schema, ValidationError } from "joi";

const validateHelper = async <T>(schema: Schema, data: T) => {
    try {
        await schema.validateAsync(data);
    } catch (error) {
        badRequestError((<ValidationError>error).details[0]?.message);
    }
}

export { validateHelper };
