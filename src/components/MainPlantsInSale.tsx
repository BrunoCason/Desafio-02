import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataProps } from '../mocks/dataProps';
import ProductSlider from './ProductSlider';

export default function MainThisWeeks() {
  const [allData, setAllData] = useState<DataProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/plants?_start=5&_limit=10');
        setAllData({ plants: response.data });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container overflow-hidden">
      <h2 className="capitalize font-garamond font-bold text-6.5xl text-center">
        <span className="text-avacado">plants in</span>
        <span className="text-lunar-green"> sale</span>
      </h2>

      {
        allData && <ProductSlider products={allData.plants} />
      }
      
    </section>
  )
}
