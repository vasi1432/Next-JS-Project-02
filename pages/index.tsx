import LinkPage from "../components/linkPage";
import WorkSpaceradio from "../components/workSpaceRadio";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Header from "../components/header";
import { useRouter } from "next/router";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [data, setData] = useState("");

  const onSubmit = (data: any) => {
    localStorage.setItem("shortcutsData", JSON.stringify([data]));
  };

  const handleNavigate = () => {
    if (data === "") {
      return;
    }
    router.push("/final");
  };

  return (
    <>
      <div className="w-4/12 h-3/4 border-2 ">
        <Header></Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            {/* //shortcuts  */}

            <div className="mb-3">
              <div className="flex my-2">
                <span className=" text-gray-700 text-sm font-medium    pr-3 ">
                  Shortcut
                </span>
                <span className="inline-flex items-center space-x-1  text-xs  px-1.5 py-0.5  font-normal bg-green-100	  rounded ">
                  <span>Recommended</span>
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div
                  className={
                    errors?.shortcutName?.type === "required"
                      ? data === ""
                        ? "flex items-center w-full justify-between border-2 border-red-300	 rounded"
                        : "flex items-center w-full justify-between border-2 border-gray-300	 rounded"
                      : "flex items-center w-full justify-between border-2 border-gray-300	 rounded"
                  }
                >
                  <span className="text-gray-500 text-sm font-medium bg-gray-200 p-2">
                    o/
                  </span>
                  <input
                    {...register("shortcutName", {
                      required: true,
                    })}
                    type="text"
                    name="shortcutName"
                    className=" w-full h-full p-2 text-sm font-medium placeholder-gray-400  focus:outline-0   text-gray-900 "
                    placeholder="shortcut-name"
                    onChange={(e) => {
                      setData(e.target.value);
                    }}
                  ></input>
                </div>
                {errors?.shortcutName?.type === "required" && (
                  <p className="text-red-500 text-xs">
                    {data === "" ? "Please fill in the Shortcut name" : null}
                  </p>
                )}
                <WorkSpaceradio></WorkSpaceradio>
              </div>
              <span className="text-gray-500 text-sm font-medium">
                o/{data} - Workspace
              </span>
            </div>

            {/* radio buttons */}

            <div className="flex flex gap-6 m-6  ">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  className="h-4 w-4    text-indigo-600  border-gray-500 cursor-pointer "
                  name="shortcutType"
                  value="URL"
                ></input>
                <label className="w-full flex flex-row pl-8  cursor-pointer">
                  <span className="w-full flex flex-col">
                    <span className=" mt-px items-center flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 fill-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-900 text-sm font-medium">
                        Link
                      </span>
                    </span>
                  </span>
                </label>
              </div>

              <div className="relative flex items-center">
                <input
                  type="radio"
                  className="h-4 w-4   text-indigo-600   border-gray-500 cursor-pointer "
                  name="shortcutType"
                  value="SNIPPET"
                ></input>
                <label className="w-full flex flex-row   cursor-pointer">
                  <span className="w-full flex flex-col">
                    <span className="flex items-center ">
                      <span className="flex items-center  space-x-3 mt-px">
                        <svg
                          viewBox="0 0 16 16"
                          className="w-5 h-5 text-gray-900"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.64982 2.40039L5.06928 7.97844H2.3999L4.97613 2.40039H7.64982Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M7.81389 7.97852L5.23765 13.5566H2.56396L5.13971 7.97852H7.81389Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M12.1917 3.63055L8.88805 3.6225L8.69531 2.90332L11.9991 2.91138L12.1917 3.63055Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M13.8285 5.51921L8.00667 5.51117L7.81396 4.79199L13.6359 4.80004L13.8285 5.51921Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M12.9472 7.4079L7.12532 7.39984L6.93262 6.68066L12.7544 6.68871L12.9472 7.4079Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="text-gray-900 text-sm font-medium">
                          Snippet
                        </span>
                      </span>
                    </span>
                  </span>
                </label>
              </div>
            </div>

            {/* link components */}

            <LinkPage errors={errors} register={register}></LinkPage>
          </div>

          {/* footer */}

          <div className="border-t-2 flex justify-between p-2 items-center">
            <span className="text-gray-500 text-xs font-normal">
              Use CTRL + ⇧ + U to create Shortcut
            </span>
            <div className="flex gap-2 p-1">
              <input
                type="button"
                className="font-medium cursor-pointer	  px-3 py-1  border-2 rounded "
                value="Cancel"
              />

              <input
                type="submit"
                className=" bg-black text-white font-medium cursor-pointer	  px-3 py-1 rounded"
                value="Save"
                onClick={handleNavigate}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
