import { Request } from "express";
import { rateLimit } from "express-rate-limit";

const rateLimitApi = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 6,
	message: "Exceeded limit, please try again after an some minutes",
	standardHeaders: true,
	legacyHeaders: false,
	keyGenerator: (request: Request): string => request.ip
})

export default rateLimitApi;
