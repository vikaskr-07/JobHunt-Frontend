import { setCompanies } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true });
                console.log('called');
                
                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                if (error.response) {
                    console.error('Error response:', error.response.data);
                    console.error('Error status:', error.response.status);
                } else {
                    console.error('Error message:', error.message);
                }
            }
        };
        
        fetchCompanies();
    }, [dispatch]);
};

export default useGetAllCompanies;
