import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { PuffLoader } from 'react-spinners'; // Import a loader for animation

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getNews');
        if (response?.data?.data?.length === 0) {
          toast.warn('No news available at the moment!');
        }
        setData(response?.data?.data);
      } catch (error) {
        toast.error('Error fetching news data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(data,data)
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
 

      {/* News Grid */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h1>

        {/* Loader while data is being fetched */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <PuffLoader color="#4B8BF4" size={100} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.length > 0 ? (
              data?.map((item, index) => (
                <NewsCard key={index} data={item} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-4">No news available.</p>
            )}
          </div>
        )}
      </div>
 
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Home;
