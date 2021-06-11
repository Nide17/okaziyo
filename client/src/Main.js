import Categories from './components/Categories';
import Process from './components/Process';
import Browse from './components/Browse';
import Money from './components/Money';
import JobSlick from './components/slicks/JobSlick';
import ScholarshipSlick from './components/slicks/ScholarshipSlick';

const Main = () => {
    return (
        <>
            <Categories />
            <Process />
            <Browse />
            <Money />
            <JobSlick />
            <ScholarshipSlick />
        </>
    );
}

export default Main;