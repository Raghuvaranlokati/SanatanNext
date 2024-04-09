// app/page.tsx
import DarkCard from '@/components/Card';
import Navbar from '@/components/base/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Your DarkCard components */}
          <DarkCard
            title="Shashi Tharoor Responds To Rajeev Chandrasekhar's Open Debate Challenge"
            description="This is the first card on the homepage."
            imageUrl="/news1.jpeg"
            date="April 9, 2024"
            time="10:30 AM"
          />
          <DarkCard
            title="Ramadan Food Waste Gets Converted Into Crop Fertiliser In Malaysia's Pahang"
            description="This is the second card on the homepage."
            imageUrl="/news2.jpeg"
            date="April 9, 2024"
            time="10:30 AM"
          />
          <DarkCard
            title="Murshidabad Women Support Congress' Adhir Chowdhury By Offering Rs 11,000"
            description="Shashi Tharoor Responds To Rajeev Chandrasekhar's Open Debate Challenge."
            imageUrl="/news3.jpeg"
            date="April 9, 2024"
            time="10:30 AM"
          />
          <DarkCard
            title="Murshidabad Women Support Congress' Adhir Chowdhury By Offering Rs 11,000"
            description="This is the fourth card on the homepage."
            imageUrl="/news4.jpeg"
            date="April 9, 2024"
            time="10:30 AM"
          />
          <DarkCard
            title="Murshidabad Women Support Congress' Adhir Chowdhury By Offering Rs 11,000"
            description="This is the fifth card on the homepage."
            imageUrl="/news5.jpeg"
            date="April 9, 2024"
            time="10:30 AM"
          />
          <DarkCard
            title="Ramadan Food Waste Gets Converted Into Crop Fertiliser In Malaysia's Pahang"
            description="This is the sixth card on the homepage."
            imageUrl="/news6.jpeg"
            date="April 9, 2024"
            time="10:30 AM"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
