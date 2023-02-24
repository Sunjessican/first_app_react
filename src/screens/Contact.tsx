import { MdMarkEmailRead } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  subject: string;
  email: string;
  message: string;
};
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };
  return (
    <main>
      <h3 className="text-3xl font-extrabold mb-5">Contactez-moi</h3>
      <p className="flex items-center">
        <MdMarkEmailRead className="mr-3" />
        sandrineibraima@gmail.com
      </p>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block" htmlFor="subject">
            Sujet de la demande de contact
          </label>
          <input
            {...register("subject")}
            className="border"
            type="text"
            name="subject"
            id="subject"
            placeholder="Quel est le sujet ?"
          />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="border"
            type="email"
            name="email"
            id="email"
            placeholder="Votre email ?"
          />
          {errors.email && <p className="text-[red]">Email requis</p>}
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={10}
            className="border resize-none"
            name="message"
            id="message"
            placeholder="Votre message ?"
          />
        </div>

        <input
          type="submit"
          className="block bg-[orange] text-[white] py-3 px-3 hover:bg-[gray] font-extrabold"
        />
      </form>
    </main>
  );
};
