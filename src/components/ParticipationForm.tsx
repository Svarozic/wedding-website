import {useState} from "react";
import {t} from "astro-i18n";

export default function ParticipationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [menu, setMenu] = useState("menu-1");
  const [mealWish, setMealWish] = useState("");
  const [wish, setWish] = useState("");

  return (
    <div className="w-full">
      <div className="mb-2 flex flex-col gap-2 lg:mb-4 lg:flex-row lg:gap-4">
        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">{t("participation.form.name")}</span>
            </label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder={t("participation.form.namePlaceholder")}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">{t("participation.form.email")}</span>
            </label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder={t("participation.form.emailPlaceholder")}
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-2 flex flex-col gap-2 lg:mb-4 lg:flex-row lg:gap-4">
        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">{t("participation.form.meal")}</span>
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <input
                value="menu-1"
                checked={menu === "menu-1"}
                onChange={(event) => setMenu(event.target.value)}
                type="radio"
                className="radio checked:bg-primary"
              />
              <span className="label-text">Menu 1</span>
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <input
                value="menu-2"
                checked={menu === "menu-2"}
                onChange={(event) => setMenu(event.target.value)}
                type="radio"
                className="radio checked:bg-primary"
              />
              <span className="label-text">Menu 2</span>
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <input
                value="menu-3"
                checked={menu === "menu-3"}
                onChange={(event) => setMenu(event.target.value)}
                type="radio"
                className="radio checked:bg-primary"
              />
              <span className="label-text">Menu 3</span>
            </label>
          </div>
        </div>

        <div className="basis-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">{t("participation.form.mealWish")}</span>
              <span className="label-text-alt">({t("participation.form.optional")})</span>
            </label>
            <textarea
              value={mealWish}
              onChange={(event) => setMealWish(event.target.value)}
              className="textarea textarea-bordered"
              placeholder={t("participation.form.mealWishPlaceholder")}
            />
          </div>
        </div>
      </div>

      <div className="form-control mb-2 lg:mb-4">
        <label className="label">
          <span className="label-text">{t("participation.form.wish")}</span>
          <span className="label-text-alt">({t("participation.form.optional")})</span>
        </label>
        <textarea
          value={wish}
          onChange={(event) => setWish(event.target.value)}
          className="textarea textarea-bordered"
          placeholder={t("participation.form.wishPlaceholder")}></textarea>
      </div>

      <button className="btn btn-primary">{t("participation.form.send")}</button>
    </div>
  );
}
