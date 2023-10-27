import {t} from "astro-i18n";
import {useForm, type SubmitHandler} from "react-hook-form";
import {clsx} from "clsx";

interface IFormInput {
  name: string;
  email: string;
  menu: string;
  mealWish: string;
  wish: string;
}

export default function ParticipationForm() {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(`SVARGA: onSubmit`, data); // SVARGA: remove console.log
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-2 flex flex-col gap-2 lg:mb-4 lg:flex-row lg:gap-4">
        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                {t("participation.form.name")}
                <span className={clsx(errors.name ? "text-error" : "text-primary")}>&nbsp;&#42;</span>
              </span>
            </label>
            <input
              {...register("name", {required: t("participation.form.required")})}
              type="text"
              placeholder={t("participation.form.namePlaceholder")}
              className={`input input-bordered w-full ${clsx(errors.name && "input-error")}`}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.name.message}</span>
              </label>
            )}
          </div>
        </div>

        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                {t("participation.form.email")}
                <span className={clsx(errors.email ? "text-error" : "text-primary")}>&nbsp;&#42;</span>
              </span>
            </label>
            <input
              {...register("email", {
                required: t("participation.form.required"),
                pattern: {
                  value: new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm"),
                  message: t("participation.form.emailInvalidFormat"),
                },
              })}
              type="text"
              placeholder={t("participation.form.emailPlaceholder")}
              className={`input input-bordered w-full ${clsx(errors.email && "input-error")}`}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email.message}</span>
              </label>
            )}
          </div>
        </div>
      </div>

      <div className="mb-2 flex flex-col gap-2 lg:mb-4 lg:flex-row lg:gap-4">
        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                {t("participation.form.meal")}
                <span className={clsx(errors.menu ? "text-error" : "text-primary")}>&nbsp;&#42;</span>
              </span>
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <input
                {...register("menu", {required: t("participation.form.required")})}
                value="menu-1"
                type="radio"
                className={`radio checked:bg-primary ${clsx(errors.menu && "input-error")}`}
              />
              <span className="label-text">Menu 1</span>
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <input
                value="menu-2"
                {...register("menu", {required: t("participation.form.required")})}
                type="radio"
                className={`radio checked:bg-primary ${clsx(errors.menu && "input-error")}`}
              />
              <span className="label-text">Menu 2</span>
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <input
                value="menu-3"
                {...register("menu", {required: t("participation.form.required")})}
                type="radio"
                className={`radio checked:bg-primary ${clsx(errors.menu && "input-error")}`}
              />
              <span className="label-text">Menu 3</span>
            </label>

            {errors.menu && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.menu.message}</span>
              </label>
            )}
          </div>
        </div>

        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">{t("participation.form.mealWish")}</span>
              <span className="label-text-alt text-neutral-content">({t("participation.form.optional")})</span>
            </label>
            <textarea
              {...register("mealWish")}
              className="textarea textarea-bordered"
              placeholder={t("participation.form.mealWishPlaceholder")}
            />
          </div>
        </div>
      </div>

      <div className="form-control mb-2 lg:mb-4">
        <label className="label">
          <span className="label-text">{t("participation.form.wish")}</span>
          <span className="label-text-alt text-neutral-content">({t("participation.form.optional")})</span>
        </label>
        <textarea
          {...register("wish")}
          className="textarea textarea-bordered"
          placeholder={t("participation.form.wishPlaceholder")}></textarea>
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        {t("participation.form.send")}
      </button>

      <div className="label-text mx-auto mt-8 text-center text-xs text-neutral-content">
        {t("participation.form.problem")}&nbsp;
        <a href="mailto:abc@example.com" className="link hover:link-primary">
          ivanapeter2024@gmail.com
        </a>
      </div>
    </form>
  );
}
