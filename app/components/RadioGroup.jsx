// "use client";
// import { useState } from 'react';

// export default function RadioGroup() {
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleRadioChange = (e) => {
//     setSelectedValue(e.target.value);
//   };

//   const options = [
//     {
//       value: 'option1',
//       label: 'Option 1',
//       imageSrc: '/path/to/image1.jpg',
//     },
//     {
//       value: 'option2',
//       label: 'Option 2',
//       imageSrc: '/path/to/image2.jpg',
//     },
//   ];

//   return (
//     <div className="flex space-x-6">
//       {options.map((option) => (
//         <label key={option.value} className="flex items-center space-x-4 cursor-pointer">
//           <input
//             type="radio"
//             name="option"
//             value={option.value}
//             checked={selectedValue === option.value}
//             onChange={handleRadioChange}
//             className="hidden peer"
//           />
//           <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
//             <img src={option.imageSrc} alt={option.label} className="w-8 h-8 object-cover" />
//           </div>
//           <span className="peer-checked:text-blue-500">{option.label}</span>
//         </label>
//       ))}
//     </div>
//   );
// }
