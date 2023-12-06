import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/Slices/TestSlice";
import { useEffect } from "react";
import { getUserSelector } from "../redux/selector";

const useUserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector(getUserSelector)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          dispatch(getUser());
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }; 
      fetchData();     
      return () => { 
      };
    }, [dispatch]);
  
    return userList;
  };
  
  export default useUserList;