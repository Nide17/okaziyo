import Categories from './components/Categories';
import Process from './components/Process';
import Browse from './components/Browse';
import Money from './components/Money';
import JobSlick from './components/slicks/jobs/JobSlick';
import ScholarshipSlick from './components/slicks/scholarships/ScholarshipSlick';

const Main = () => {
    return (
        <>
            <Categories />
            <Process />
            <JobSlick />
            <Browse />
            <Money />
            <ScholarshipSlick />
        </>
    );
}

export default Main;
