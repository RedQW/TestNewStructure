import FormAndButton from '../features/TestPage/FormModal';
import TableExample1 from '../features/TestPage/TableExamle';
import useUserList from '../hooks/useUserList';
const TestPage = () => {
    const userList= useUserList()
    return (
        <div>
             <FormAndButton></FormAndButton>
             <TableExample1 dataSource={userList}></TableExample1>
        </div>
    );
};

export default TestPage;