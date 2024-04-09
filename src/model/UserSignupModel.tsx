import { z } from "zod";

// Définir le schéma de validation avec Zod
export const userSchema = z.object({
  email: z.string().email(),
  matricule: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  city: z.string(),
  country: z.string(),
  nationality: z.string().default("Cameroun"),
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/), // Expression régulière pour un numéro de téléphone international
  is_teacher: z.boolean(),
});

export const dataSchema = z.object({
  user: userSchema,
  level: z.number(),
  is_delegate: z.boolean(),
  option: z.number(),
});

// Générer le hook avec React Hook Form
// export const useFormData = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur", // Valider les champs au blur
//   });

//   const onSubmit: SubmitHandler<(typeof dataSchema)["_output"]> = (data) => {
//     console.log(data); // Faire quelque chose avec les données soumises
//   };

//   return { register, handleSubmit, errors, onSubmit };
// };

export type UserSignUpType = z.infer<typeof dataSchema>;
