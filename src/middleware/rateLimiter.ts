import rateLimit from 'express-rate-limit';

export const domainRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 1,              // limit each IP to 1 request per windowMs
  message: {
    success: false,
    message: "Too many requests. Please try again after 1 minute.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});