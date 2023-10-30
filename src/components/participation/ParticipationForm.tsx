import {t, astroI18n} from "astro-i18n";
import {useForm, type SubmitHandler} from "react-hook-form";
import {clsx} from "clsx";
import {useState} from "react";

interface IFormInput {
  name: string;
  email: string;
  menu: string;

  // Optional
  mealWish: string;
  wish: string;
}

const sleep = (delay = 2000) => new Promise((resolve) => setTimeout(resolve, delay));

export default function ParticipationForm() {
  const {
    register,
    formState: {errors},
    handleSubmit,
    watch,
  } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(0);
  const email = watch("email");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value != null && value !== "") {
        formData.append(key, value);
      }
    });
    formData.append("lang", astroI18n.locale);

    setResponseStatus(0);
    setLoading(true);

    // sleep to prevent spam
    await sleep();

    const response = await fetch("/api/feedback", {method: "POST", body: formData});

    setLoading(false);
    setResponseStatus(response.status);
  };

  if (responseStatus === 201) {
    return (
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-2xl uppercase">{t("participation.form.thankYou")}</h2>

        <svg className="h-20 w-20 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17.5693 13.2533L17.7822 13.3762C18.4393 13.7556 19.2655 13.6719 19.8332 13.1685C20.3473 12.7126 21.0794 12.597 21.709 12.8723L22.0005 12.9997"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.79513 2.77903C9.45764 3.33109 9.54223 4.04247 9.99976 4.5L10.0976 4.59788C10.4908 4.99104 10.6358 5.56862 10.4749 6.10085"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6.92761 3.94079C7.13708 3.73132 7.47669 3.73132 7.68616 3.94079C7.89563 4.15026 7.89563 4.48988 7.68616 4.69935C7.47669 4.90882 7.13708 4.90882 6.92761 4.69935C6.71814 4.48988 6.71814 4.15026 6.92761 3.94079Z"
            fill="#1C274C"
          />
          <path
            d="M12.1571 7.1571C12.3666 6.94763 12.7062 6.94763 12.9157 7.1571C13.1251 7.36657 13.1251 7.70619 12.9157 7.91566C12.7062 8.12512 12.3666 8.12512 12.1571 7.91566C11.9476 7.70619 11.9476 7.36657 12.1571 7.1571Z"
            fill="#1C274C"
          />
          <path
            d="M17.1571 10.1571C17.3666 9.94763 17.7062 9.94763 17.9157 10.1571C18.1251 10.3666 18.1251 10.7062 17.9157 10.9157C17.7062 11.1251 17.3666 11.1251 17.1571 10.9157C16.9476 10.7062 16.9476 10.3666 17.1571 10.1571Z"
            fill="#1C274C"
          />
          <path
            d="M19.0582 15.3134C19.2677 15.1039 19.6073 15.1039 19.8168 15.3134C20.0262 15.5228 20.0262 15.8624 19.8168 16.0719C19.6073 16.2814 19.2677 16.2814 19.0582 16.0719C18.8488 15.8624 18.8488 15.5228 19.0582 15.3134Z"
            fill="#1C274C"
          />
          <path
            d="M19.3615 7.71436C18.6912 8.38463 19.1722 10.328 19.1722 10.328C19.1722 10.328 21.1156 10.809 21.7859 10.1387C22.4958 9.42884 22.0941 8.49708 21.0002 8.5C21.0032 7.40615 20.0714 7.00447 19.3615 7.71436Z"
            strokeLinejoin="round"
          />
          <path d="M15.1884 3.41748L15.1608 3.51459C15.1305 3.62126 15.1153 3.67459 15.1225 3.72695C15.1296 3.77931 15.1583 3.82476 15.2157 3.91567L15.2679 3.99844C15.4698 4.31836 15.5707 4.47831 15.5019 4.60915C15.4332 4.73998 15.2402 4.75504 14.8544 4.78517L14.7546 4.79296C14.6449 4.80152 14.5901 4.8058 14.5422 4.83099C14.4943 4.85618 14.4587 4.89943 14.3875 4.98592L14.3226 5.06467C14.072 5.36905 13.9467 5.52124 13.8038 5.50167C13.6609 5.4821 13.595 5.30373 13.4632 4.94699L13.4291 4.85469C13.3916 4.75332 13.3729 4.70263 13.3361 4.66584C13.2993 4.62905 13.2486 4.61033 13.1472 4.57287L13.0549 4.53878C12.6982 4.40698 12.5198 4.34108 12.5003 4.19815C12.4807 4.05522 12.6329 3.92992 12.9373 3.67932L13.016 3.61448C13.1025 3.54327 13.1458 3.50767 13.1709 3.45974C13.1961 3.41181 13.2004 3.35699 13.209 3.24735L13.2168 3.14753C13.2469 2.76169 13.262 2.56877 13.3928 2.50001C13.5236 2.43124 13.6836 2.53217 14.0035 2.73403L14.0863 2.78626C14.1772 2.84362 14.2226 2.8723 14.275 2.87947C14.3273 2.88664 14.3807 2.87148 14.4873 2.84117L14.5845 2.81358C14.9598 2.70692 15.1475 2.65359 15.2479 2.75402C15.3483 2.85445 15.295 3.04213 15.1884 3.41748Z" />
        </svg>

        <div>
          {t("participation.form.confirmationSent")}
          <b>{email}</b>
        </div>

        <div>{t("participation.form.lookingForward")}</div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(error) =>
        handleSubmit(onSubmit)(error).catch(() => {
          setResponseStatus(422); //Unprocessable Content
          setLoading(false);
        })
      }
      className="w-full">
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

      {responseStatus !== 0 && responseStatus !== 201 && (
        <div className="alert alert-error">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /> <line x1="15" y1="9" x2="9" y2="15" />{" "}
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>

          <span>{t("participation.form.responseError")}</span>
        </div>
      )}

      <div className="grid place-content-center">
        <button type="submit" className="btn btn-primary btn-wide mt-4" disabled={loading}>
          {loading ? <span className="loading loading-infinity loading-lg"></span> : t("participation.form.send")}
        </button>
      </div>

      <div className="label-text mx-auto mt-8 text-center text-sm text-neutral-content">
        {t("participation.form.problem")}&nbsp;
        <a href="mailto:ivanapeter2024@gmail.com" className="link hover:link-primary">
          ivanapeter2024@gmail.com
        </a>
      </div>
    </form>
  );
}
