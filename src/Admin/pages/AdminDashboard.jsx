import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const AdminDashboard = () => {
  // Define the validation schema with Yup
  const validationSchema = Yup.object({
    NewsTitle: Yup.string().required("Title is required"),
    Description: Yup.string().required("Description is required"),
    Link: Yup.string()
      .url("Invalid URL format")
      .required("Link is required"),
    Date: Yup.date()
      .required("Date is required")
      .typeError("Invalid date format"),
  });

  // Use React Hook Form with validation schema
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = async (data) => {
    try {
      // Map the form data to match the API's expected field names
      const formattedData = {
        name: data.NewsTitle, // Map NewsTitle to name
        description: data.Description, // Map Description to description
        link: data.Link, // Map Link to link
        date: data.Date, // Map Date to date
      };

      // Send the formatted data to the API
      const response = await axios.post("https://projectnewsbackend.vercel.app/api/createNews", formattedData);

      // Handle successful response
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-lg max-w-md mx-auto">
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
          />
          {errors.NewsTitle && <p className="text-red-500 text-sm">{errors.NewsTitle.message}</p>}
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
          />
          {errors.Description && <p className="text-red-500 text-sm">{errors.Description.message}</p>}
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
          />
          {errors.Link && <p className="text-red-500 text-sm">{errors.Link.message}</p>}
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
          />
          {errors.Date && <p className="text-red-500 text-sm">{errors.Date.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDashboard;
