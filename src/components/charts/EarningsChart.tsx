
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', earnings: 65 },
  { name: 'Feb', earnings: 89 },
  { name: 'Mar', earnings: 102 },
  { name: 'Apr', earnings: 134 },
  { name: 'May', earnings: 156 },
  { name: 'Jun', earnings: 178 },
];

const EarningsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1f2937', 
            border: 'none', 
            borderRadius: '8px',
            color: '#f9fafb'
          }} 
        />
        <Line 
          type="monotone" 
          dataKey="earnings" 
          stroke="#3b82f6" 
          strokeWidth={3}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          animationDuration={1000}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EarningsChart;
