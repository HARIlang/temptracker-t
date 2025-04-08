import { backdropClasses } from '@mui/material';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const WindRadarChart = ({ windSpeed, windGust, windDirection }) => {
  const data = [
    { subject: "Wind Speed", value: windSpeed, fullMark: 50 },
    { subject: " Gust", value: windGust, fullMark: 50 },
    { subject: " Direction", value: windDirection / 10, fullMark: 36 }, // Normalize for visualization
  ];

  return (
    <RadarChart cx={200} cy={200} outerRadius={120} width={400} height={400} data={data} className='wind_radar'>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 50]} />
      <Radar name="Wind Data" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      
    </RadarChart>
  );
};

export default WindRadarChart;
