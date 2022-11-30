export default function LinkPage({ errors, register }: any) {
  // console.log({ errors });

  return (
    <div className="flex flex-col gap-4 ">
      {/* first <input type="text" /> */}
      <div>
        <label className="block text-gray-700 text-xs font-medium  truncate  pr-3 ">
          Destination URL
        </label>
        <input
          type="text"
          {...register("URL", {
            required: true,
          })}
          name="URL"
          className={
            errors?.URL?.type === "required"
              ? "w-full h-full p-2 text-sm font-medium placeholder-gray-400 border-red-300  text-gray-900 border-2 rounded "
              : "w-full h-full p-2 text-sm font-medium placeholder-gray-400 border-gray-300  focus:outline-0  text-gray-900 border-2 rounded "
          }
          placeholder="Paste the full URL of the page you want to get to"
        ></input>
        {errors?.URL?.type === "required" && (
          <p className="text-red-500 text-xs">Destination URL is required</p>
        )}

        <span className="text-gray-500 text-sm font-medium">
          Replace the query string in URL to create a dynamic shortcut
        </span>
      </div>

      {/* secoun <input type="text" /> */}
      <div>
        <div className="flex mb-1">
          <label className="block text-gray-700 text-sm font-medium  truncate  pr-3 ">
            Description
          </label>
          <span className="flex-shrink-0 leading-none ml-auto bg-gray-100 rounded">
            <span
              className="inline-flex items-center space-x-1  text-xs min-w-5 px-1.5 py-0.5 
       font-medium  pill-info 
       rounded "
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-3 h-3 text-gray-500 fill-current"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                </svg>
              </span>
              <span>Optional</span>
            </span>
          </span>
        </div>
        <input
          type="text"
          name="description"
          {...register("description", {
            required: true,
          })}
          className="w-full h-full p-2 text-sm font-medium placeholder-gray-400 border-gray-300  focus:outline-0  text-gray-900 border-2 rounded "
          placeholder="Something to describe the destination page"
        ></input>
        <span
          data-testid="forms.shortlink.shortlinkForm.description_input_error_label"
          className="text-gray-500 text-sm font-medium"
        >
          250 characters left
        </span>
      </div>

      {/* third <input type="text" /> */}
      <div>
        <p className="text-gray-700 text-sm font-medium mb-1">Tags</p>
        <input
          type="text"
          name="tagsComboBox"
          className="w-full h-full placeholder-gray-400 text-gray-900 p-2    text-sm pl-9  font-medium bg-white border border-gray-300 rounded focus:outline-none "
          placeholder="Add tags"
        ></input>
      </div>
    </div>
  );
}
