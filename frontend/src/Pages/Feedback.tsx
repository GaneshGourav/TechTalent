import { useEffect, useRef,useState } from 'react';
import Chart from 'chart.js/auto';
import { Navbar } from '../Components/Navbar';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export function Feedback() {
 
  const navigate=useNavigate();
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const [data,setData] = useState<any>([])
  let first:Number;
  let second:Number;
  const [hiring,setHiring] = useState<String>("")

    useEffect(()=>{
        let str = localStorage.getItem("feedback");
        let data;
        str? data=JSON.parse(str): data=undefined;
        
        if(data===undefined){
            setData(undefined);
            return;
        }
        const extractedPart = data?.match(/\d+/g);
        const hired = data?.match(/(Hire|Strong Hire|Waitlist|Rejected)/)
        
        setData(extractedPart)
        first = +extractedPart[0];
        second = +extractedPart[2];
        setHiring(hired[0])
        setTimeout(() => {
         navigate("/")
        }, 5000);
        
    },[])


  useEffect(() => {
   
    if (chartRef.current) {
      const config:any = {
        type: 'doughnut',
        data: {
          labels: ['Communication Skills', 'Technical Skills'],
          datasets: [
            {
              data: [first, second],
              backgroundColor: ['#0fe34b', '#8524e0'],
            },
          ],
        },
      };
      new Chart(chartRef.current, config);
    }
  }, []);
  
if(!data){
  return <Navigate to="/" />
}
  

  return (
    <div>
    <Navbar />
    <Helmet>
      <title>Your Feedback</title>
    </Helmet>
    <div>

    <div style={{width:"400px"}} className='m-auto mt-28 bg-blue-200  rounded-full'>
      <h1 className='text-center font-bold p-2'>Communication Skills:- {data[0]}/10</h1>
      <h1 className='text-center font-bold pb-2'>Technical Skills:- {data[2]}/10</h1>
      <h1 className='text-center font-bold pb-2'>Hiring Criteria:- {hiring}</h1>
    </div>
    <br />
    <div style={{width:"400px"}} className='m-auto'>

    <canvas ref={chartRef} />
    </div><br/>
    <h1 className='text-center  font-bold text-xl'>This is the overall feedback based on Your Interview with SmartAI.</h1><br />
   
    </div>
   </div>
   );
}