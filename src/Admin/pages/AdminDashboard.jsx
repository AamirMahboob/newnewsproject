import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    NewsTitle: Yup.string().required("Title is required"),
    Description: Yup.string().required("Description is required"),
    Link: Yup.string().url("Invalid URL format").required("Link is required"),
    Date: Yup.date()
      .required("Date is required")
      .typeError("Invalid date format"),
  });

  // Use React Hook Form with validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true); // Show loading state while submitting
    try {
      // Map the form data to match the API's expected field names
      const formattedData = {
        name: data.NewsTitle, // Map NewsTitle to name
        description: data.Description, // Map Description to description
        link: data.Link, // Map Link to link
        date: data.Date, // Map Date to date
      };

      // Send the formatted data to the API
      const response = await axios.post(
        "https://projectnewsbackend.vercel.app/api/createNews",
        formattedData
      );

      reset();
      // Handle successful response

      toast.warn("Data submitted successfully:");
    } catch (error) {
      // Handle errors
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-lg max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-4">Add News</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* News Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="NewsTitle">
            News Title
          </label>
          <input
            type="text"
            id="NewsTitle"
            {...register("NewsTitle")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            disabled={loading}
          />
          {errors.NewsTitle && (
            <p className="text-red-500 text-sm">{errors.NewsTitle.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="Description">
            Description
          </label>
          <textarea
            id="Description"
            {...register("Description")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            disabled={loading}
          />
          {errors.Description && (
            <p className="text-red-500 text-sm">{errors.Description.message}</p>
          )}
        </div>

        {/* Link Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="Link">
            Link
          </label>
          <input
            type="text"
            id="Link"
            {...register("Link")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            disabled={loading}
          />
          {errors.Link && (
            <p className="text-red-500 text-sm">{errors.Link.message}</p>
          )}
        </div>

        {/* Date Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="Date">
            Date
          </label>
          <input
            type="date"
            id="Date"
            {...register("Date")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            disabled={loading}
          />
          {errors.Date && (
            <p className="text-red-500 text-sm">{errors.Date.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
