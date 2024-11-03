import { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  

const BarChat = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const [appointmentData, setAppointmentData] = useState<any[]>([]);

    useEffect(() => {
      const randomAppointments = getRandomAppointments(12); // Generate random appointments for 12 months
      setAppointmentData(randomAppointments);
    }, []);
    const getRandomAppointments = (numAppointments: number) => {
        const appointments = [];
        const months = [
          'January', 'February', 'March', 'April', 'May',
          'June', 'July', 'August', 'September', 'October', 'November', 'December',
        ];
      
        for (let i = 0; i < numAppointments; i++) {
          appointments.push({
            month: months[i % months.length], // Cycle through months
            totalAppointments: Math.floor(Math.random() * 50) + 1, // Random appointments between 1 and 50
          });
        }
        return appointments;
      };
      
  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
  };

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  if (appointmentData.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <div className="w-full  bg-white lg:py-[40px] ">
      <ResponsiveContainer width={'100%'} height={500}>
        <BarChart
          data={appointmentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Bar
            dataKey="totalAppointments"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {appointmentData.map((index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}

          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChat
