import { badRequestError } from "@helpers/error.helper";
import { Schema } from "joi";

const validateHelper = async <T>(schema: Schema, data: T) => {
    try {
        await schema.validateAsync(data);
    } catch (error) {
        badRequestError
    }
}

export { validateHelper };
