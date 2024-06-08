import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Nome inválido"),
  email: z.string().email("Email inválido"),
  age: z.number().positive("Idade inválida"),
});

const validateCreateUser = (req, res, next) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    const errorMessage = error.errors.map((err) => err.message);
    return res.status(400).json({ error: errorMessage });
  }
};

const validateUpdateUser = (req, res, next) => {
  try {
    userSchema.partial().parse(req.body);
    next();
  } catch (error) {
    const errorMessage = error.errors.map((err) => err.message);
    return res.status(400).json({ error: errorMessage });
  }
};

export { validateCreateUser, validateUpdateUser };
